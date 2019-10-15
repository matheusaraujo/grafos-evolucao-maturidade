import { getAvailableNodes } from './getAvailableNodes';
import {
  getAllCombinations,
  filterMinimumWeightCombination,
  filterMaximumWeightCombination,
  filterConflictingCombinations,
} from './getAvailableCombinations';

const Nexts = (nodes, edges) => {
  const availableNodes = getAvailableNodes(nodes, edges);

  let combinations = getAllCombinations(availableNodes);
  combinations = filterMinimumWeightCombination(combinations);
  combinations = filterMaximumWeightCombination(combinations);
  combinations = filterConflictingCombinations(combinations);

  return combinations;
};

export default Nexts;
