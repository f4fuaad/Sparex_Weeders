/** Auto-generated from catalogue PDFs. Run: python scripts/extract-engine-catalogue.py */
export type EngineFamily = '170F' | '173F' | '177F' | '186F';
export type FuelType = 'petrol' | 'diesel';
export type EngineCategory =
  | 'cylinder-head-valve-train'
  | 'crankcase-crankshaft-piston'
  | 'timing'
  | 'starter-electric'
  | 'air-intake-filter'
  | 'fuel-system'
  | 'exhaust-muffler'
  | 'gaskets-seals'
  | 'fuel-tank-cap'
  | 'other';
export type QualityVariant = 'economic' | 'premium';

export interface EngineProduct {
  id: string;
  itemCode: string;
  name: string;
  engineFamily: EngineFamily;
  fuelType: FuelType;
  category: EngineCategory;
  qualityVariant?: QualityVariant;
  catalogueSource: string;
  needsReview?: boolean;
}

export const ENGINE_CATALOGUE_FILES = [
  { family: '170F' as const, label: '170F Petrol Engine Spares', file: '170FUPDATEDCATALOGUE.pdf' },
  { family: '173F' as const, label: '173F Diesel Engine Spares', file: '173FDIESELENGINESPARES.pdf' },
  { family: '177F' as const, label: '177F Petrol Engine Spares', file: '177FPETROLENGINESPARES.pdf' },
  { family: '186F' as const, label: '186F Diesel Engine Spares', file: '186FDIESELENGINESPARES.pdf' },
] as const;

