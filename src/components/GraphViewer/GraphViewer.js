import React from 'react';
import Graph from 'react-graph-vis';
import { graphType } from '../../commons/types';

const GraphViewer = ({ graph }) => {
  const options = {};
  return <Graph graph={graph} options={options} />;
};

GraphViewer.propTypes = {
  graph: graphType.isRequired,
};

export default GraphViewer;
