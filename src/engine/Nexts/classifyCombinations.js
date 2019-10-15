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

export const getCombinationDistance = (combination, nodes) => {
  const minimumLevel = getMinimumUndoneLevel(nodes);
  let distance = 0;
  for (let i = 0; i < combination.length; i += 1) {
    distance += Math.max(0, combination[i].level - minimumLevel);
  }
  return distance;
};

export const classifyCombination = (combination, nodes) => (combination && {
  distance: getCombinationDistance(combination, nodes),
  totalWeight: getCombinationTotalWeight(combination),
  combination,
});

export const sortCombinations = (combinations, nodes) => {
  const classifiedCombinations = combinations.map((m) => classifyCombination(m, nodes));
  return classifiedCombinations.sort((a, b) => {
    if (a.distance > b.distance) return 1;
    if (a.distance < b.distance) return -1;
    if (a.totalWeight > b.totalWeight) return -1;
    if (a.totalWeight < b.totalWeight) return 1;
    return 0;
  });
};
