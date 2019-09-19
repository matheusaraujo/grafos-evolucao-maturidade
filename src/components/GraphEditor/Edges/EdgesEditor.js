import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { nodeType } from '../../../commons/types';
import EdgesAce from './EdgesAce';

const EdgesEditor = ({ lang, edges, updateEdges }) => {
  const update = (data) => {
    updateEdges(data);
  };
  return (
    <div className="columns">
      <div className="column is-half">
        <FontAwesomeIcon icon={faWrench} />
      </div>
      <div className="column is-half">
        <EdgesAce lang={lang} edges={edges} update={update} />
      </div>
    </div>
  );
};

EdgesEditor.propTypes = {
  lang: PropTypes.string.isRequired,
  edges: PropTypes.arrayOf(nodeType).isRequired,
  updateEdges: PropTypes.func.isRequired,
};

export default EdgesEditor;
