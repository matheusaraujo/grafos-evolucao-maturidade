import { getCombinationTotalWeight } from './utils';

export const getMinimumUndoneLevel = (nodes) => {
  let minimumLevel = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nodes.length; i += 1) {
    if (nodes[i].status === 0 && nodes[i].level < minimumLevel) {
      minimumLevel = nodes[i].level;
    }
  }
  return minimumLevel === Number.MAX_SAFE_INTEGER ? -1 : minimumLevel;
};

export const getCombinationDistance = (combination, minimumLevel) => {
  let distance = 0;
  for (let i = 0; i < combination.length; i += 1) {
    distance = Math.max(distance, combination[i].level - minimumLevel);
  }
  return distance;
};

export const getAllSlots = (combination) => {
  const slots = [];
  for (let i = 0; i < combination.length; i += 1) {
    if (combination[i].slots && combination[i].slots.length > 0) {
      for (let j = 0; j < combination[i].slots.length; j += 1) {
        if (slots.indexOf(combination[i].slots[j]) === -1) {
          slots.push(combination[i].slots[j]);
        }
      }
    }
  }
  slots.sort((a, b) => a - b);
  return slots;
};

export const classifyCombination = (combination, nodes) => {
  if (!combination) return null;
  const minimumLevel = getMinimumUndoneLevel(nodes);
  return {
    distance: getCombinationDistance(combination, minimumLevel),
    totalWeight: getCombinationTotalWeight(combination),
    combination,
    slots: getAllSlots(combination),
    minimumLevel,
  };
};

export const classifyCombinations = (combinations, nodes) => combinations.map((c) => {
  if (!c) return null;
  return classifyCombination(c, nodes);
});

export const sortCombinations = (classifiedCombinations) => classifiedCombinations.sort((a, b) => {
  if (a.distance > b.distance) return 1;
  if (a.distance < b.distance) return -1;
  if (a.totalWeight > b.totalWeight) return 1;
  if (a.totalWeight < b.totalWeight) return -1;
  if (a.slots.length > b.slots.length) return 1;
  if (a.slots.length < b.slots.length) return -1;
  return 0;
});
