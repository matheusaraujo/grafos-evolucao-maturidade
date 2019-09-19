import React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import { nodeType } from '../../../commons/types';
import 'brace/mode/json';
import 'brace/theme/textmate';
import { toAceEditor } from '../../../commons/json';

const NodeAce = ({ nodes, onChange }) => (
  <AceEditor
    value={toAceEditor(nodes)}
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

NodeAce.propTypes = {
  nodes: PropTypes.arrayOf(nodeType).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NodeAce;
