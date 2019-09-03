import React from 'react';
import Graph from 'react-graph-vis';
import { graphType, optionsType } from '../../commons/types';

const GraphViewer = ({ graph, options }) => (
  <div className="box">
    <Graph graph={graph} options={options} />
  </div>
);

GraphViewer.propTypes = {
  graph: graphType.isRequired,
  options: optionsType.isRequired,
};

export default GraphViewer;
