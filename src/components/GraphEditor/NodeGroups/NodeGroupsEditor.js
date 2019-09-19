import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { nodeGroupType } from '../../../commons/types';
import NodeGroupsAce from './NodeGroupsAce';

const NodeGroupsEditor = ({ lang, nodeGroups, updateNodeGroups }) => {
  const update = (data) => {
    updateNodeGroups(data);
  };
  return (
    <div className="columns">
      <div className="column is-half">
        <div style={{ textAlign: 'center', paddingTop: '8px' }}>
          <FontAwesomeIcon icon={faWrench} size="5x" />
          <em>Em construção</em>
        </div>
      </div>
      <div className="column is-half">
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
