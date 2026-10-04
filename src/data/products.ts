export interface ProductGroup {
  /** Nombre de la categoría, por ejemplo "ACEITES". */
  category: string;
  /** Nombres exactos de los repuestos de la categoría. */
  items: string[];
}

/** Base de datos de productos: 42 categorías / 65 repuestos. */
export const PRODUCTS_DATA: ProductGroup[] = [
  { category: 'ACEITES', items: ['ACEITE 4T SN 20W50', 'ACEITE 4T SN 15W50'] },
  { category: 'AMORTIGUADORES', items: ['AMORTIGUADOR CG150-H GP cromado'] },
  { category: 'ARBOL DE LEVA', items: ['ARBOL DE LEVA CG150'] },
  { category: 'ARRANQUES', items: ['ARRANQUE CG150', 'ARRANQUE CG200'] },
  { category: 'BANDAS DE FRENO', items: ['BANDA DE FRENO CG150-H', 'BANDA DE FRENO JAGUAR CG150'] },
  { category: 'BASTONES', items: ['BASTON DELANTERO CGB', 'BASTON DELANTERO CG150-H'] },
  { category: 'BATERIAS', items: ['BATERIA JAGUAR 12N6.5', 'BATERIA CG150-O 12N9'] },
  { category: 'BOBINAS', items: ['BOBINA CG150 RACING AMARILLO'] },
  { category: 'BOMBILLOS', items: ['BOMBILLO M6-D'] },
  { category: 'BOMBAS DE FRENO', items: ['BOMBA DE FRENO DELANTERO CG150-H'] },
  { category: 'BUJIAS', items: ['BUJIA GY-SCT A7TC', 'BUJIA JAGUAR CG150 D8TC', 'BUJIA PUNTA DIAMANTE CG150'] },
  { category: 'CADENAS', items: ['CADENA DORADA 428X124'] },
  { category: 'CARBURADOR', items: ['CARBURADOR JAGUAR 150 PZ26'] },
  { category: 'CASCOS', items: ['CASCO INTEGRAL CROSS CON VISOR', 'CASCO SEMI INTEGRAL CON VISOR'] },
  { category: 'CAUCHOS', items: ['CAUCHO 275/18 TT', 'CAUCHO 90/90/18 TT', 'CAUCHO 110/90/16 TT'] },
  { category: 'CDI', items: ['CDI CG150 ORIGINAL AMARILLO', 'CDI CG150-H AMARILLO'] },
  { category: 'CHAPALETAS', items: ['CHAPALETA DE GOMA C/TORNILLOS'] },
  { category: 'CIGUEÑAL', items: ['CIGUEÑAL CG150-H'] },
  { category: 'CILINDROS', items: ['CILINDRO COMPLETO GY6 150'] },
  { category: 'COLECTOR', items: ['COLECTOR DE ACEITE CG150'] },
  { category: 'CORONAS', items: ['CORONA DORADA BISELADA 37T/38T'] },
  { category: 'CREMALLERAS', items: ['CREMALLERA COMPLETA CG150', 'CREMALLERA COMPLETA CG200'] },
  { category: 'DISCOS', items: ['DISCO DE CROCHE CG150'] },
  { category: 'EMBOBINADOS', items: ['EMBOBINADO 5 CABLES', 'EMBOBINADO 4 CABLES'] },
  { category: 'FILTROS', items: ['FILTRO DE GASOLINA UNIVERSAL'] },
  { category: 'FORROS', items: ['FORRO DE ASIENTO TIPO MALLA'] },
  { category: 'GUAYAS', items: ['GUAYA CROCHE C/CAMISA CG150', 'GUAYA KILOMETRAJE CG150'] },
  { category: 'KIT', items: ['KIT TORNILLO DE CORONA', 'KIT DE RODAJE COMPLETO'] },
  { category: 'MANILLAS', items: ['MANILLA DE CROCHE COMPLETA'] },
  { category: 'MANDOS', items: ['MANDOS COMPLETO CG150'] },
  { category: 'PINTURAS EN SPRAY', items: ['PINTURA EN SPRAY NEGRO MATE', 'PINTURA EN SPRAY NEGRO BRILLANTE'] },
  { category: 'PISTON', items: ['PISTON COMPLETO CG150-H'] },
  { category: 'PIÑON', items: ['PIÑON DORADO RAYADO 16T'] },
  { category: 'POSAPIE', items: ['POSAPIE TRASERO CG150'] },
  { category: 'PRENSA CADENA', items: ['PRENSA CADENA CG150'] },
  { category: 'ROLINERAS', items: ['ROLINERA 6006/6303/6204/6302'] },
  { category: 'STOP', items: ['STOP DE FRENO LED CG150'] },
  { category: 'TACOMETRO', items: ['TACOMETRO OWEN', 'TACOMETRO DIGITAL CG150-S', 'TACOMETRO CG150 CON USB'] },
  { category: 'TAZAS', items: ['TAZA DEL CUELLO (MUNICION)'] },
  { category: 'TRIPAS', items: ['TRIPA 3.00/18', 'TRIPA 110/90/16', 'TRIPA 130/70/12', 'TRIPA 90/90/21'] },
  { category: 'VALVULAS', items: ['VALVULAS CG150'] },
  { category: 'VARIOS', items: ['REGULADOR CG150', 'PROTECTOR DE MOTOR CG150', 'PURIFICADOR CG150'] },
];

/** Total de categorías del catálogo. */
export const totalCategories = PRODUCTS_DATA.length;

/** Total de repuestos del catálogo. */
export const totalProducts = PRODUCTS_DATA.reduce((acc, group) => acc + group.items.length, 0);

/** Convierte un texto a un slug apto para usar como id de ancla. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Normaliza texto para búsquedas: sin tildes y sin mayúsculas, para que
 * "bujia" encuentre "BUJIA" y "aceite 4t" encuentre "ACEITE 4T SN 20W50".
 */
export function normalizeText(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s/]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}