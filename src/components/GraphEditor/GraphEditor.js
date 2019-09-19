/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import * as labels from '../../commons/labels';
import NodesEditor from './Nodes/index';
import EdgesEditor from './Edges/index';
import OptionsEditor from './Options/index';

const GraphEditor = ({
  lang, pageMode,
  editNodes, editNodesGroups, editEdges, editOptions,
}) => (
  <div className="box">
    <div className="tabs is-small">
      <ul>
        <li className={pageMode === 'editing_nodes' ? 'is-active' : ''}>
          <a onClick={editNodes}>{labels.nodes[lang]}</a>
        </li>
        <li className={pageMode === 'editing_nodes_groups' ? 'is-active' : ''}>
          <a onClick={editNodesGroups}>{labels.nodesGroups[lang]}</a>
        </li>
        <li className={pageMode === 'editing_edges' ? 'is-active' : ''}>
          <a onClick={editEdges}>{labels.edges[lang]}</a>
        </li>
        <li className={pageMode === 'editing_options' ? 'is-active' : ''}>
          <a onClick={editOptions}>{labels.options[lang]}</a>
        </li>
      </ul>
    </div>
    <div>
      {pageMode === 'editing_nodes' && <NodesEditor />}
      {pageMode === 'editing_nodes_groups' && (
        <div style={{ textAlign: 'center', paddingTop: '8px' }}>
          <FontAwesomeIcon icon={faWrench} size="5x" />
          <em>Em construção</em>
        </div>
      )}
      {pageMode === 'editing_edges' && <EdgesEditor />}
      {pageMode === 'editing_options' && <OptionsEditor />}
    </div>
  </div>
);

GraphEditor.propTypes = {
  lang: PropTypes.string.isRequired,
  pageMode: PropTypes.string.isRequired,
  editNodes: PropTypes.func.isRequired,
  editNodesGroups: PropTypes.func.isRequired,
  editEdges: PropTypes.func.isRequired,
  editOptions: PropTypes.func.isRequired,
};

export default GraphEditor;
