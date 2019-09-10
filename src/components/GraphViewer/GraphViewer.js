/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import Graph from 'react-graph-vis';
import { graphType, optionsType } from '../../commons/types';
import './network.css';
import './styles.css';

const GraphViewer = ({
  graph, options, showDetails, setDetails,
}) => {
  const events = {
    selectNode(e) {
      console.log(e);
      if (e.nodes.length === 1) {
        const id = e.nodes[0];
        const node = graph.nodes.find((n) => n.id === id);
        console.log(node);
        setDetails(node.details);
        showDetails();
      }
    },
    selectEdge(e) {
      console.log(e);
      setDetails(e.toString());
      showDetails();
    },
  };

  const mappedGraph = {
    nodes: graph.nodes.map((n) => ({
      id: n.id,
      label: n.label,
      title: n.title,
    })),
    edges: graph.edges,
  };

  return (
    <div className="box">
      <Graph graph={mappedGraph} options={options} events={events} />
    </div>
  );
};

GraphViewer.propTypes = {
  graph: graphType.isRequired,
  options: optionsType.isRequired,
  showDetails: PropTypes.func.isRequired,
  setDetails: PropTypes.func.isRequired,
};

export default GraphViewer;
