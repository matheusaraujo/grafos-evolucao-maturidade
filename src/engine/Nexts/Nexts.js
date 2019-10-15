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

const Nexts = (nodes, edges) => {
  let availableNodes = filterPending(nodes);
  availableNodes = filterAllPrecedentsDone(availableNodes, nodes, edges);

  let combinations = getAllCombinations(availableNodes);
  combinations = filterMinimumWeightCombination(combinations);
  combinations = filterMaximumWeightCombination(combinations);
  combinations = filterConflictingCombinations(combinations);

  return combinations;
};

export default Nexts;
