import { getCombinationTotalWeight } from './utils';
import { getNumber } from '../../utils/number';

const isMinimumWeight = (combination, minWeight) => {
  const totalWeight = getCombinationTotalWeight(combination);
  return totalWeight >= getNumber(minWeight);
};

const isMaximumWeight = (combination, maxWeight) => {
  const totalWeight = getCombinationTotalWeight(combination);
  return totalWeight <= getNumber(maxWeight);
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

export const containsMinimumLevel = (nodes, minimumLevel) => {
  for (let i = 0; i < nodes.length; i += 1) {
    if (nodes[i].level === minimumLevel) return true;
  }
  return false;
};

export const filterMinimumLevel = (classifiedCombinations) => {
  const result = [];
  for (let i = 0; i < classifiedCombinations.length; i += 1) {
    const c = classifiedCombinations[i];
    if (containsMinimumLevel(c.combination, c.minimumLevel)) {
      result.push(classifiedCombinations[i]);
    }
  }
  return result;
};

export const filterMaximumDistanceCombination = (classifiedCombinations, maxDistance) => {
  const safeMax = maxDistance === null || maxDistance === undefined || maxDistance === 0
    ? Number.MAX_SAFE_INTEGER : maxDistance;
  return classifiedCombinations.filter((c) => c.distance <= safeMax);
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

export const filterMustIncludeNodes = (combinations, mustIncludeNodes) => {
  const result = [];
  for (let i = 0; i < combinations.length; i += 1) {
    for (let j = 0; j < mustIncludeNodes.length; j += 1) {
      const contains = combinations[i].some(
        (c) => c.id === mustIncludeNodes[j] || c.label === mustIncludeNodes[j],
      );
      if (contains) result.push(combinations[i]);
    }
  }
  return result;
};

export const filterMustNotIncludeSlots = (combinations, mustNotIncludeSlots) => {
  const result = [];
  for (let i = 0; i < combinations.length; i += 1) {
    for (let j = 0; j < mustNotIncludeSlots.length; j += 1) {
      const { slots } = combinations[i];
      const contains = slots.some((s) => mustNotIncludeSlots.indexOf(s) > -1);
      if (!contains) result.push(combinations[i]);
    }
  }
  return result;
};
