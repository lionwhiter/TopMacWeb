export interface ProductGroup {
  /** Nombre de la categoría, por ejemplo "ACEITES". */
  category: string;
  /** Nombres exactos de los repuestos de la categoría. */
  items: string[];
}

/** Base de datos de productos: 76 categorías / 294 repuestos. */
export const PRODUCTS_DATA: ProductGroup[] = [
  {
    category: 'ACCESORIOS',
    items: [
      'Base KLR',
      'Bolsa Fox',
      'Llavero de tina de Resorte',
      'Medias Horse',
      'Pañuelo',
      'pechera',
      'Placa de Lujo',
      'Plantica de Música',
      'Reloj Redondo Adorno',
      'Tira Goma Americana',
      'Tornillo decorativo',
      'Wz Montal.',
      'Barra Estabilizadora Cromada.'
    ],
  },
  {
    category: 'ACEITES',
    items: [
      'ACEITE 4T SN 15W50',
      'ACEITE 4T SN 20W50',
      'Aceite Barra',
      'Aceite Cronus',
      'Aceite GP',
      'Aceite Motor',
      'Aceite Motul',
      'aceite yido'
    ],
  },
  { category: 'AMORTIGUADORES', items: ['Amortiguador', 'AMORTIGUADOR CG150-H GP cromado'] },
  { category: 'ARBOL DE LEVA', items: ['ARBOL DE LEVA CG150'] },
  { category: 'ARRANQUES', items: ['ARRANQUE CG150', 'ARRANQUE CG200', 'ARRANQUE DE CG 150', 'ARRANQUE DE CG 200'] },
  {
    category: 'BANDAS DE FRENO',
    items: [
      'BANDA DE FRENO CG150-H',
      'BANDA DE FRENO JAGUAR CG150',
      'Banda freno bera',
      'Banda Freno Horse',
    ],
  },
  { category: 'BASTONES', items: ['BASTON DELANTERO CG150-H', 'BASTON DELANTERO CGB'] },
  {
    category: 'BATERIAS',
    items: [
      'BATERIA (SECA) CG150-O 12N9 GP',
      'BATERIA (SECA) JAGUAR 12N6.5 GP',
      'Bateria Bera',
      'BATERIA JAGUAR 12N6.5'
    ],
  },
  { category: 'BOBINAS', items: ['Bobina', 'Bobina 150', 'BOBINA CG150 RACING AMARILLO', 'Bobina ranci'] },
  {
    category: 'BOCINAS Y CORNETAS',
    items: [
      'Bocina Horse',
      'Bocina Joguar',
      'corneta',
      'Unidades de Corneta Caracol'
    ],
  },
  { category: 'BOMBAS DE ACEITE', items: ['Bomba Aceite CDI', 'Bomba Aceite Jaguar', 'Bomba Aceite Owen'] },
  { category: 'BOMBAS DE FRENO', items: ['BOMBA DE FRENO DELANTERO DE CG150-H'] },
  { category: 'BOMBILLOS', items: ['Bombillo', 'bombillo h4', 'Bombillo led Morita', 'BOMBILLO M6-D', 'Bombillo SBR'] },
  {
    category: 'BUJIAS',
    items: [
      'BUJIA CG 150 JAGUAR D8TC PUNTA DIAMANTE (COLOR) GP',
      'Bujia DT8TC',
      'BUJIA GY-SCT A7TC',
      'BUJIA JAGUAR CG 150 D8TC',
      'Bujia NGK',
      'BUJIA PUNTA DIAMANTE CG150',
      'Bujia triple punta'
    ],
  },
  { category: 'CADENAS', items: ['Cadena', 'CADENA DORADA 428X124'] },
  { category: 'CAJA DE VELOCIDAD', items: ['Automatico', 'Caja de Velocidad'] },
  { category: 'CARBURADOR', items: ['carburador', 'CARBURADOR JAGUAR 150 PZ26'] },
  { category: 'CARCOMANIAS', items: ['carcomanias Bera'] },
  {
    category: 'CARROCERIAS',
    items: [
      'Colita de  Guarda barro',
      'Descansa Mano',
      'Guardafango Azul (Nuevo)',
      'Guardafango Blanco'
    ],
  },
  {
    category: 'CASCOS',
    items: [
      'Casco de Niño',
      'Casco integral',
      'CASCO INTEGRAL CROSS CON VISOR',
      'CASCO SEMI INTEGRAL CON VISOR',
      'Casco semi integrales',
      'Visor'
    ],
  },
  {
    category: 'CAUCHOS',
    items: [
      'CAUCHO 110/90/16 TT',
      'CAUCHO 275/18 TT',
      'CAUCHO 90/90/18 TT',
      'Caucho Delantero 2.75-18'
    ],
  },
  { category: 'CDI', items: ['CDI Bera', 'CDI CG 150 ORIGINAL AMARILLO', 'CDI CG150-H AMARILLO', 'CDI Horse'] },
  { category: 'CIGUEÑAL', items: ['CIGUEÑAL CG150-H', 'CIGUEÑAL CG150-H 2011 PASADOR FINO'] },
  { category: 'CILINDROS', items: ['CILINDRO COMPLETO GY6 150'] },
  {
    category: 'COLECTOR DE ACEITE',
    items: [
      'COLECTOR DE ACEITE CG150',
      'COLECTOR DE ACEITE CG150-H',
      'COLECTOR DE ACEITE ESTRIA JAGUAR CG 150',
      'recolector de aceite'
    ],
  },
  { category: 'CORONAS', items: ['Circunferencia Bera/Horse', 'Corona', 'CORONA DORADA BISELADA 37T/38T'] },
  { category: 'CREMALLERAS', items: ['CREMALLERA COMPLETA CG 150', 'CREMALLERA COMPLETA CG 200'] },
  { category: 'DEFENSAS', items: ['defensa', 'eslayder Azul', 'eslayder Blanco', 'eslayder Morado', 'Españador Bera'] },
  { category: 'DISCOS', items: ['Disco croche', 'DISCO DE CROCHE CG150', 'Platos'] },
  {
    category: 'EJES Y BUJES',
    items: [
      'Buje de Amortiguador',
      'buje de RIn de Rayo',
      'Buje express',
      'Eje Central del Burro',
      'Eje de tijera  Bera',
      'Eje de Tijera  Horse',
      'Eje Trasero  Bera',
      'Eje Trasero de Horse',
      'Tijera',
      'tijera horser',
      'tijera Owen'
    ],
  },
  { category: 'EMBOBINADOS', items: ['EMBOBINADO 4 CABLES', 'EMBOBINADO 5 CABLES'] },
  { category: 'EMPAQUES', items: ['Empaque tapa bomba Unirex', 'Empaques de motor'] },
  { category: 'ESCAPES', items: ['Tubo de Escape'] },
  { category: 'FAROS Y MICAS', items: ['Base del faro Bera', 'micas HORSE UND'] },
  {
    category: 'FILTROS',
    items: [
      'FILTRO DE GASOLINA UNIVERSAL',
      'Filtro Freno',
      'Filtro Gasolina de Vidrio',
      'Filtro Gasolina Normal'
    ],
  },
  { category: 'FORROS', items: ['FORRO DE ASIENTO TIPO MALLA (NEGRO)'] },
  {
    category: 'FRENOS',
    items: [
      'Freno izquierdo bigote de croche',
      'liga de Freno',
      'pata de freno',
      'Pata Freno',
      'Sensor o válvula de freno'
    ],
  },
  {
    category: 'GOMAS',
    items: [
      'goma de CORONA',
      'Goma de Pata de Cambio',
      'Goma de Tapas',
      'Goma Espuma POck',
      'Gomas de tapas'
    ],
  },
  {
    category: 'GUAYAS',
    items: [
      'guaya  Aceleracion',
      'GUAYA CROCHE C/CAMISA CG150',
      'GUAYA CROCHE C/CAMISA CG150-M/JAGUAR GP',
      'GUAYA CROCHE C/CAMISA CG200-X GP',
      'guaya Crochet',
      'guaya Kilometraje Bera',
      'GUAYA KILOMETRAJE CG150',
      'guaya Kilometraje HORSE'
    ],
  },
  { category: 'GUIAS', items: ['Guia Kilometraje Bera', 'Guia Kilometraje Horse'] },
  { category: 'HERRAMIENTAS', items: ['platinera', 'Rompe  Diente', 'tornillo de Porta Corona'] },
  { category: 'INSTRUMENTOS', items: ['acelerometro', 'Carro de Tinta', 'Medidor de aceite'] },
  {
    category: 'KITS',
    items: [
      'Kit de camisa de fuerza',
      'KIT DE RODAJE COMPLETO',
      'KIT DE RODAJE COMPLETO DORADO BISELADO 38T/16T/124L CG150-H GP',
      'Kit de Transmisión Bera',
      'Kit Empacadura',
      'KIT TORNILLO DE CORONA'
    ],
  },
  { category: 'LUCES', items: ['Luz de freno pavo', 'luz movimiento', 'Reflector de placa'] },
  {
    category: 'MANDOS',
    items: [
      'MANDO COMPLETO DE CG150-A',
      'MANDO COMPLETO DE CG150-A KAVAK',
      'MANDO COMPLETO DE CG150-EK XPRESS',
      'MANDO COMPLETO DE CG150-H',
      'MANDOS COMPLETO CG150'
    ],
  },
  { category: 'MANGUERAS', items: ['Manguera de Cable', 'Manguera de gasolina'] },
  { category: 'MANILLAS', items: ['manilla CROCHE', 'MANILLA DE CROCHE COMPLETA'] },
  {
    category: 'MANUBRIO Y PUÑOS',
    items: [
      'CHAPALETA DE GOMA C/TORNILLOS',
      'estopera de Barra horser',
      'Martillera',
      'Puño',
    ],
  },
  { category: 'MOTORES', items: ['biela', 'Motor completo 150cc'] },
  { category: 'PALANCAS', items: ['Cucharita', 'suichera horse', 'suichera Jaguar'] },
  { category: 'PARRILLAS', items: ['Parrilla Horse', 'Parrilla Owen'] },
  { category: 'PASTILLAS', items: ['Pastillas'] },
  { category: 'PATAS DE CAMBIO', items: ['Pata de Cambio', 'Pata Maleta'] },
  {
    category: 'PINTURAS',
    items: [
      'PINTURA EN SPRAY NEGRO BRILLANTE',
      'PINTURA EN SPRAY NEGRO MATE',
      'Spray blanco',
      'Spray Brillante',
      'Spray Mate'
    ],
  },
  { category: 'PIÑON', items: ['Piñon', 'Piñon Bera', 'PIÑON DORADO RAYADO 16T', 'Piñon Especial'] },
  { category: 'PISTON', items: ['Piston', 'PISTON COMPLETO CG150-H', 'piston Especial'] },
  {
    category: 'PORTAS Y SOPORTES',
    items: [
      'Porta Banda BERA',
      'Porta Banda HORSE',
      'Porta Corona Bera',
      'Porta Corona Owen',
      'porta maleta'
    ],
  },
  {
    category: 'POSAPIES',
    items: [
      'posa pies  Bera',
      'posa pies  horse',
      'POSAPIE TRASERO CG150',
      'POSAPIE TRASERO DE CG150-BERA',
      'Poza pies Bera',
      'Poza pies Horse'
    ],
  },
  {
    category: 'PRENSA CADENA',
    items: [
      'prensa cadena',
      'Prensa Cadena Bera',
      'PRENSA CADENA CG150',
      'Prensa Cadena Horse',
      'Prensa cadena Owen'
    ],
  },
  { category: 'PURIFICADORES', items: ['PURIFICADOR CG 150'] },
  { category: 'QUIMICOS', items: ['antiespiche', 'Pega epoxy', 'SKP Anti-Perforante'] },
  { category: 'REGULADORES', items: ['Regulador', 'REGULADOR CG150', 'Reled'] },
  { category: 'RETROVISORES', items: ['Retrovisor CGB', 'Retrovisor SBR'] },
  {
    category: 'ROLINERAS',
    items: [
      'ROLINERA 6006 KOYO',
      'ROLINERA 6006/6303/6204/6302',
      'Rolinera 6202',
      'Rolinera 6204',
      'ROLINERA 6204 MEGAZUKI',
      'Rolinera 6301',
      'ROLINERA 6302 KOYO',
      'ROLINERA 6303 KOYO',
      'Rolinera 6304'
    ],
  },
  { category: 'RUEDAS', items: ['Rueda'] },
  {
    category: 'STOP',
    items: [
      'stop Bera Transparente',
      'STOP DE FRENO LED CG 150-S (2024)',
      'STOP DE FRENO LED CG150',
      'STOP DE FRENO SBR 2024'
    ],
  },
  {
    category: 'TACOMETRO',
    items: [
      'TACOMETRO CG150 CON USB',
      'TACOMETRO DE CG150-S C/USB (MODELO VIEJO) GP',
      'TACOMETRO DIGITAL CG150-S',
      'TACOMETRO DIGITAL CG150-S 2024',
      'Tacometro Horse',
      'TACOMETRO OWEN'
    ],
  },
  {
    category: 'TAPAS',
    items: [
      'Tapa Banda Bera',
      'Tapa Banda Horse',
      'Tapa Cadena al rojo',
      'Tapa cadena Horse',
      'Tapa del Balancin',
      'Tapa Horse',
      'Tapa Mando',
      'Tapa Mando Negro',
      'Tapa Mando Transparente',
      'Tapa Orquilla',
      'Unidad de Tapa Valvula'
    ],
  },
  { category: 'TAPON DE ACEITE', items: ['Boca de tapon aceite', 'Tapon', 'Tapon Limpiador'] },
  { category: 'TAZAS', items: ['TAZA DEL CUELLO (MUNICION)', 'TAZA DEL CUELLO (MUNICION) BERA MUNUCION'] },
  { category: 'TRIPAS', items: ['Tripa', 'TRIPA 110/90/16', 'TRIPA 130/70/12', 'TRIPA 3.00/18', 'TRIPA 90/90/21'] },
  { category: 'VALVULAS', items: ['valvula 150', 'valvula horse', 'VALVULAS CG150'] },
  { category: 'VARILLAS', items: ['Varilla', 'Varilla croche', 'Varilla Doven', 'Varilla freno', 'Varilla Horse'] },
  { category: 'VARIOS', items: ['PROTECTOR DE MOTOR CG150'] },
  {
    category: 'VOLANTES',
    items: [
      'T Volnate parte de Abajo',
      'T Volnate parte de Arriba',
      'Taza de Volante',
      'Volante cromado',
      'Volante negro'
    ],
  },
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