import React from 'react';
import PropTypes from 'prop-types';
import { edgeType } from '../../../utils/types';
import EdgesAce from './EdgesAce';

const EdgesEditor = ({ lang, edges, updateEdges }) => {
  const update = (data) => {
    updateEdges(data);
  };
  return (
    <div className="columns">
      <div className="column">
        <EdgesAce lang={lang} edges={edges} update={update} />
      </div>
    </div>
  );
};

EdgesEditor.propTypes = {
  lang: PropTypes.string.isRequired,
  edges: PropTypes.arrayOf(edgeType).isRequired,
  updateEdges: PropTypes.func.isRequired,
};

export default EdgesEditor;
