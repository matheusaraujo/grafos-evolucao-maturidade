import React from 'react';
import PropTypes from 'prop-types';
import Graph from 'react-graph-vis';
import { graphType, nodeGroupType, optionsType } from '../../commons/types';
import './network.scss';
import './styles.scss';

const GraphViewer = ({
  graph, nodeGroups, options,
  showModal, fillModal,
}) => {
  let network = null;

  const makeNodeDetails = (node) => {
    // TO-DO Remover constantes
    const w = node.weight ? `**Carga Horária:** ${node.weight}  \n` : '';
    const l = node.level ? `**Período:** ${node.level}  \n` : '';
    const group = nodeGroups.find((g) => g.id === node.groupId);
    let g = '';
    let sg = '';
    if (group) {
      g = group.label ? `**Ciclo Geral**: ${group.label}  \n` : '';
      const subGroup = group.subGroups.find((g1) => g1.id === node.subGroupId);
      if (subGroup) sg = subGroup.label ? `**Ciclo Detalhado:** ${subGroup.label}  \n` : '';
    }
    return `${node.details}  \n---  \n${w + l + g + sg}`;
  };

  const events = {
    selectNode(n) {
      if (n.nodes.length === 1) {
        const id = n.nodes[0];
        const node = graph.nodes.find((nd) => nd.id === id);
        if (node.details) {
          setTimeout(() => {
            fillModal(node.label, node.title, makeNodeDetails(node));
            showModal();
            if (network) {
              network.selectEdges([]);
              network.selectNodes([]);
            }
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
            if (network) {
              network.selectEdges([]);
              network.selectNodes([]);
            }
          }, 0);
        }
      }
    },
  };

  const getColor = (groupId) => {
    if (!groupId) return undefined;
    const g = nodeGroups.find((ng) => ng.id === groupId);
    if (!g) return undefined;
    return g.color;
  };

  const mappedGraph = {
    nodes: graph.nodes.map((n) => ({
      id: n.id,
      label: n.label,
      title: n.title,
      shape: 'circle',
      color: getColor(n.groupId),
      level: n.level,
    })),
    edges: graph.edges.map((e) => ({
      id: e.id,
      from: e.from,
      to: e.to,
      title: e.label,
      arrows: 'to',
    })),
  };

  return (
    <div className="box">
      <Graph
        graph={mappedGraph}
        options={options}
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
  nodeGroups: PropTypes.arrayOf(nodeGroupType).isRequired,
  options: optionsType.isRequired,
  fillModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default GraphViewer;
