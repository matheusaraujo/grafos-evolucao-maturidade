import React from 'react';
import PropTypes from 'prop-types';
import { nodeGroupType } from '../../../utils/types';
import NodeGroupsAce from './NodeGroupsAce';

const NodeGroupsEditor = ({ lang, nodeGroups, updateNodeGroups }) => {
  const update = (data) => {
    updateNodeGroups(data);
  };
  return (
    <div className="columns">
      <div className="column">
        <NodeGroupsAce lang={lang} nodeGroups={nodeGroups} update={update} />
      </div>
    </div>
  );
};

NodeGroupsEditor.propTypes = {
  lang: PropTypes.string.isRequired,
  nodeGroups: PropTypes.arrayOf(nodeGroupType).isRequired,
  updateNodeGroups: PropTypes.func.isRequired,
};

export default NodeGroupsEditor;