export const ENGINE_PRODUCTS: EngineProduct[] = 
[
  {
    "id": "170f-001",
    "itemCode": "170F-001",
    "name": "SPARK PLUG",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-002",
    "itemCode": "170F-002",
    "name": "AIR FILTER CLASSIC (OIL BATH)",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-003",
    "itemCode": "170F-003",
    "name": "RECOIL STARTER",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-004",
    "itemCode": "170F-004",
    "name": "STARTER SPRING",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-005",
    "itemCode": "170F-005",
    "name": "STARTER REEL",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-006",
    "itemCode": "170F-006",
    "name": "STARTER ROPE (SINGLE PIECE) 1.25m",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-007",
    "itemCode": "170F-007",
    "name": "STARTER HANDLE PVC",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-008",
    "itemCode": "170F-008",
    "name": "STARTER PAWL KIT",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-009",
    "itemCode": "170F-009",
    "name": "CARBURATOR (HIGH QUALITY)",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false,
    "qualityVariant": "premium"
  },
  {
    "id": "170f-010",
    "itemCode": "170F-010",
    "name": "INSULATOR",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-011",
    "itemCode": "170F-011",
    "name": "SWITCH WITH WIRE",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-012",
    "itemCode": "170F-012",
    "name": "CYLINDER HEAD",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-013",
    "itemCode": "170F-013",
    "name": "PISTON SET WITH RINGS",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-014",
    "itemCode": "170F-014",
    "name": "CRANKSHAFT (25MM)",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-015",
    "itemCode": "170F-015",
    "name": "IGNITION COIL",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-016",
    "itemCode": "170F-016",
    "name": "OIL SEAL",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-017",
    "itemCode": "170F-017",
    "name": "OIL SEAL (20*35*7)",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-018",
    "itemCode": "170F-018",
    "name": "OIL SEAL (25*47*7)",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-019",
    "itemCode": "170F-019",
    "name": "ENGINE VALVE (SET) HIGH QUALITY",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false,
    "qualityVariant": "premium"
  },
  {
    "id": "170f-020",
    "itemCode": "170F-020",
    "name": "ENGINE VALVE (SET) ECONOMY QUALITY",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-021",
    "itemCode": "170F-021",
    "name": "CONNECTING ROD",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-022",
    "itemCode": "170F-022",
    "name": "IRON CAMSHAFT",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-023",
    "itemCode": "170F-023",
    "name": "PETROL TANK",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-024",
    "itemCode": "170F-024",
    "name": "PETROL CAP",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-025",
    "itemCode": "170F-025",
    "name": "OIL GAUGE",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-026",
    "itemCode": "170F-026",
    "name": "CRANK CASE",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-027",
    "itemCode": "170F-027",
    "name": "SILENCER",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-028",
    "itemCode": "170F-028",
    "name": "7 HP CLUTCH 8 LEAF",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-029",
    "itemCode": "170F-029",
    "name": "7HP CLUTCH 12 LEAF",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-030",
    "itemCode": "170F-030",
    "name": "7 HP REVERSE CLUTCH 8 LEAF",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-031",
    "itemCode": "170F-031",
    "name": "7 HP REVERSE CLUTCH 12 LEAF",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-032",
    "itemCode": "170F-032",
    "name": "7HP CLUTCH COVER 8 LEAF",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-033",
    "itemCode": "170F-033",
    "name": "7HP CLUTCH COVER 12 LEAF",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-034",
    "itemCode": "170F-034",
    "name": "CARBURATOR GASKET",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-035",
    "itemCode": "170F-035",
    "name": "AIR FILTER GASKET",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-036",
    "itemCode": "170F-036",
    "name": "INSULATOR GASKET",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-037",
    "itemCode": "170F-037",
    "name": "SILENCER GASKET",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-038",
    "itemCode": "170F-038",
    "name": "CYLINDER GASKET",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-039",
    "itemCode": "170F-039",
    "name": "CRANKCASE GASKET",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-040",
    "itemCode": "170F-040",
    "name": "CYLINDER HEAD GASKET",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-041",
    "itemCode": "170F-041",
    "name": "GASKET SET",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-042",
    "itemCode": "170F-042",
    "name": "7HP ACCERELATOR CABLE",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-043",
    "itemCode": "170F-043",
    "name": "7HP REVERSE CABLE",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-044",
    "itemCode": "170F-044",
    "name": "7HP CLUTCH CABLE",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-045",
    "itemCode": "170F-045",
    "name": "7 HP EMERGENCY STOP CABLE",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-046",
    "itemCode": "170F-046",
    "name": "7HP THROTTLE SWITCH",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-047",
    "itemCode": "170F-047",
    "name": "7HP/9HP START STOP SWITCH WITH CABLE",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-048",
    "itemCode": "170F-048",
    "name": "7HP/9HP CLUTCH HANDLE WITH PINS",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-049",
    "itemCode": "170F-049",
    "name": "7HP/9HP REVERSE HANDLE",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-050",
    "itemCode": "170F-050",
    "name": "CLUTCH HANDLE COTTER WITH PIN (M10*22)",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-051",
    "itemCode": "170F-051",
    "name": "COTTER WITH PIN (M7*22)",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-052",
    "itemCode": "170F-052",
    "name": "COTTER ONLY (M8*50)",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-053",
    "itemCode": "170F-053",
    "name": "R PIN (#2)",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-054",
    "itemCode": "170F-054",
    "name": "LATCH (#16)",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-055",
    "itemCode": "170F-055",
    "name": "R PIN (#3)",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-056",
    "itemCode": "170F-056",
    "name": "OIL DRAIN BOLT",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-057",
    "itemCode": "170F-057",
    "name": "FLANGE ENGINE GASKET",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-058",
    "itemCode": "170F-058",
    "name": "FLANGE GEAR BOX GASKET",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-059",
    "itemCode": "170F-059",
    "name": "RETAINING GASKET (#16)",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-060",
    "itemCode": "170F-060",
    "name": "SIDE COVER GASKET",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-061",
    "itemCode": "170F-061",
    "name": "CLUTCH GASKET (16*26*3)",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-062",
    "itemCode": "170F-062",
    "name": "MUD BLOCK COVER",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-063",
    "itemCode": "170F-063",
    "name": "HANDLE FRAME LOCKER",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-064",
    "itemCode": "170F-064",
    "name": "HINGE",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-065",
    "itemCode": "170F-065",
    "name": "HINGE CONNECTOR",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-066",
    "itemCode": "170F-066",
    "name": "MUD FENDER FRONT HOLDER",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-067",
    "itemCode": "170F-067",
    "name": "HEXAGANOL SHAFT",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-068",
    "itemCode": "170F-068",
    "name": "400-8 TYRE ONLY",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-069",
    "itemCode": "170F-069",
    "name": "400-8 TYRE TUBE",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-070",
    "itemCode": "170F-070",
    "name": "ENGINE (25MM CRANKSHAFT) FOR WEEDER - ( HIGH QUALITY )",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false,
    "qualityVariant": "premium"
  },
  {
    "id": "170f-071",
    "itemCode": "170F-071",
    "name": "ENGINE (25MM CRANKSHAFT) FOR WEEDER ( HUAYI CARBURATOR - PREMIUM QUALITY )",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false,
    "qualityVariant": "premium"
  },
  {
    "id": "170f-072",
    "itemCode": "170F-072",
    "name": "FUEL TANK STRIANER",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-073",
    "itemCode": "170F-073",
    "name": "OIL OUTLET NOZZLE",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-074",
    "itemCode": "170F-074",
    "name": "SPEED CONTROL GEAR SET",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-075",
    "itemCode": "170F-075",
    "name": "VALVE SPRING SEAT",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-076",
    "itemCode": "170F-076",
    "name": "SPRING SET (3PCS)",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-077",
    "itemCode": "170F-077",
    "name": "SPEED REGULATING SPRING",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-078",
    "itemCode": "170F-078",
    "name": "SPEED CONTROLLING SEAT",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-079",
    "itemCode": "170F-079",
    "name": "PISTON RINGS",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-080",
    "itemCode": "170F-080",
    "name": "SWITCH WITH WIRE (3LINE)",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-081",
    "itemCode": "170F-081",
    "name": "BUMPER",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-082",
    "itemCode": "170F-082",
    "name": "MAIN SHAFT GEAR",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-083",
    "itemCode": "170F-083",
    "name": "UMBEREALLA BEVEL 30T GEAR",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-084",
    "itemCode": "170F-084",
    "name": "DRIVEN BEVEL GEAR SHAFT",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-085",
    "itemCode": "170F-085",
    "name": "LAY SHAFT",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-086",
    "itemCode": "170F-086",
    "name": "CYLINDER STUD",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-087",
    "itemCode": "170F-087",
    "name": "STARTER SCREW",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-088",
    "itemCode": "170F-088",
    "name": "AIR FILTER BOLT",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-089",
    "itemCode": "170F-089",
    "name": "BEARING 30203",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-090",
    "itemCode": "170F-090",
    "name": "BEARING 30204",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-091",
    "itemCode": "170F-091",
    "name": "BEARING 30205",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-092",
    "itemCode": "170F-092",
    "name": "CLUTCH FORK",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-093",
    "itemCode": "170F-093",
    "name": "CLUTCH WIRE BASE (M8*30)",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-094",
    "itemCode": "170F-094",
    "name": "DOUBLE WIRE BASE",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-095",
    "itemCode": "170F-095",
    "name": "BLANK CAP",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-096",
    "itemCode": "170F-096",
    "name": "BLANK CAP GASKET",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-097",
    "itemCode": "170F-097",
    "name": "O RING (#14*2)",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-098",
    "itemCode": "170F-098",
    "name": "CLUTCH FRICTION PLATE 8 LEAF",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-099",
    "itemCode": "170F-099",
    "name": "CLUTCH FRICTION PLATE 12 LEAF",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-100",
    "itemCode": "170F-100",
    "name": "CLUTCH COVER 8 LEAF WITH BEARING",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-101",
    "itemCode": "170F-101",
    "name": "CLUTCH COVER 12 LEAF WITH BEARING",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-102",
    "itemCode": "170F-102",
    "name": "OIL SEAL (25*41.25*7)",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-103",
    "itemCode": "170F-103",
    "name": "GEAR BOX GASKET (SQUARE)",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-104",
    "itemCode": "170F-104",
    "name": "HUAYI CARBURATOR (PREMIUM QUALITY)",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false,
    "qualityVariant": "premium"
  },
  {
    "id": "170f-105",
    "itemCode": "170F-105",
    "name": "PETROL TUBE",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-106",
    "itemCode": "170F-106",
    "name": "PLUG ADAPTOR",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false
  },
  {
    "id": "170f-107",
    "itemCode": "170F-107",
    "name": "TURBO ENGINE (25MM CRANKSHAFT) FOR WEEDER ( HUAYI CARBURATOR, HS AIR FILTER, SILENCER WITH GUARD PREMIUM QUALITY )",
    "engineFamily": "170F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "170FUPDATEDCATALOGUE.pdf",
    "needsReview": false,
    "qualityVariant": "premium"
  },
  {
    "id": "173f-001",
    "itemCode": "173F-001",
    "name": "OIL SEAL VALVE CONDUIT",
    "engineFamily": "173F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "173FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "173f-002",
    "itemCode": "173F-002",
    "name": "VALVE SPRING",
    "engineFamily": "173F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "173FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "173f-003",
    "itemCode": "173F-003",
    "name": "ROCKER ARM ASSY",
    "engineFamily": "173F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "173FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "173f-004",
    "itemCode": "173F-004",
    "name": "INTAKE / EXHAUST VALVE",
    "engineFamily": "173F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "173FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "173f-005",
    "itemCode": "173F-005",
    "name": "VALVE SEAT",
    "engineFamily": "173F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "173FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "173f-006",
    "itemCode": "173F-006",
    "name": "PISTON SET WITH RINGS",
    "engineFamily": "173F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "173FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "173f-007",
    "itemCode": "173F-007",
    "name": "CONNECTING ROD",
    "engineFamily": "173F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "173FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "173f-008",
    "itemCode": "173F-008",
    "name": "STARTING SPRING",
    "engineFamily": "173F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "173FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "173f-009",
    "itemCode": "173F-009",
    "name": "RECOIL STARTER (DOUBLE CLAW)",
    "engineFamily": "173F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "173FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "173f-010",
    "itemCode": "173F-010",
    "name": "PLUNGER SET",
    "engineFamily": "173F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "173FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "173f-011",
    "itemCode": "173F-011",
    "name": "FUEL INJECTOR PUMP ASSY (ECONOMIC QUALITY)",
    "engineFamily": "173F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "173FDIESELENGINESPARES.pdf",
    "needsReview": false,
    "qualityVariant": "economic"
  },
  {
    "id": "173f-012",
    "itemCode": "173F-012",
    "name": "FUEL INJECTOR PUMP ASSY (HIGH QUALITY)",
    "engineFamily": "173F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "173FDIESELENGINESPARES.pdf",
    "needsReview": false,
    "qualityVariant": "premium"
  },
  {
    "id": "173f-013",
    "itemCode": "173F-013",
    "name": "FUEL INJECTOR (ECONOMIC QUALITY)",
    "engineFamily": "173F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "173FDIESELENGINESPARES.pdf",
    "needsReview": false,
    "qualityVariant": "economic"
  },
  {
    "id": "173f-014",
    "itemCode": "173F-014",
    "name": "FUEL INJECTOR (HIGH QUALITY)",
    "engineFamily": "173F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "173FDIESELENGINESPARES.pdf",
    "needsReview": false,
    "qualityVariant": "premium"
  },
  {
    "id": "173f-015",
    "itemCode": "173F-015",
    "name": "DIESEL FILTER ASSY",
    "engineFamily": "173F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "173FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "173f-016",
    "itemCode": "173F-016",
    "name": "FUEL INJECTION PIPE",
    "engineFamily": "173F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "173FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "173f-017",
    "itemCode": "173F-017",
    "name": "ELECTRIC STARTER KIT WITH BATTERY SEAT (11 ITEMS)",
    "engineFamily": "173F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "173FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "173f-018",
    "itemCode": "173F-018",
    "name": "GASKET SET",
    "engineFamily": "173F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "173FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "173f-019",
    "itemCode": "173F-019",
    "name": "GEAR RING (ELECTRIC STARTER)",
    "engineFamily": "173F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "173FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-001",
    "itemCode": "177F-001",
    "name": "GASKET, CYLINDER HEAD COVER",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-002",
    "itemCode": "177F-002",
    "name": "CYLINDER HEAD",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-003",
    "itemCode": "177F-003",
    "name": "CYLINDER GASKET",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-004",
    "itemCode": "177F-004",
    "name": "CRANKCASE",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-005",
    "itemCode": "177F-005",
    "name": "GOVERNOR ASSY",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-006",
    "itemCode": "177F-006",
    "name": "OIL SEAL 30*46*35",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-007",
    "itemCode": "177F-007",
    "name": "CRANKCASE COVER",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-008",
    "itemCode": "177F-008",
    "name": "DIPSSTICK SEAL",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-009",
    "itemCode": "177F-009",
    "name": "DIPSTICK ASSY",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-010",
    "itemCode": "177F-010",
    "name": "CRANKCASE COVER GASKET",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-011",
    "itemCode": "177F-011",
    "name": "CRANKSHAFT 25MM",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-012",
    "itemCode": "177F-012",
    "name": "CONNECTING ROD ASSY (0.00)",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-013",
    "itemCode": "177F-013",
    "name": "PISTON SET WITH RINGS (0.00)",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-014",
    "itemCode": "177F-014",
    "name": "PISTON RINGS (0.00)",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-015",
    "itemCode": "177F-015",
    "name": "MUFFLER ASSY",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-016",
    "itemCode": "177F-016",
    "name": "TAPPET",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-017",
    "itemCode": "177F-017",
    "name": "ROCKER ASSY",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-018",
    "itemCode": "177F-018",
    "name": "INTAKE/EXHAUST VALVE",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-019",
    "itemCode": "177F-019",
    "name": "VALVE STEM SEAL",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-020",
    "itemCode": "177F-020",
    "name": "VALVE SPRING",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-021",
    "itemCode": "177F-021",
    "name": "INTAKE VALVE SPRING SEAT",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-022",
    "itemCode": "177F-022",
    "name": "VALVE ROTATOR",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-023",
    "itemCode": "177F-023",
    "name": "RECOIL STARTER ASSY",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-024",
    "itemCode": "177F-024",
    "name": "RECOIL STARTER REEL",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-025",
    "itemCode": "177F-025",
    "name": "RECOIL STARTER SPRING",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-026",
    "itemCode": "177F-026",
    "name": "CARBURATOR INSULATOR",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-027",
    "itemCode": "177F-027",
    "name": "CARBURATOR GASKET",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-028",
    "itemCode": "177F-028",
    "name": "CARBURATOR ASSY PREMIUM QUALITY",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false,
    "qualityVariant": "premium"
  },
  {
    "id": "177f-029",
    "itemCode": "177F-029",
    "name": "AIR CLEANER ASSY",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-030",
    "itemCode": "177F-030",
    "name": "AIRC CLEANER GASKET",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-031",
    "itemCode": "177F-031",
    "name": "THROTTLE RETURN SPRING SMALL",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-032",
    "itemCode": "177F-032",
    "name": "GOVERNOR SPRING BIG",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-033",
    "itemCode": "177F-033",
    "name": "FUEL TANK",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-034",
    "itemCode": "177F-034",
    "name": "FUEL CAP",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "177f-035",
    "itemCode": "177F-035",
    "name": "FUEL FILTER",
    "engineFamily": "177F",
    "fuelType": "petrol",
    "category": "other",
    "catalogueSource": "177FPETROLENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-001",
    "itemCode": "186F-001",
    "name": "VALVE SPRING WASHER (A)",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-002",
    "itemCode": "186F-002",
    "name": "VALVE SPRING WASHER (B)",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-003",
    "itemCode": "186F-003",
    "name": "OIL SEAL VALVE CONDUIT",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-004",
    "itemCode": "186F-004",
    "name": "VALVE SPRING",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-005",
    "itemCode": "186F-005",
    "name": "VALVE SPRING RETAINER",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-006",
    "itemCode": "186F-006",
    "name": "VALVE ADJUSTING PLATE",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-007",
    "itemCode": "186F-007",
    "name": "CYLINDER HEAD ASSY",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-008",
    "itemCode": "186F-008",
    "name": "ROCKER ARM ASSY",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-009",
    "itemCode": "186F-009",
    "name": "INTAKE EXHAUST VALVE",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-010",
    "itemCode": "186F-010",
    "name": "INTAKE EXHAUST VALVE (SQUARE)",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-011",
    "itemCode": "186F-011",
    "name": "VALVE GUIDE",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-012",
    "itemCode": "186F-012",
    "name": "VALVE SEAT",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-013",
    "itemCode": "186F-013",
    "name": "CYLINDER HEAD STUD ( M10 x 105 )",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-014",
    "itemCode": "186F-014",
    "name": "CYLINDER HEAD STUD ( M10 x 118 )",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-015",
    "itemCode": "186F-015",
    "name": "CYLINDER HEAD SHIM COPPER",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-016",
    "itemCode": "186F-016",
    "name": "NUT (SHORT) CYLINDER HEAD",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-017",
    "itemCode": "186F-017",
    "name": "NUT (LONG) CYLINDER HEAD",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-018",
    "itemCode": "186F-018",
    "name": "CYLINDER RUBBER RING",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-019",
    "itemCode": "186F-019",
    "name": "STUD Am (6x50)",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-020",
    "itemCode": "186F-020",
    "name": "CRANK CASE GASKET",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-021",
    "itemCode": "186F-021",
    "name": "MAIN BEARING",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-022",
    "itemCode": "186F-022",
    "name": "STARTER SLEEVE (CUP)",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-023",
    "itemCode": "186F-023",
    "name": "WASHER FLYWHEEL",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-024",
    "itemCode": "186F-024",
    "name": "BALANCE SHAFT TIMING GEAR",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-025",
    "itemCode": "186F-025",
    "name": "BALANCING SHAFT TIMING GEAR",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-026",
    "itemCode": "186F-026",
    "name": "CRANKSHAFT (SHAFT TYPE 42MM)",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-027",
    "itemCode": "186F-027",
    "name": "CRANKSHAFT (SHAFT TYPE 40MM)",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-028",
    "itemCode": "186F-028",
    "name": "CRANKSHAFT TIMING GEAR",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-029",
    "itemCode": "186F-029",
    "name": "PISTON RINGS",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-030",
    "itemCode": "186F-030",
    "name": "PISTON PIN",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-031",
    "itemCode": "186F-031",
    "name": "PISTON SET WITH RINGS",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-032",
    "itemCode": "186F-032",
    "name": "CONNECTING ROD",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-033",
    "itemCode": "186F-033",
    "name": "VALVE TAPET",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-034",
    "itemCode": "186F-034",
    "name": "CAMSHAFT TIMING GEAR",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-035",
    "itemCode": "186F-035",
    "name": "MOTOR - ELECTRIC STARTER (0.9-1 KW)",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-036",
    "itemCode": "186F-036",
    "name": "GEAR RING (ELECTRIC STARTER)",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-037",
    "itemCode": "186F-037",
    "name": "BATTERY CLAMP (TERMINAL)",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-038",
    "itemCode": "186F-038",
    "name": "ELECTRIC STARTER KEY",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-039",
    "itemCode": "186F-039",
    "name": "ELECTRIC STARTER KIT WITH BATTERY SEAT (11 ITEMS)",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-040",
    "itemCode": "186F-040",
    "name": "STARTING SPRING",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-041",
    "itemCode": "186F-041",
    "name": "STARTER ROPE 1.6M",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-042",
    "itemCode": "186F-042",
    "name": "STARTER REEL",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-043",
    "itemCode": "186F-043",
    "name": "RECOIL STARTER ( DOUBLE CLAW)",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-044",
    "itemCode": "186F-044",
    "name": "AIR FILTER SPONGE ( BIG AND SMALL )",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-045",
    "itemCode": "186F-045",
    "name": "METAL FILTER (FOR SUMP)",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-046",
    "itemCode": "186F-046",
    "name": "AIR FILTER ASSY",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-047",
    "itemCode": "186F-047",
    "name": "GASKET INLET PIPE BENDING",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-048",
    "itemCode": "186F-048",
    "name": "PLUNGER SET WITH FUEL PIPE",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-049",
    "itemCode": "186F-049",
    "name": "FUEL INJECTOR PUMP ASSY (ECONOMIC QUALITY)",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false,
    "qualityVariant": "economic"
  },
  {
    "id": "186f-050",
    "itemCode": "186F-050",
    "name": "FUEL INJECTOR PUMP ASSY ( PREMIUM QUALITY)",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false,
    "qualityVariant": "premium"
  },
  {
    "id": "186f-051",
    "itemCode": "186F-051",
    "name": "FUEL INJECTOR PUMP ASSY GASKET",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-052",
    "itemCode": "186F-052",
    "name": "FUEL INJECTOR (ECONOMIC QUALITY)",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false,
    "qualityVariant": "economic"
  },
  {
    "id": "186f-053",
    "itemCode": "186F-053",
    "name": "FUEL INJECTOR (PREMIUM QUALITY)",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false,
    "qualityVariant": "premium"
  },
  {
    "id": "186f-054",
    "itemCode": "186F-054",
    "name": "BONNET ASSY",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-055",
    "itemCode": "186F-055",
    "name": "OIL FILTER ASSY",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-056",
    "itemCode": "186F-056",
    "name": "UPPER STAY",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-057",
    "itemCode": "186F-057",
    "name": "FUEL INJECTION PIPE ASSY",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  },
  {
    "id": "186f-058",
    "itemCode": "186F-058",
    "name": "GASKET SET",
    "engineFamily": "186F",
    "fuelType": "diesel",
    "category": "other",
    "catalogueSource": "186FDIESELENGINESPARES.pdf",
    "needsReview": false
  }
]
;
