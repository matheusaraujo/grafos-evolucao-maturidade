import React from 'react';
import PropTypes from 'prop-types';
import { nodeType } from '../../../commons/types';
import NodesAce from './NodesAce';

const NodesEditor = ({ lang, nodes, updateNodes }) => {
  const update = (data) => {
    updateNodes(data);
  };
  return (
    <div className="columns">
      <div className="column">
        <NodesAce lang={lang} nodes={nodes} update={update} />
      </div>
    </div>
  );
};

NodesEditor.propTypes = {
  lang: PropTypes.string.isRequired,
  nodes: PropTypes.arrayOf(nodeType).isRequired,
  updateNodes: PropTypes.func.isRequired,
};

export default NodesEditor;
