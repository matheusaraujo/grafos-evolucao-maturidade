import {
  shape, number, string, arrayOf,
} from 'prop-types';

export const graphType = shape({
  nodes: arrayOf(shape({
    id: number.isRequired,
    label: string.isRequired,
  })).isRequired,
  edges: arrayOf(shape({
    id: number.isRequired,
    from: number.isRequired,
    to: number.isRequired,
  })),
});

export const optionsType = shape({
  layout: string,
});
