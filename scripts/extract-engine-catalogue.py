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


def clean_name(raw: str | None, family: str) -> str:
    if not raw:
        return "[Name pending review]"
    name = raw.replace("\n", " ")
    name = re.sub(rf"\b{family}\b", "", name, flags=re.I)
    name = re.sub(r"\b\d{3}F\b", "", name, flags=re.I)
    name = re.sub(r"\s+", " ", name).strip(" ,-/")
    if not name or name.upper() in SKIP_NAMES:
        return "[Name pending review]"
    return name


def infer_category(name: str) -> str:
    n = name.upper()
    rules = [
        (r"cylinder head|valve|rocker|intake|exhaust|valve seat|valve guide|valve spring|plunger", "cylinder-head-valve-train"),
        (r"crankcase|crankshaft|connecting rod|piston|piston ring|camshaft|governor|flywheel", "crankcase-crankshaft-piston"),
        (r"timing|gear assy|gear assembly", "timing"),
        (r"starter|recoil|ignition|coil|spark|switch|electric", "starter-electric"),
        (r"air filter|air intake|carburetor|carburettor|insulator", "air-intake-filter"),
        (r"fuel|injector|injection|diesel filter|plunger|carb", "fuel-system"),
        (r"muffler|exhaust|silencer", "exhaust-muffler"),
        (r"gasket|seal|washer|shim|o-ring|oil seal", "gaskets-seals"),
        (r"fuel tank|tank cap|petrol tank", "fuel-tank-cap"),
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
