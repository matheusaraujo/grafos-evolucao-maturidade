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
  filterMustNotIncludeSlots,
} from './getAvailableCombinations';
import {
  sortCombinations,
  classifyCombinations,
} from './classifyCombinations';
import { isFilledArray } from '../../utils/arrays';

const Nexts = (nodes, edges, {
  minWeight,
  maxWeight,
  maxDistance,
  forceMinimumLevel,
  mustIncludeNodes,
  mustNotIncludeSlots,
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
  if (isFilledArray(mustNotIncludeSlots)) {
    nextsOptions = filterMustNotIncludeSlots(nextsOptions, mustNotIncludeSlots);
  }

  nextsOptions = filterMaximumDistanceCombination(nextsOptions, maxDistance);

  nextsOptions = sortCombinations(nextsOptions);
  return nextsOptions;
};

export default Nexts;
