import type { RefObject } from 'preact';
import type { CartLine, CustomerData, FieldErrors } from '../lib/whatsapp';
import { isPhoneConfigured } from '../config';
import CustomerForm from './CustomerForm';
import { BagIcon, CartIcon, TrashIcon, WhatsappIcon } from './Icons';

interface CartDrawerProps {
  isOpen: boolean;
  lines: CartLine[];
  totalUnits: number;
  customer: CustomerData;
  errors: FieldErrors;
  showAlert: boolean;
  formRef: RefObject<HTMLDivElement>;
  closeBtnRef: RefObject<HTMLButtonElement>;
  onClose: () => void;
  onIncrease: (name: string) => void;
  onDecrease: (name: string) => void;
  onRemove: (name: string) => void;
  onCustomerChange: (field: keyof CustomerData, value: string) => void;
  onSubmit: () => void;
}

export default function CartDrawer({
  isOpen,
  lines,
  totalUnits,
  customer,
  errors,
  showAlert,
  formRef,
  closeBtnRef,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
  onCustomerChange,
  onSubmit,
}: CartDrawerProps) {
  const isEmpty = lines.length === 0;

  return (
    <>
      <div class={`cart-overlay${isOpen ? ' active' : ''}`} onClick={onClose} />

      <aside
        class={`cart-drawer${isOpen ? ' active' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Lista de repuestos para cotizar"
        aria-hidden={!isOpen}
      >
        <div class="cart-header">
          <h2>
            <BagIcon />
            Lista de Cotización ({totalUnits})
          </h2>
          <button
            class="close-cart-btn"
            onClick={onClose}
            aria-label="Cerrar carrito"
            ref={closeBtnRef}
          >
            ×
          </button>
        </div>

        <div class="cart-content">
          {isEmpty ? (
            <div class="empty-cart-msg">
              <CartIcon size={60} />
              <p class="empty-title">Tu lista de cotización está vacía</p>
              <p class="empty-hint">
                Agrega repuestos desde el catálogo con el botón (+ Añadir a la lista).
              </p>
            </div>
          ) : (
            <>
              <div class="cart-items-list">
                {lines.map((line) => (
                  <div class="cart-item-row" key={line.name}>
                    <div class="cart-item-details">
                      <div class="cart-item-name" title={line.name}>
                        {line.name}
                      </div>
                      <div class="cart-item-cat">{line.category}</div>
                    </div>
                    <div class="cart-row-controls">
                      <button class="btn-row-qty" onClick={() => onDecrease(line.name)} aria-label={`Quitar una unidad de ${line.name}`}>
                        −
                      </button>
                      <span class="row-qty-text">{line.qty}</span>
                      <button class="btn-row-qty" onClick={() => onIncrease(line.name)} aria-label={`Agregar otra unidad de ${line.name}`}>
                        +
                      </button>
                      <button class="btn-row-del" onClick={() => onRemove(line.name)} aria-label={`Eliminar ${line.name} de la lista`}>
                        <TrashIcon />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <CustomerForm
                data={customer}
                errors={errors}
                showAlert={showAlert}
                formRef={formRef}
                onChange={onCustomerChange}
              />
            </>
          )}
        </div>

        <div class="cart-footer">
          <button class="btn-confirm-wa" onClick={onSubmit} disabled={isEmpty}>
            <WhatsappIcon />
            Confirmar Pedido por WhatsApp
          </button>
          <p class="wa-disclaimer">
            {isPhoneConfigured
              ? 'Se abrirá WhatsApp con el formato de tu cotización listo para enviar.'
              : 'Configura tu número en src/config.ts para enviarlo directamente a tu WhatsApp.'}
          </p>
        </div>
      </aside>
    </>
  );
}