import React from 'react';
import Graph from 'react-graph-vis';
import { graphType, optionsType } from '../../commons/types';
import './network.css';
import './styles.css';

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
