import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import { nodeType } from '../../../commons/types';
import 'brace/mode/json';
import 'brace/theme/textmate';
import { fromAceEditor, toAceEditor } from '../../../commons/json';
import * as labels from '../../../commons/labels';

const NodesAce = ({ lang, nodes, update }) => {
  const [tmpNodes, setTmpNodes] = useState(toAceEditor(nodes));
  return (
    <div>
      <button
        type="button"
        className="button is-small is-text"
        style={{ float: 'right' }}
        onClick={() => {
          update(fromAceEditor(tmpNodes));
        }}
      >
        {labels.update[lang]}
      </button>
      <AceEditor
        value={tmpNodes}
        mode="json"
        theme="textmate"
        name="NODES_EDITOR"
        width="100%"
        tabSize={2}
        onChange={(value) => setTmpNodes(value)}
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
