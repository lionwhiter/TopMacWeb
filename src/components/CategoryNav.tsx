import type { ProductGroup } from '../data/products';
import { slugify } from '../data/products';
import { GridIcon } from './Icons';

interface CategoryNavProps {
  groups: ProductGroup[];
  activeCategory: string | null;
  onSelect: (category: string) => void;
}

export default function CategoryNav({ groups, activeCategory, onSelect }: CategoryNavProps) {
  return (
    <div class="category-nav-section" id="categoryNavSection">
      <div class="cat-nav-title">
        <GridIcon />
        Categorías de Repuestos ({groups.length})
      </div>

      <nav class="chips-bar" aria-label="Navegación por categorías">
        {groups.map((group) => (
          <a
            key={group.category}
            class={`chip-btn${activeCategory === group.category ? ' active' : ''}`}
            href={`#cat-${slugify(group.category)}`}
            onClick={() => onSelect(group.category)}
          >
            {group.category}
            <span class="chip-count">{group.items.length}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}