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
  filterMinimumLevel,
  filterMustIncludeNodes,
} from './getAvailableCombinations';
import {
  sortCombinations,
  classifyCombinations,
} from './classifyCombinations';
import { isFilledArray } from '../../commons/arrays';

const Nexts = (nodes, edges, {
  minWeight,
  maxWeight,
  maxDistance,
  forceMinimumLevel,
  mustIncludeNodes,
}) => {
  if (!nodes || nodes.length === 0) return [];

  let availableNodes = filterPending(nodes);
  availableNodes = filterAllPrecedentsDone(availableNodes, nodes, edges);

  let combinations = getAllCombinations(availableNodes);
  if (isFilledArray(mustIncludeNodes)) {
    combinations = filterMustIncludeNodes(combinations, mustIncludeNodes);
  }
  combinations = filterMinimumWeightCombination(combinations, minWeight);
  combinations = filterMaximumWeightCombination(combinations, maxWeight);
  combinations = filterConflictingCombinations(combinations);

  let nextsOptions = classifyCombinations(combinations, nodes);
  if (forceMinimumLevel === true) {
    nextsOptions = filterMinimumLevel(nextsOptions);
  }
  nextsOptions = filterMaximumDistanceCombination(nextsOptions, maxDistance);

  nextsOptions = sortCombinations(nextsOptions);
  return nextsOptions;
};

export default Nexts;
