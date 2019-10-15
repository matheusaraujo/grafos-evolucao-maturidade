/* eslint-disable no-bitwise */
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

export const getCombinationTotalWeight = (combination) => {
  const sum = combination.reduce((a, b) => a + b.weight, 0);
  return sum;
};

const isMinimumWeight = (combination, minWeight) => {
  const totalWeight = getCombinationTotalWeight(combination);
  return totalWeight >= minWeight;
};

const isMaximumWeight = (combination, maxWeight) => {
  const totalWeight = getCombinationTotalWeight(combination);
  return totalWeight <= maxWeight;
};

export const filterMinimumWeightCombination = (combinations, minWeight) => {
  const result = [];
  for (let i = 0; i < combinations.length; i += 1) {
    if (isMinimumWeight(combinations[i], minWeight)) {
      result.push(combinations[i]);
    }
  }
  return result;
};

export const filterMaximumWeightCombination = (combinations, maxWeight) => {
  const result = [];
  for (let i = 0; i < combinations.length; i += 1) {
    if (isMaximumWeight(combinations[i], maxWeight)) {
      result.push(combinations[i]);
    }
  }
  return result;
};

export const areConflictingNodes = (node1, node2) => {
  const slots1 = node1.slots;
  const slots2 = node2.slots;
  return slots1.some((s1) => slots2.indexOf(s1) !== -1);
};

export const isConflictingCombination = (combination) => {
  for (let i = 0; i < combination.length - 1; i += 1) {
    for (let j = i + 1; j < combination.length; j += 1) {
      const node1 = combination[i];
      const node2 = combination[j];
      if (areConflictingNodes(node1, node2)) return true;
    }
  }
  return false;
};

export const filterConflictingCombinations = (combinations) => {
  const result = [];
  for (let i = 0; i < combinations.length; i += 1) {
    if (!isConflictingCombination(combinations[i])) {
      result.push(combinations[i]);
    }
  }
  return result;
};
