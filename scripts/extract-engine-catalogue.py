"""Extract engine spare parts from catalogue PDFs into TypeScript data."""
from __future__ import annotations

import json
import re
from pathlib import Path

import pdfplumber

ROOT = Path(__file__).resolve().parents[1]
CATALOGUE_DIR = ROOT / "docs" / "catalogues"
OUT_JSON = ROOT / "scripts" / "engine-products.json"
OUT_TS = ROOT / "src" / "data" / "engineProducts.ts"

CATALOGUES = {
    "170FUPDATEDCATALOGUE.pdf": {"family": "170F", "fuel": "petrol"},
    "173FDIESELENGINESPARES.pdf": {"family": "173F", "fuel": "diesel"},
    "177FPETROLENGINESPARES.pdf": {"family": "177F", "fuel": "petrol"},
    "186FDIESELENGINESPARES.pdf": {"family": "186F", "fuel": "diesel"},
}

CODE_RE = re.compile(r"^\d{3}F-\d{3}$", re.I)
SKIP_NAMES = {"ITEM CODE", "ITEM NAME", "PICTURE", "NO.", "SL", "SL.NO"}

# Whole-word spelling corrections for names as printed in the supplier
# catalogues (added 2026-11-16; without these the typos regenerate).
SPELLING_FIXES = [
    (re.compile(r"\bCARBURATOR\b"), "CARBURETOR"),
    (re.compile(r"\bACCERELATOR\b"), "ACCELERATOR"),
    (re.compile(r"\bDIPSSTICK\b"), "DIPSTICK"),
    (re.compile(r"\bAIRC\b"), "AIR"),
    (re.compile(r"\bHEXAGANOL\b"), "HEXAGONAL"),
    (re.compile(r"\bUMBEREALLA\b"), "UMBRELLA"),
    (re.compile(r"\bTAPET\b"), "TAPPET"),
]


def clean_name(raw: str | None, family: str) -> str:
    if not raw:
        return "[Name pending review]"
    name = raw.replace("\n", " ")
    name = re.sub(rf"\b{family}\b", "", name, flags=re.I)
    name = re.sub(r"\b\d{3}F\b", "", name, flags=re.I)
    name = re.sub(r"\s+", " ", name).strip(" ,-/")
    for pat, rep in SPELLING_FIXES:
        name = pat.sub(rep, name)
    if not name or name.upper() in SKIP_NAMES:
        return "[Name pending review]"
    return name


def infer_category(name: str) -> str:
    # First match wins. Order matters: specific parts before the systems
    # they belong to (gaskets before systems, fuel before air, starter
    # before fasteners, crankcase before fasteners/valve-train,
    # valve-train before exhaust, transmission before bearings).
    n = name.upper()
    rules = [
        (r"FUEL TANK|PETROL TANK|DIESEL TANK|TANK CAP|FUEL CAP|PETROL CAP", "fuel-tank-cap"),
        (r"GASKET|OIL SEAL|\bSEAL\b|O-RING|O RING|RUBBER RING", "gaskets-seals"),
        (r"FUEL INJECTOR|FUEL INJECTION|INJECTOR|INJECTION|DIESEL FILTER|FUEL FILTER|FUEL PIPE|PLUNGER|THROTTLE|PETROL TUBE|ACCELERATOR CABLE|\bFUEL\b", "fuel-system"),
        (r"AIR FILTER|AIR CLEANER|CARBURETOR|CARBURETTOR|INSULATOR|AIR DUCT|\bFILTER\b", "air-intake-filter"),
        (r"STARTER|RECOIL|IGNITION|COIL|SPARK|\bPLUG\b|SWITCH|ELECTRIC|BATTERY|MOTOR|EMERGENCY STOP|STOP CABLE|STARTING", "starter-electric"),
        (r"PISTON|CRANKSHAFT|CRANKCASE|CRANK CASE|CONNECTING ROD|CAMSHAFT|GOVERNOR|FLYWHEEL|FLY WHEEL|BALANCE|SPEED CONTROL|SPEED REGULATING|DIPSTICK", "crankcase-crankshaft-piston"),
        (r"\bBOLT\b|\bNUT\b|\bSCREW\b|\bSTUD\b|\bPIN\b|COTTER|WASHER|SHIM|\bKEY\b", "fasteners"),
        (r"CYLINDER HEAD|VALVE|ROCKER|TAPPET|PUSH ROD", "cylinder-head-valve-train"),
        (r"MUFFLER|EXHAUST|SILENCER", "exhaust-muffler"),
        (r"CLUTCH|GEAR BOX|GEARBOX|TRANSMISSION|REVERSE|BEVEL|PTO|SHIFT|LAY SHAFT|MAIN SHAFT|DRIVEN|PULL ROD|\bGEAR\b|171 |\bSHAFT\b", "transmission-clutch"),
        (r"BEARING", "bearings"),
        (r"TYRE|TIRE|\bRIM\b", "wheels-tyres"),
        (r"\bFAN\b", "cooling"),
    ]
    for pat, cat in rules:
        if re.search(pat, n):
            return cat
    return "other"


