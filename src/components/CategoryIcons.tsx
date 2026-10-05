import type { JSX } from 'preact';

/**
 * Iconos por categoría del catálogo.
 *
 * Set lineal coherente con `Icons.tsx`: viewBox 24x24, sin relleno, trazo de
 * `currentColor` para que hereden el color del contenedor (gris en reposo,
 * naranja al hacer hover o cuando el producto está en el carrito).
 *
 * Todos los trazos se quedan dentro del viewBox respetando el margen que
 * necesita el grosor de línea, para que ningún icono se recorte.
 */
interface CategoryIconProps {
  category: string;
  size?: number;
  class?: string;
}

// Kebab-case por el mismo motivo que en `Icons.tsx`: Astro renderiza los props
// en minúsculas, así que `strokeWidth` se convertiría en `strokewidth` y SVG lo
// descartaría, dejando el grosor por defecto de 1px.
const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': 1.8,
  'stroke-linecap': 'round' as const,
  'stroke-linejoin': 'round' as const,
  'aria-hidden': true,
});

const ICONS = {
  accesorios: () => (
    <>
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </>
  ),
  aceite: () => (
    <>
      <rect x="9" y="2" width="6" height="3" rx="1" />
      <path d="M10 5v2.5L7.5 10v8a2 2 0 002 2h5a2 2 0 002-2v-8L14 7.5V5" />
      <line x1="9" y1="14" x2="15" y2="14" />
    </>
  ),
  amortiguador: () => (
    <>
      <rect x="9" y="3" width="6" height="3" rx="1" />
      <rect x="10" y="6" width="4" height="8" rx="1" />
      <path d="M12 14v3" />
      <rect x="9" y="17" width="6" height="4" rx="1" />
    </>
  ),
  'arbol-leca': () => (
    <>
      <path d="M2 12h3M18.5 12H22" />
      <ellipse cx="8.5" cy="12" rx="2.5" ry="4" />
      <ellipse cx="16" cy="12" rx="2.5" ry="4" />
    </>
  ),
  arranque: () => (
    <>
      <rect x="1.5" y="9" width="12" height="7" rx="1.5" />
      <circle cx="17.5" cy="12.5" r="4" />
      <path d="M17.5 8.5v8M13.5 12.5h8" />
    </>
  ),
  bateria: () => (
    <>
      <rect x="2" y="7" width="20" height="11" rx="2" />
      <path d="M6.5 7V4.5h3V7M14.5 7V4.5h3V7" />
      <path d="M5 11h3.5M15.5 11H19" />
    </>
  ),
  bobina: () => (
    <>
      <path d="M3 4h4a3 3 0 016 0 3 3 0 016 0h4" />
      <path d="M3 12h4a3 3 0 016 0 3 3 0 016 0h4" />
      <path d="M3 20h4a3 3 0 016 0 3 3 0 016 0h4" />
    </>
  ),
  bomba: () => (
    <>
      <circle cx="11" cy="12" r="5.5" />
      <path d="M16.5 12H22M2 12h3.5" />
      <path d="M8 8.5l6 7" />
    </>
  ),
  bombillo: () => (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 00-3.5 10.9c.5.4.8 1 .8 1.6V17h5.4v-1.5c0-.6.3-1.2.8-1.6A6 6 0 0012 3z" />
    </>
  ),
  bujia: () => (
    <>
      <path d="M12 1.5v3M10 8.5v4M11 20.5h2" />
      <path d="M8 4.5h8v4H8z" />
      <path d="M9 12.5h6M9 15h6M9 17.5h6" />
    </>
  ),
  cadena: () => (
    <>
      <rect x="2" y="9" width="9" height="6" rx="3" />
      <rect x="13" y="9" width="9" height="6" rx="3" />
    </>
  ),
  caja: () => (
    <>
      <rect x="2" y="7" width="20" height="11" rx="2" />
      <circle cx="8" cy="12.5" r="2.5" />
      <circle cx="16" cy="12.5" r="2.5" />
      <path d="M10.5 12.5h3" />
    </>
  ),
  carburador: () => (
    <>
      <rect x="9" y="3" width="6" height="12" rx="1.5" />
      <path d="M9 6H5.5A2.5 2.5 0 003 8.5V11h6" />
      <circle cx="12" cy="19" r="3.5" />
    </>
  ),
  carroceria: () => (
    <>
      <path d="M5 3h14l1 9c.3 4-2.6 7-8 7s-8.3-3-8-7z" />
      <circle cx="12" cy="11" r="3" />
    </>
  ),
  casco: () => (
    <>
      <path d="M12 3c-4.4 0-8 3.1-8 7v6h16v-6c0-3.9-3.6-7-8-7z" />
      <path d="M7 11h10" />
      <path d="M4 16v1.5A2.5 2.5 0 006.5 20h11a2.5 2.5 0 002.5-2.5V16" />
    </>
  ),
  cdi: () => (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 7V4M14 7V4M10 20v-3M14 20v-3M7 10H4M7 14H4M20 10h-3M20 14h-3" />
    </>
  ),
  cigueñal: () => (
    <>
      <path d="M3 7h3M18 17h3" />
      <circle cx="8" cy="7" r="2.5" />
      <circle cx="16" cy="17" r="2.5" />
      <path d="M8 9.5V14a3 3 0 003 3h5" />
    </>
  ),
  cilindro: () => (
    <>
      <rect x="6" y="4" width="12" height="16" rx="1.5" />
      <path d="M6 8h12M6 12h12M6 16h12" />
    </>
  ),
  colector: () => (
    <>
      <path d="M3 10h18v6a4 4 0 01-4 4H7a4 4 0 01-4-4z" />
      <path d="M3 10l2.5-4.5h13L21 10" />
      <path d="M8 14h8M8 17h8" />
    </>
  ),
  corneta: () => (
    <>
      <path d="M4 9v6h3l6 4V5L7 9z" />
      <path d="M16 8.5a4.5 4.5 0 010 7M18.5 6a8 8 0 010 12" />
    </>
  ),
  corona: () => (
    <>
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 6V2M12 22v-4M6 12H2M22 12h-4M7.8 7.8L5.2 5.2M18.8 18.8l-2.6-2.6M16.2 7.8l2.6-2.6M5.2 18.8l2.6-2.6" />
    </>
  ),
  cremallera: () => (
    <>
      <rect x="2" y="12" width="20" height="4.5" rx="1" />
      <path d="M5 16.5V19M9 16.5V19M13 16.5V19M17 16.5V19M21 16.5V19" />
      <circle cx="12" cy="6.5" r="3.5" />
    </>
  ),
  defensa: () => (
    <>
      <path d="M3 5v13a3 3 0 003 3h12a3 3 0 003-3V5" />
      <path d="M3 10h18M3 14h18M8 5v16M16 5v16" />
    </>
  ),
  disco: () => (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.5v5.5M12 15v5.5M3.5 12H9M15 12h5.5" />
    </>
  ),
  eje: () => (
    <>
      <path d="M1.5 12h5M17.5 12h5" />
      <circle cx="12" cy="12" r="5.5" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  empaque: () => (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
    </>
  ),
  escape: () => (
    <>
      <path d="M2 9h4" />
      <rect x="6" y="5.5" width="12" height="9" rx="4.5" />
      <path d="M18 10h4M4 9v4" />
    </>
  ),
  faro: () => (
    <>
      <rect x="2" y="5" width="9" height="14" rx="2.5" />
      <path d="M11 9l9-4v14l-9-4z" />
      <path d="M4.5 9h2M4.5 12h2M4.5 15h2" />
    </>
  ),
  filtro: () => (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M7 7h10M7 11h10M7 15h10M7 18.5h10" />
    </>
  ),
  freno: () => (
    <>
      <rect x="3" y="6" width="7" height="13" rx="2" />
      <rect x="14" y="6" width="7" height="13" rx="2" />
      <path d="M10 12.5h4" />
    </>
  ),
  guaya: () => (
    <>
      <path d="M3 21c4-3 4-12 10-15" />
      <rect x="12" y="3" width="7" height="5" rx="1" />
      <path d="M15.5 8v3" />
    </>
  ),
  guia: () => (
    <>
      <rect x="5" y="3" width="14" height="5" rx="1.5" />
      <path d="M7 8v11a2 2 0 002 2h6a2 2 0 002-2V8" />
    </>
  ),
  herramienta: () => (
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  ),
  kit: () => (
    <>
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M3 12h18" />
      <path d="M9 8V6a2 2 0 012-2h2a2 2 0 012 2v2" />
    </>
  ),
  luz: () => (
    <>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2.5v4M12 17.5v4M2.5 12h4M17.5 12h4M5.2 5.2l2.8 2.8M16 16l2.8 2.8M18.8 5.2L16 8M8 16l-2.8 2.8" />
    </>
  ),
  mando: () => (
    <>
      <path d="M2 18.5h20" />
      <rect x="7" y="7" width="10" height="8" rx="2" />
      <path d="M10 10h4M10 13h2.5" />
    </>
  ),
  manguera: () => (
    <>
      <path d="M3 4v5a3 3 0 003 3h12a3 3 0 013 3v5" />
      <path d="M1 4h4M19 20h4" />
    </>
  ),
  manilla: () => (
    <>
      <path d="M2 20c7 0 11-3 13-7l2-5" />
      <circle cx="17" cy="8" r="2.5" />
      <path d="M2 20h5" />
    </>
  ),
  manubrio: () => (
    <>
      <rect x="2" y="8" width="5" height="8" rx="2.5" />
      <rect x="17" y="8" width="5" height="8" rx="2.5" />
      <path d="M7 12h10" />
    </>
  ),
  motor: () => (
    <>
      <rect x="4" y="9" width="12" height="10" rx="2" />
      <path d="M16 12h3l2.5-2v6L19 14h-3" />
      <path d="M8 9V6h4v3" />
    </>
  ),
  palanca: () => (
    <>
      <circle cx="5" cy="12" r="2.5" />
      <path d="M7.5 11.5l13-7" />
      <path d="M5 9.5v5" />
    </>
  ),
  parrilla: () => (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9.5h18M3 14.5h18M9 4v16M15 4v16" />
    </>
  ),
  pata: () => (
    <>
      <path d="M10 4h6M8 21h6" />
      <path d="M13 4v8l-2.5 9" />
      <circle cx="13" cy="12.5" r="2" />
    </>
  ),
  pintura: () => (
    <>
      <rect x="8" y="9" width="9" height="12" rx="2" />
      <path d="M10 9V6h5v3M12.5 3v3" />
      <path d="M19 4.5l2-1M20 8.5h2.5M19 12l2 1" />
    </>
  ),
  piston: () => (
    <>
      <rect x="5" y="3" width="14" height="8" rx="1.5" />
      <path d="M5 6h14M5 8.5h14" />
      <circle cx="12" cy="14.5" r="2.5" />
      <path d="M12 17v4" />
    </>
  ),
  posapie: () => (
    <>
      <rect x="3" y="8" width="18" height="7" rx="3.5" />
      <path d="M7 8v7M11 8v7M15 8v7M19 8v7" />
    </>
  ),
  'prensa-cadena': () => (
    <>
      <rect x="3" y="9" width="7" height="6" rx="3" />
      <rect x="14" y="9" width="7" height="6" rx="3" />
      <path d="M10 12h4M12 5v3M12 16v3" />
    </>
  ),
  quimico: () => (
    <>
      <path d="M9 2.5h6V5l2 3v12a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 017 20V8l2-3z" />
      <path d="M7 13h10M11 2.5V1h2v1.5" />
    </>
  ),
  regulador: () => (
    <>
      <rect x="3" y="7" width="18" height="10" rx="2" />
      <path d="M6 12h2.5l2-3.5 2.5 7 2-3.5H18" />
    </>
  ),
  retrovisor: () => (
    <>
      <rect x="2" y="4" width="10" height="7" rx="3.5" />
      <path d="M12 7.5h4M16 7.5V17" />
      <path d="M13 20h6" />
    </>
  ),
  rolinera: () => (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3.5V8M20.5 12H16M12 20.5V16M3.5 12H8" />
    </>
  ),
  rueda: () => (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 9.5V3.5M14 13.3l5.3 3M10 13.3l-5.3 3" />
    </>
  ),
  soporte: () => (
    <>
      <path d="M3 3h7v12h11v6H10a7 7 0 01-7-7z" />
      <circle cx="6.5" cy="6.5" r="1" />
      <circle cx="17.5" cy="17.5" r="1" />
    </>
  ),
  tacometro: () => (
    <>
      <path d="M4 17a8 8 0 1116 0" />
      <path d="M12 17l4.5-5.5" />
      <circle cx="12" cy="17" r="1.5" />
      <path d="M4 17h2M18 17h2" />
    </>
  ),
  tapa: () => (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M6.5 6.5h3M14.5 6.5h3M6.5 17.5h3M14.5 17.5h3" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  taza: () => (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <path d="M12 7v2M17 12h-2M12 17v-2M7 12h2" />
    </>
  ),
  tripa: () => (
    <>
      <path d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4z" />
      <path d="M3 8h18M3 12h18M3 16h18" />
    </>
  ),
  valvula: () => (
    <>
      <circle cx="12" cy="7" r="4" />
      <path d="M12 11v10" />
      <path d="M9 21h6" />
    </>
  ),
  varilla: () => (
    <>
      <rect x="3" y="10" width="18" height="4" rx="2" />
      <path d="M6 10v4M9 10v4M12 10v4" />
    </>
  ),
  volante: () => (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 9.5v-6M9.7 13.8L4.4 15.9M14.3 13.8l5.3 2.1" />
    </>
  ),
} satisfies Record<string, () => JSX.Element>;

export type IconKey = keyof typeof ICONS;

/** Categoría -> icono. Si falta alguna, TypeScript lo marca al compilar. */
const CATEGORY_ICON = {
  ACCESORIOS: 'accesorios',
  ACEITES: 'aceite',
  AMORTIGUADORES: 'amortiguador',
  'ARBOL DE LEVA': 'arbol-leca',
  ARRANQUES: 'arranque',
  'BANDAS DE FRENO': 'freno',
  BASTONES: 'manubrio',
  BATERIAS: 'bateria',
  BOBINAS: 'bobina',
  'BOCINAS Y CORNETAS': 'corneta',
  'BOMBAS DE ACEITE': 'bomba',
  'BOMBAS DE FRENO': 'bomba',
  BOMBILLOS: 'bombillo',
  BUJIAS: 'bujia',
  CADENAS: 'cadena',
  'CAJA DE VELOCIDAD': 'caja',
  CARBURADOR: 'carburador',
  CARCOMANIAS: 'carroceria',
  CARROCERIAS: 'carroceria',
  CASCOS: 'casco',
  CAUCHOS: 'manguera',
  CDI: 'cdi',
  CIGUEÑAL: 'cigueñal',
  CILINDROS: 'cilindro',
  'COLECTOR DE ACEITE': 'colector',
  CORONAS: 'corona',
  CREMALLERAS: 'cremallera',
  DEFENSAS: 'defensa',
  DISCOS: 'disco',
  'EJES Y BUJES': 'eje',
  EMBOBINADOS: 'bobina',
  EMPAQUES: 'empaque',
  ESCAPES: 'escape',
  'FAROS Y MICAS': 'faro',
  FILTROS: 'filtro',
  FORROS: 'manguera',
  FRENOS: 'freno',
  GOMAS: 'manguera',
  GUAYAS: 'guaya',
  GUIAS: 'guia',
  HERRAMIENTAS: 'herramienta',
  INSTRUMENTOS: 'tacometro',
  KITS: 'kit',
  LUCES: 'luz',
  MANDOS: 'mando',
  MANGUERAS: 'manguera',
  MANILLAS: 'manilla',
  'MANUBRIO Y PUÑOS': 'manubrio',
  MOTORES: 'motor',
  PALANCAS: 'palanca',
  PARRILLAS: 'parrilla',
  PASTILLAS: 'freno',
  'PATAS DE CAMBIO': 'pata',
  PINTURAS: 'pintura',
  PIÑON: 'corona',
  PISTON: 'piston',
  'PORTAS Y SOPORTES': 'soporte',
  POSAPIES: 'posapie',
  'PRENSA CADENA': 'prensa-cadena',
  PURIFICADORES: 'filtro',
  QUIMICOS: 'quimico',
  REGULADORES: 'regulador',
  RETROVISORES: 'retrovisor',
  ROLINERAS: 'rolinera',
  RUEDAS: 'rueda',
  STOP: 'luz',
  TACOMETRO: 'tacometro',
  TAPAS: 'tapa',
  'TAPON DE ACEITE': 'tapa',
  TAZAS: 'taza',
  TRIPAS: 'tripa',
  VALVULAS: 'valvula',
  VARILLAS: 'varilla',
  VARIOS: 'accesorios',
  VOLANTES: 'volante',
} as const satisfies Record<string, IconKey>;

/** Se usa cuando una categoría nueva todavía no tiene icono asignado. */
const FALLBACK: IconKey = 'accesorios';

export function iconKeyFor(category: string): IconKey {
  return (CATEGORY_ICON as Record<string, IconKey>)[category] ?? FALLBACK;
}

export function CategoryIcon({ category, size = 22, class: className }: CategoryIconProps) {
  return (
    <svg {...base(size)} class={className}>
      {ICONS[iconKeyFor(category)]()}
    </svg>
  );
}

/** Se exportan para el script de verificación y la hoja de contactos. */
export const ICON_KEYS = Object.keys(ICONS) as IconKey[];
export const CATEGORY_ICON_MAP = CATEGORY_ICON;