import {
  filterPending,
  filterAllPrecedentsDone,
} from './getAvailableNodes';
import {
  getAllCombinations,
  filterMinimumWeightCombination,
  filterMaximumWeightCombination,
  filterConflictingCombinations,
} from './getAvailableCombinations';
import {
  sortCombinations,
} from './classifyCombinations';

const Nexts = (nodes, edges, { minWeight, maxWeight }) => {
  let availableNodes = filterPending(nodes);
  availableNodes = filterAllPrecedentsDone(availableNodes, nodes, edges);

  let combinations = getAllCombinations(availableNodes);
  combinations = filterMinimumWeightCombination(combinations, minWeight);
  combinations = filterMaximumWeightCombination(combinations, maxWeight);
  combinations = filterConflictingCombinations(combinations);
  return sortCombinations(combinations, nodes);
};

export default Nexts;
