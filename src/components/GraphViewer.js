import React from 'react';
import Graph from 'react-graph-vis';
import PropTypes from 'prop-types';

const GraphViewer = ({ graph }) => {
  const options = {};
  return <Graph graph={graph} options={options} />;
};

GraphViewer.propTypes = {
  graph: PropTypes.object.isRequired,
};

export default GraphViewer;
