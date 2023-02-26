export const formatearDinero = (cantidad: number): string => {
  return cantidad.toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
  });
};
