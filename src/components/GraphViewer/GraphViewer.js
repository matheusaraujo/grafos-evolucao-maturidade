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
    selectNode(n) {
      if (n.nodes.length === 1) {
        const id = n.nodes[0];
        const node = graph.nodes.find((nd) => nd.id === id);
        if (node.details) {
          fillModal(node.label, node.title, node.details);
          showModal();
        }
      }
    },
    selectEdge(e) {
      if (e.edges.length === 1) {
        const id = e.edges[0];
        const edge = graph.edges.find((ed) => ed.id === id);
        if (edge.details) {
          fillModal(edge.title, undefined, edge.details);
          showModal();
        }
      }
    },
  };

  const mappedGraph = {
    nodes: graph.nodes.map((n) => ({
      id: n.id,
      label: n.label,
      title: n.title,
      shape: 'circle',
    })),
    edges: graph.edges.map((e) => ({
      id: e.id,
      from: e.from,
      to: e.to,
      arrows: 'to',
    })),
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
