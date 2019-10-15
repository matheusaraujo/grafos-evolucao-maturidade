import { getAvailableNodes } from './getAvailableNodes';
import {
  getAllCombinations,
  filterMinimumWeightCombination,
  filterMaximumWeightCombination,
} from './getAvailableCombinations';

const Nexts = (nodes, edges) => {
  const availableNodes = getAvailableNodes(nodes, edges);
  let combinations = getAllCombinations(availableNodes);
  combinations = filterMinimumWeightCombination(combinations);
  combinations = filterMaximumWeightCombination(combinations);
  return combinations;
};

export default Nexts;
