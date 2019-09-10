import React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/textmate';

const GraphAceEditor = ({ graph, onChange }) => (
  <AceEditor
    value={graph}
    mode="json"
    theme="textmate"
    name="GRAPH_EDITOR"
    width="100%"
    tabSize={2}
    onChange={onChange}
    editorProps={{
      $blockScrolling: Infinity,
    }}
  />
);

GraphAceEditor.propTypes = {
  graph: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GraphAceEditor;
