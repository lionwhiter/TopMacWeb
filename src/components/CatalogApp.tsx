import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import Header from './Header';
import SearchHero from './SearchHero';
import CategoryNav from './CategoryNav';
import CategorySection from './CategorySection';
import CartDrawer from './CartDrawer';
import { NoResultsIcon } from './Icons';
import { PRODUCTS_DATA, normalizeText, totalCategories, totalProducts } from '../data/products';
import type { CartLine, CustomerData, FieldErrors } from '../lib/whatsapp';
import { buildWhatsappUrl, totalUnits as countUnits, validateCustomer } from '../lib/whatsapp';

/** Datos iniciales del formulario del cliente. */
const EMPTY_CUSTOMER: CustomerData = { name: '', address: '', motorcycle: '', notes: '' };

export default function CatalogApp() {
  const [query, setQuery] = useState('');
  const [cart, setCart] = useState<Record<string, number>>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customer, setCustomer] = useState<CustomerData>(EMPTY_CUSTOMER);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [showAlert, setShowAlert] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [submitAttempt, setSubmitAttempt] = useState(0);

  const formRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  /* ---------------------------- Filtrado ------------------------------- */

  const visibleGroups = useMemo(() => {
    const term = normalizeText(query);
    if (!term) return PRODUCTS_DATA;

    return PRODUCTS_DATA.map((group) => ({
      category: group.category,
      items: group.items.filter(
        (item) => normalizeText(item).includes(term) || normalizeText(group.category).includes(term),
      ),
    })).filter((group) => group.items.length > 0);
  }, [query]);

  /* ---------------------------- Carrito -------------------------------- */

  const cartLines = useMemo<CartLine[]>(
    () =>
      PRODUCTS_DATA.flatMap((group) =>
        group.items
          .filter((item) => cart[item])
          .map((item) => ({ name: item, category: group.category, qty: cart[item] })),
      ),
    [cart],
  );

  const totalUnits = useMemo(() => countUnits(cartLines), [cartLines]);

  function increase(name: string) {
    setCart((prev) => ({ ...prev, [name]: (prev[name] ?? 0) + 1 }));
  }

  function decrease(name: string) {
    setCart((prev) => {
      const next = (prev[name] ?? 0) - 1;
      if (next <= 0) {
        const without = { ...prev };
        delete without[name];
        return without;
      }
      return { ...prev, [name]: next };
    });
  }

  function remove(name: string) {
    setCart((prev) => {
      const without = { ...prev };
      delete without[name];
      return without;
    });
  }

  /* ------------------------- Comportamiento UI ------------------------- */

  useEffect(() => {
    document.body.classList.toggle('cart-open', isCartOpen);
    return () => document.body.classList.remove('cart-open');
  }, [isCartOpen]);

  useEffect(() => {
    if (!isCartOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsCartOpen(false);
    }

    document.addEventListener('keydown', onKeyDown);
    closeBtnRef.current?.focus();

    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isCartOpen]);

  function handleQueryChange(value: string) {
    setQuery(value);
    setActiveCategory(null);
  }

  function handleCustomerChange(field: keyof CustomerData, value: string) {
    setCustomer((prev) => ({ ...prev, [field]: value }));
    if (field !== 'notes' && errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      setShowAlert(false);
    }
  }

  function handleSubmit() {
    if (cartLines.length === 0) return;

    const found = validateCustomer(customer);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      setShowAlert(true);
      setSubmitAttempt((attempts) => attempts + 1);
      return;
    }

    window.open(buildWhatsappUrl(cartLines, customer), '_blank', 'noopener,noreferrer');
  }

  /* Lleva el foco al primer campo inválido, ya con el DOM actualizado. */
  useEffect(() => {
    if (submitAttempt === 0 || !isCartOpen) return;
    formRef.current?.querySelector<HTMLInputElement>('[data-invalid="true"]')?.focus();
  }, [submitAttempt, isCartOpen]);

  /* ----------------------------- Render -------------------------------- */

  const hasResults = visibleGroups.length > 0;

  return (
    <>
      <Header totalUnits={totalUnits} onOpenCart={() => setIsCartOpen(true)} />

      <main class="container">
        <SearchHero
          query={query}
          totalCategories={totalCategories}
          totalProducts={totalProducts}
          onQueryChange={handleQueryChange}
        />

        <CategoryNav groups={visibleGroups} activeCategory={activeCategory} onSelect={setActiveCategory} />

        {hasResults ? (
          visibleGroups.map((group) => (
            <CategorySection
              key={group.category}
              group={group}
              cart={cart}
              onIncrease={increase}
              onDecrease={decrease}
            />
          ))
        ) : (
          <div class="no-results">
            <span class="nr-icon">
              <NoResultsIcon />
            </span>
            <p class="nr-title">No encontramos repuestos que coincidan.</p>
            <p>Prueba con otra palabra clave o modelo, por ejemplo &quot;CG150&quot; o &quot;aceite&quot;.</p>
          </div>
        )}
      </main>

      <CartDrawer
        isOpen={isCartOpen}
        lines={cartLines}
        totalUnits={totalUnits}
        customer={customer}
        errors={errors}
        showAlert={showAlert}
        formRef={formRef}
        closeBtnRef={closeBtnRef}
        onClose={() => setIsCartOpen(false)}
        onIncrease={increase}
        onDecrease={decrease}
        onRemove={remove}
        onCustomerChange={handleCustomerChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}