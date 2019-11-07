export const generateRandom = () => {
  const crypto = window.crypto || window.msCrypto;
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return array[0];
};

export const max = 1;

export const min = 0;

export const middle = 0.5;
