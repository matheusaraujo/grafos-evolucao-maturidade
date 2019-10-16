import { getAllCombinations } from './utils';
import {
  filterPending,
  filterAllPrecedentsDone,
} from './getAvailableNodes';
import {
  filterMinimumWeightCombination,
  filterMaximumWeightCombination,
  filterConflictingCombinations,
  filterMaximumDistanceCombination,
} from './getAvailableCombinations';
import {
  sortCombinations,
  classifyCombinations,
} from './classifyCombinations';

const Nexts = (nodes, edges, { minWeight, maxWeight, maxDistance }) => {
  if (!nodes || nodes.length === 0) return [];

  let availableNodes = filterPending(nodes);
  availableNodes = filterAllPrecedentsDone(availableNodes, nodes, edges);

  let combinations = getAllCombinations(availableNodes);
  combinations = filterMinimumWeightCombination(combinations, minWeight);
  combinations = filterMaximumWeightCombination(combinations, maxWeight);
  combinations = filterConflictingCombinations(combinations);

  let classifiedCombinations = classifyCombinations(combinations, nodes);
  classifiedCombinations = filterMaximumDistanceCombination(classifiedCombinations, maxDistance);

  classifiedCombinations = sortCombinations(classifiedCombinations);
  return classifiedCombinations;
};

export default Nexts;
