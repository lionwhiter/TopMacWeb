import type { RefObject } from 'preact';
import type { CustomerData, FieldErrors } from '../lib/whatsapp';
import { UserIcon } from './Icons';

interface CustomerFormProps {
  data: CustomerData;
  errors: FieldErrors;
  showAlert: boolean;
  formRef: RefObject<HTMLDivElement>;
  onChange: (field: keyof CustomerData, value: string) => void;
}

const FIELDS: Array<{
  key: 'name' | 'address' | 'motorcycle';
  label: string;
  placeholder: string;
}> = [
  { key: 'name', label: 'Nombre y Apellido', placeholder: 'Ej. Carlos Pérez' },
  { key: 'address', label: 'Ciudad / Dirección de entrega', placeholder: 'Ej. Valencia, Carabobo (o envío nacional)' },
  { key: 'motorcycle', label: 'Modelo y año de la moto', placeholder: 'Ej. Bera SBR 150 (2023) / Empire Keeway Horse' },
];

export default function CustomerForm({ data, errors, showAlert, formRef, onChange }: CustomerFormProps) {
  return (
    <div class="cart-form-section" ref={formRef}>
      <h3>
        <UserIcon />
        Datos para la Cotización
      </h3>

      {showAlert && (
        <p class="form-alert" role="alert">
          Completa los 3 campos obligatorios para enviar tu solicitud.
        </p>
      )}

      {FIELDS.map((field) => {
        const hasError = Boolean(errors[field.key]);
        return (
          <div class="form-group" key={field.key}>
            <label for={`field-${field.key}`}>
              {field.label} <span class="req">*</span>
            </label>
            <input
              id={`field-${field.key}`}
              type="text"
              value={data[field.key]}
              placeholder={field.placeholder}
              autoComplete="off"
              aria-required="true"
              aria-invalid={hasError}
              data-invalid={hasError ? 'true' : 'false'}
              class={hasError ? 'error' : ''}
              onInput={(event) => onChange(field.key, (event.currentTarget as HTMLInputElement).value)}
            />
            {hasError && <span class="form-error">Este campo es obligatorio.</span>}
          </div>
        );
      })}

      <div class="form-group">
        <label for="field-notes">Notas o comentarios (opcional)</label>
        <textarea
          id="field-notes"
          rows={2}
          value={data.notes}
          placeholder="Ej: marca específica, compatibilidad o requerimiento especial..."
          onInput={(event) => onChange('notes', (event.currentTarget as HTMLTextAreaElement).value)}
        />
      </div>
    </div>
  );
}