export const isNumber = (n) => typeof n === 'number';

export const getNumber = (n) => (isNumber(n) ? n : parseInt(n, 10));
