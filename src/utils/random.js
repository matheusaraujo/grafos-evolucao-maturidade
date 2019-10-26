const generateRandom = () => {
  const crypto = window.crypto || window.msCrypto;
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return array[0];
};

export default generateRandom;
