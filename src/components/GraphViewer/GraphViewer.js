/* eslint-disable no-console */
import React from 'react';
import Graph from 'react-graph-vis';
import { graphType, optionsType } from '../../commons/types';
import './network.css';
import './styles.css';

const GraphViewer = ({ graph, options }) => {
  const events = {
    selectEdge(e) { console.log(e); },
    selectNode(e) { console.log(e); },
  };
  return (
    <div className="box">
      <Graph graph={graph} options={options} events={events} />
    </div>
  );
};

GraphViewer.propTypes = {
  graph: graphType.isRequired,
  options: optionsType.isRequired,
};

export default GraphViewer;
