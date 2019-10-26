import React from 'react';
import PropTypes from 'prop-types';
import Graph from 'react-graph-vis';
import { graphType, nodeGroupType, mappedOptionsType } from '../../utils/types';
import { mapNodeDetails } from '../../services/Mappers/NodeMapper';
import './network.scss';
import './styles.scss';

const GraphViewer = ({
  graph, mappedGraph, nodeGroups, mappedOptions,
  showModal, fillModal,
}) => {
  let network = null;
  const events = {
    selectNode(n) {
      if (n.nodes.length === 1) {
        const id = n.nodes[0];
        const node = graph.nodes.find((nd) => nd.id === id);
        if (node.details) {
          setTimeout(() => {
            fillModal(node.label, node.title, mapNodeDetails(node, nodeGroups));
            showModal();
            if (network) network.unselectAll();
          }, 0);
        }
      }
    },
    selectEdge(e) {
      if (e.edges.length === 1) {
        const id = e.edges[0];
        const edge = graph.edges.find((ed) => ed.id === id);
        if (edge.details) {
          setTimeout(() => {
            fillModal(edge.title, undefined, edge.details);
            showModal();
            if (network) network.unselectAll();
          }, 0);
        }
      }
    },
  };

  return (
    <div className="box">
      <Graph
        graph={mappedGraph}
        options={mappedOptions}
        events={events}
        getNetwork={(_network) => {
          network = _network;
        }}
      />
    </div>
  );
};

GraphViewer.propTypes = {
  graph: graphType.isRequired,
  mappedGraph: PropTypes.object.isRequired,
  nodeGroups: PropTypes.arrayOf(nodeGroupType).isRequired,
  mappedOptions: mappedOptionsType.isRequired,
  fillModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default GraphViewer;
