import React from 'react';
import PropTypes from 'prop-types';
import Graph from 'react-graph-vis';
import { graphType, optionsType } from '../../commons/types';
import './network.css';
import './styles.css';

const GraphViewer = ({
  graph, options, showModal, fillModal,
}) => {
  const events = {
    selectNode(e) {
      if (e.nodes.length === 1) {
        const id = e.nodes[0];
        const node = graph.nodes.find((n) => n.id === id);
        fillModal(node.label, node.title, node.details);
        showModal();
      }
    },
    selectEdge(e) {
      fillModal(e.toString());
      showModal();
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
  fillModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default GraphViewer;
