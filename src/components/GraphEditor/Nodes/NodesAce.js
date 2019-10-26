import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import { nodeType } from '../../../utils/types';
import 'brace/mode/json';
import 'brace/theme/textmate';
import { isValidJson, fromAceEditor, toAceEditor } from '../../../utils/json';
import * as labels from '../../../utils/labels';

const NodesAce = ({ lang, nodes, update }) => {
  const [tmpNodes, setTmpNodes] = useState(toAceEditor(nodes));
  const [isValidNodes, validateNodes] = useState(true);
  return (
    <div>
      <button
        type="button"
        className="button is-primary"
        style={{ float: 'right' }}
        disabled={!isValidNodes}
        onClick={() => {
          update(fromAceEditor(tmpNodes));
        }}
      >
        {labels.update[lang]}
      </button>
      &nbsp;
      <AceEditor
        value={tmpNodes}
        mode="json"
        theme="textmate"
        name="NODES_EDITOR"
        width="100%"
        tabSize={2}
        onChange={(value) => {
          setTmpNodes(value);
          validateNodes(isValidJson(value));
        }}
        editorProps={{
          $blockScrolling: Infinity,
        }}
      />
    </div>
  );
};

NodesAce.propTypes = {
  lang: PropTypes.string.isRequired,
  nodes: PropTypes.arrayOf(nodeType).isRequired,
  update: PropTypes.func.isRequired,
};

export default NodesAce;
