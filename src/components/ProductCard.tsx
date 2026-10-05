import { MinusIcon, PlusIcon } from './Icons';
import { CategoryIcon } from './CategoryIcons';

interface ProductCardProps {
  name: string;
  category: string;
  qty: number;
  onIncrease: (name: string) => void;
  onDecrease: (name: string) => void;
}

export default function ProductCard({ name, category, qty, onIncrease, onDecrease }: ProductCardProps) {
  const inCart = qty > 0;

  return (
    <article class={`product-card${inCart ? ' in-cart' : ''}`}>
      <div class="product-head">
        <span class="product-icon">
          <CategoryIcon category={category} size={24} />
        </span>
        <div class="product-info">
          <span class="cat-tag">{category}</span>
          <h3>{name}</h3>
        </div>
      </div>

      <div class="product-actions">
        {inCart ? (
          <div class="qty-controls">
            <button class="qty-btn" onClick={() => onDecrease(name)} aria-label={`Quitar una unidad de ${name}`}>
              <MinusIcon />
            </button>
            <span class="qty-count" aria-live="polite">
              {qty}
            </span>
            <button class="qty-btn" onClick={() => onIncrease(name)} aria-label={`Agregar otra unidad de ${name}`}>
              <PlusIcon />
            </button>
          </div>
        ) : (
          <button class="btn-add" onClick={() => onIncrease(name)} aria-label={`Añadir ${name} a la lista`}>
            <PlusIcon />
            Añadir a la lista
          </button>
        )}
      </div>
    </article>
  );
}