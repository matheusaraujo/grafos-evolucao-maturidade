import {
  shape, number, string, bool, arrayOf,
} from 'prop-types';

export const graphType = shape({
  nodes: arrayOf(shape({
    id: number.isRequired,
    label: string.isRequired,
    title: string,
  })).isRequired,
  edges: arrayOf(shape({
    id: number.isRequired,
    from: number.isRequired,
    to: number.isRequired,
    title: string,
  })),
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
