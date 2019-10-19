import {
  shape, number, string, bool, arrayOf,
} from 'prop-types';

export const nodeType = shape({
  id: number.isRequired,
  label: string.isRequired,
  title: string,
  detail: string,
  level: number,
  weight: number,
  groupId: number,
  subGroupId: number,
  status: number,
});

export const edgeType = shape({
  id: number.isRequired,
  from: number.isRequired,
  to: number.isRequired,
  title: string,
  detail: string,
});

export const graphType = shape({
  nodes: arrayOf(nodeType).isRequired,
  edges: arrayOf(edgeType).isRequired,
});

export const optionsType = shape({
  layout: shape({
    hierarchical: shape({
      enabled: bool.isRequired,
      direction: string.isRequired,
    }),
  }),
  height: string.isRequired,
});

export const nodeSubGroupType = shape({
  id: number.isRequired,
  label: string.isRequired,
});

export const nodeGroupType = shape({
  id: number.isRequired,
  label: string.isRequired,
  color: string,
  subGroups: arrayOf(nodeSubGroupType),
});

export const nextsOptionsType = shape({
  nodes: arrayOf(nodeType),
  distance: number.isRequired,
  slots: arrayOf(number).isRequired,
  totalWeight: number,
});

export const nextsType = shape({
  calculated: bool,
  calculating: bool,
  options: arrayOf(nextsOptionsType),
});
