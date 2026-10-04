import { BoltIcon, SearchIcon } from './Icons';

interface SearchHeroProps {
  query: string;
  totalCategories: number;
  totalProducts: number;
  onQueryChange: (value: string) => void;
}

export default function SearchHero({
  query,
  totalCategories,
  totalProducts,
  onQueryChange,
}: SearchHeroProps) {
  return (
    <section class="hero">
      <div class="hero-info-text">
        <div class="hero-badge">
          <BoltIcon />
          Catálogo Oficial de Repuestos
        </div>
        <h2>Cotiza repuestos para tu moto de inmediato</h2>
        <p>
          {totalProducts} repuestos en {totalCategories} categorías. Selecciona lo que necesitas, arma tu
          lista y recibe la cotización por WhatsApp.
        </p>
      </div>

      <div class="search-input-wrapper">
        <span class="search-icon">
          <SearchIcon />
        </span>
        <input
          class="search-input"
          type="search"
          value={query}
          placeholder="Buscar por repuesto, código o modelo (ej. CG150, bujía, aceite, cadena)..."
          aria-label="Buscar repuestos"
          autoComplete="off"
          onInput={(event) => onQueryChange((event.currentTarget as HTMLInputElement).value)}
        />
        {query && (
          <button class="search-clear" onClick={() => onQueryChange('')} aria-label="Limpiar búsqueda">
            ×
          </button>
        )}
      </div>
    </section>
  );
}