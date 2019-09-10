import React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/textmate';

const AceEditorOptions = ({ options, onChange }) => (
  <AceEditor
    value={options}
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

AceEditorOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AceEditorOptions;
