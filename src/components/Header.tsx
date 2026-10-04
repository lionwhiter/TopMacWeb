import { businessName, businessTagline } from '../config';
import { CartIcon } from './Icons';

interface HeaderProps {
  totalUnits: number;
  onOpenCart: () => void;
}

export default function Header({ totalUnits, onOpenCart }: HeaderProps) {
  return (
    <header>
      <a class="brand" href="/" title={`${businessName} - ${businessTagline}`}>
        <img class="brand-logo-img" src="/logo.png" alt={`Logo de ${businessName}`} width={50} height={50} />
        <div class="brand-text">
          <h1>
            Top <span>Machines</span>
          </h1>
          <p>{businessTagline}</p>
        </div>
      </a>

      <div class="header-actions">
        <button class="cart-btn-nav" onClick={onOpenCart} aria-label="Abrir lista de cotización">
          <CartIcon />
          <span class="btn-label">Cotización</span>
          <span class="cart-badge" aria-live="polite" aria-atomic="true">
            {totalUnits}
          </span>
        </button>
      </div>
    </header>
  );
}