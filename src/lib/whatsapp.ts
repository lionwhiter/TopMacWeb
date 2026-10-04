import { businessName, isPhoneConfigured, whatsappPhone } from '../config';

/** Una línea del carrito, ya resuelta a producto + cantidad. */
export interface CartLine {
  name: string;
  category: string;
  qty: number;
}

/** Datos que el cliente debe completar antes de confirmar el pedido. */
export interface CustomerData {
  name: string;
  address: string;
  motorcycle: string;
  notes: string;
}

/** Campos del formulario y sus textos de error. */
export const REQUIRED_FIELDS = [
  { key: 'name', label: 'Nombre y Apellido' },
  { key: 'address', label: 'Ciudad / Dirección de entrega' },
  { key: 'motorcycle', label: 'Modelo y año de la moto' },
] as const;

export type CustomerFieldKey = (typeof REQUIRED_FIELDS)[number]['key'];
export type FieldErrors = Partial<Record<CustomerFieldKey, true>>;

/** Valida los 3 campos obligatorios. Devuelve los errores por campo. */
export function validateCustomer(data: CustomerData): FieldErrors {
  const errors: FieldErrors = {};
  for (const field of REQUIRED_FIELDS) {
    if (!data[field.key].trim()) errors[field.key] = true;
  }
  return errors;
}

/** Total de unidades agregadas al carrito. */
export function totalUnits(lines: CartLine[]): number {
  return lines.reduce((acc, line) => acc + line.qty, 0);
}

/** Arma el mensaje de WhatsApp con el formato de cotización. */
export function buildMessage(lines: CartLine[], data: CustomerData): string {
  let message = `¡Hola *${businessName}*! Me gustaría solicitar cotización para los siguientes repuestos:\n\n`;

  message += `🏍️ *DATOS DE LA SOLICITUD*\n`;
  message += `👤 *Cliente:* ${data.name.trim()}\n`;
  message += `📍 *Ciudad / Entrega:* ${data.address.trim()}\n`;
  message += `⚙️ *Moto y Año:* ${data.motorcycle.trim()}\n`;

  if (data.notes.trim()) {
    message += `📝 *Comentarios / Notas:* ${data.notes.trim()}\n`;
  }

  message += `\n📦 *LISTA DE REPUESTOS:* (${totalUnits(lines)} unidades)\n`;
  lines.forEach((line, index) => {
    message += `${index + 1}. *${line.name}* (Cant: ${line.qty}) - _[${line.category}]_\n`;
  });

  message += `\nQuedo atento a la disponibilidad y costo total. ¡Gracias!`;
  return message;
}

/**
 * Construye el enlace de WhatsApp con el mensaje en URL Encode.
 * Si el teléfono sigue sin configurar, cae al selector de contacto de
 * wa.me para que el cliente pueda elegir un chat.
 */
export function buildWhatsappUrl(lines: CartLine[], data: CustomerData): string {
  const text = encodeURIComponent(buildMessage(lines, data));
  return isPhoneConfigured ? `https://wa.me/${whatsappPhone}?text=${text}` : `https://wa.me/?text=${text}`;
}