def infer_quality(name: str) -> str | None:
    n = name.upper()
    if "ECONOMIC" in n:
        return "economic"
    if "HIGH QUALITY" in n or "PREMIUM" in n:
        return "premium"
    return None


def parse_tables(pdf_path: Path, meta: dict) -> list[dict]:
    products: list[dict] = []
    seen: set[str] = set()
    family = meta["family"]

    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            tables = page.extract_tables() or []
            for table in tables:
                for row in table:
                    if not row or len(row) < 3:
                        continue
                    code_cell = (row[1] or "").strip()
                    name_cell = row[2] if len(row) > 2 else None
                    if not CODE_RE.match(code_cell):
                        continue
                    code = code_cell.upper()
                    if code in seen:
                        continue
                    seen.add(code)
                    name = clean_name(name_cell, family)
                    item = {
                        "id": code.lower(),
                        "itemCode": code,
                        "name": name,
                        "engineFamily": family,
                        "fuelType": meta["fuel"],
                        "category": infer_category(name),
                        "catalogueSource": pdf_path.name,
                        "needsReview": name == "[Name pending review]",
                    }
                    q = infer_quality(name)
                    if q:
                        item["qualityVariant"] = q
                    products.append(item)
    return products


def main() -> None:
    all_products: list[dict] = []
    for filename, meta in CATALOGUES.items():
        path = CATALOGUE_DIR / filename
        if not path.exists():
            raise FileNotFoundError(f"Missing catalogue: {path}")
        items = parse_tables(path, meta)
        print(f"{filename}: {len(items)} items")
        all_products.extend(items)

    all_products.sort(key=lambda p: p["itemCode"])
    OUT_JSON.write_text(json.dumps(all_products, indent=2, ensure_ascii=False), encoding="utf-8")

    ts_lines = [
        "/** Auto-generated from catalogue PDFs. Run: python scripts/extract-engine-catalogue.py */",
        "export type EngineFamily = '170F' | '173F' | '177F' | '186F';",
        "export type FuelType = 'petrol' | 'diesel';",
        "export type EngineCategory =",
        "  | 'cylinder-head-valve-train'",
        "  | 'crankcase-crankshaft-piston'",
        "  | 'timing'",
        "  | 'starter-electric'",
        "  | 'air-intake-filter'",
        "  | 'fuel-system'",
        "  | 'exhaust-muffler'",
        "  | 'gaskets-seals'",
        "  | 'fuel-tank-cap'",
        "  | 'transmission-clutch'",
        "  | 'fasteners'",
        "  | 'bearings'",
        "  | 'wheels-tyres'",
        "  | 'cooling'",
        "  | 'other';",
        "export type QualityVariant = 'economic' | 'premium';",
        "",
        "export interface EngineProduct {",
        "  id: string;",
        "  itemCode: string;",
        "  name: string;",
        "  engineFamily: EngineFamily;",
        "  fuelType: FuelType;",
        "  category: EngineCategory;",
        "  qualityVariant?: QualityVariant;",
        "  catalogueSource: string;",
        "  needsReview?: boolean;",
        "}",
        "",
        "export const ENGINE_CATALOGUE_FILES = [",
        "  { family: '170F' as const, label: '170F Petrol Engine Spares', file: '170FUPDATEDCATALOGUE.pdf' },",
        "  { family: '173F' as const, label: '173F Diesel Engine Spares', file: '173FDIESELENGINESPARES.pdf' },",
        "  { family: '177F' as const, label: '177F Petrol Engine Spares', file: '177FPETROLENGINESPARES.pdf' },",
        "  { family: '186F' as const, label: '186F Diesel Engine Spares', file: '186FDIESELENGINESPARES.pdf' },",
        "] as const;",
        "",
        "export const ENGINE_PRODUCTS: EngineProduct[] = ",
        json.dumps(all_products, indent=2, ensure_ascii=False),
        ";",
        "",
    ]
    OUT_TS.parent.mkdir(parents=True, exist_ok=True)
    OUT_TS.write_text("\n".join(ts_lines), encoding="utf-8")
    print(f"Total: {len(all_products)} products")
    print(f"Written: {OUT_TS}")


if __name__ == "__main__":
    main()
