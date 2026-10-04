/* ==========================================================================
   CONFIGURACIÓN PRINCIPAL DEL CATÁLOGO
   ========================================================================== */

/* ==========================================================================
   👇 REEMPLAZA AQUÍ TU NÚMERO DE WHATSAPP 👇
   --------------------------------------------------------------------------
   Escribe tu número real SOLO con dígitos, incluyendo el código de país y
   sin el signo "+", sin espacios ni guiones.

     Venezuela   →  584121234567
     Colombia    →  573001234567
     México      →  5215512345678
     España      →  34600123456
   ========================================================================== */
const WHATSAPP_PHONE_NUMBER = '584125687995';
/* ========================================================================== */

const PLACEHOLDER = 'TU_NUMERO_DE_TELEFONO';

/** Número normalizado: solo dígitos, o cadena vacía si aún no fue configurado. */
export const whatsappPhone: string = WHATSAPP_PHONE_NUMBER.replace(/\D/g, '');

/** Indica si el vendedor todavía no reemplazó el placeholder. */
export const isPhoneConfigured: boolean =
  whatsappPhone.length > 0 && whatsappPhone !== PLACEHOLDER.replace(/\D/g, '');

/** Nombre comercial usado en la cabecera y en el mensaje de WhatsApp. */
export const businessName = 'Top Machines';

/** Subtítulo de la marca. */
export const businessTagline = 'Atencion & servicios';