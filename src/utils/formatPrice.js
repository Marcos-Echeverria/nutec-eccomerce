export const formatPrice = (price, currency = 'ARS') => {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: currency,
    }).format(price);
};
