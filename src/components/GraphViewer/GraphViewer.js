import React from 'react';
import Graph from 'react-graph-vis';
import { graphType } from '../../commons/types';

const GraphViewer = ({ graph }) => {
  const options = {
    height: '500px',
  };
  return (
    <div className="box">
      <Graph graph={graph} options={options} />
    </div>
  );
};

GraphViewer.propTypes = {
  graph: graphType.isRequired,
};

export default GraphViewer;
