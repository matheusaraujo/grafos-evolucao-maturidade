/* eslint-disable no-bitwise */
export const getCombinationTotalWeight = (combination) => {
  const sum = combination.reduce((a, b) => a + b.weight, 0);
  return sum;
};

export const getAllCombinations = (arr) => {
  const result = [];
  const arrLen = arr.length;
  const combinations = 2 ** arrLen;
  for (let i = 0; i < combinations; i += 1) {
    const temp = [];
    for (let j = 0; j < arrLen; j += 1) {
      const b = i & (2 ** j);
      if (b) temp.push(arr[j]);
    }
    if (temp.length !== 0) result.push(temp);
  }
  return result;
};
