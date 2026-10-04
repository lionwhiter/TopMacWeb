# Top Machines - Catálogo de Repuestos

Catálogo de repuestos de motos que arman una lista de cotización y la envían a WhatsApp.
Sin precios en la página: el cliente arma su lista y el vendedor cotiza por WhatsApp.

## Configuración del número de WhatsApp

Abre `src/config.ts` y reemplaza el placeholder en la línea marcada:

```ts
// 👇 REEMPLAZA AQUÍ TU NÚMERO DE WHATSAPP 👇
const WHATSAPP_PHONE_NUMBER = 'TU_NUMERO_DE_TELEFONO';
```

El número se normaliza solo (se quitan `+`, espacios y guiones), así que puedes escribirlo
como lo prefieras. Ejemplos:

| País      | Escribir                | Se envía |
| --------- | ----------------------- | -------- |
| Venezuela | `+58 412-123-4567`      | 584121234567 |
| Colombia  | `573001234567`          | 573001234567 |
| México    | `+52 1 55 1234 5678`    | 5215512345678 |

Mientras no lo reemplaces, el sitio funciona igual pero abre el selector de contactos de
`wa.me` en lugar de escribirle a un número fijo.

## Comandos

```bash
npm install     # instala dependencias
npm run dev     # servidor de desarrollo en http://localhost:4321
npm run build   # genera el sitio estático en dist/
npm run preview # previsualiza el build
npm run check   # verificación de tipos
```

## Estructura

```
src/
├── config.ts              # número de WhatsApp y datos de la marca
├── data/products.ts       # 42 categorías / 65 repuestos
├── lib/whatsapp.ts        # validación, mensaje y URL de wa.me
├── styles/global.css      # paleta y estilos (global por la isla Preact)
├── components/
│   ├── CatalogApp.tsx     # isla raíz: estado de búsqueda y carrito
│   ├── Header.tsx         # cabecera fija con contador
│   ├── SearchHero.tsx     # buscador en vivo
│   ├── CategoryNav.tsx    # chips de navegación por categoría
│   ├── CategorySection.tsx
│   ├── ProductCard.tsx    # botón "+" o controles − n +
│   ├── CartDrawer.tsx     # carrito lateral
│   ├── CustomerForm.tsx   # 3 campos obligatorios + notas
│   ├── Footer.astro       # pie estático
│   └── Icons.tsx
└── pages/index.astro      # shell de la página
```

El catálogo se renderiza a HTML estático en el build (los 65 productos llegan al HTML
servido, lo que ayuda al SEO y al primer render) y Preact lo hidrata después para manejar
el carrito.

## Agregar o quitar repuestos

Edita `src/data/products.ts`. La lista de categorías y el buscador se ajustan solos:

```ts
{ category: 'ACEITES', items: ['ACEITE 4T SN 20W50', 'ACEITE 4T SN 15W50'] },
```

## Personalizar el logo

Reemplaza los archivos `public/logo.png` (cabecera, 160px de ancho) y
`public/logo-footer.png` (pie de página).

## Despliegue

El hosting es **Cloudflare Pages**. El build es 100% estático y no necesita ni `base`
ni adaptador de Cloudflare: Pages sirve `dist/` desde la raíz del dominio.

En `dash.cloudflare.com` ve a **Workers & Pages → Create → Pages → Connect to Git**,
conecta este repositorio y usa estos valores:

| Campo                  | Valor           |
| ---------------------- | --------------- |
| Production branch      | `main`          |
| Framework preset       | `Astro`         |
| Build command          | `npm run build` |
| Build output directory | `dist`          |

El sitio queda en `https://<nombre>.pages.dev` y cada `push` a `main` dispara un
build nuevo.

### Versión de Node

Astro 7 exige Node 22.12 o superior. La versión está fijada en `.node-version`
(`22.16.0`) para que el build no dependa del valor por defecto de la imagen de
Cloudflare, que puede cambiar.

### Dominio propio

Cloudflare sirve los dominios y subdominios desde la raíz, así que un dominio
propio **no** requiere `base` ni volver a compilar: solo agrega el dominio en el
panel de Pages. Para un subdominio basta un CNAME apuntando a
`<nombre>.pages.dev`; para el dominio raíz hay que mover los nameservers a
Cloudflare.

### Otros hostings

Como el build es estático, `dist/` también se puede subir a Netlify, Vercel o
GitHub Pages. Solo si el sitio quedara en un subdirectorio habría que agregar
`base` en `astro.config.mjs`:

```js
export default defineConfig({
  output: 'static',
  base: '/mi-catalogo',
  integrations: [preact()],
});
```