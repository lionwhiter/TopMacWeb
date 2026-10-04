import type { ProductGroup } from '../data/products';
import { slugify } from '../data/products';
import ProductCard from './ProductCard';

interface CategorySectionProps {
  group: ProductGroup;
  cart: Record<string, number>;
  onIncrease: (name: string) => void;
  onDecrease: (name: string) => void;
}

export default function CategorySection({ group, cart, onIncrease, onDecrease }: CategorySectionProps) {
  return (
    <section class="category-block" id={`cat-${slugify(group.category)}`}>
      <div class="category-header-wrap">
        <h2 class="category-title">
          <span class="category-title-pill" />
          {group.category}
          <span class="count-tag">
            {group.items.length} {group.items.length === 1 ? 'item' : 'items'}
          </span>
        </h2>
        <a class="btn-scroll-top-cat" href="#categoryNavSection">
          ↑ Categorías
        </a>
      </div>

      <div class="products-grid">
        {group.items.map((item) => (
          <ProductCard
            key={item}
            name={item}
            category={group.category}
            qty={cart[item] ?? 0}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        ))}
      </div>
    </section>
  );
}