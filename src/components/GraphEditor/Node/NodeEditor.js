import React from 'react';
import PropTypes from 'prop-types';
import { nodeType } from '../../../commons/types';
import NodeAce from './NodeAce';
import NodeCrud from './NodeCrud';

const NodeEditor = ({ lang, nodes, updateNodes }) => {
  const update = (data) => {
    updateNodes(data);
  };
  return (
    <div className="columns">
      <div className="column is-half">
        <NodeCrud lang={lang} nodes={nodes} update={update} />
      </div>
      <div className="column is-half">
        <NodeAce nodes={nodes} onChange={update} />
      </div>
    </div>
  );
};

NodeEditor.propTypes = {
  lang: PropTypes.string.isRequired,
  nodes: PropTypes.arrayOf(nodeType).isRequired,
  updateNodes: PropTypes.func.isRequired,
};

export default NodeEditor;
