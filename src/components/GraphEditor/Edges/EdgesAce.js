import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import { edgeType } from '../../../commons/types';
import 'brace/mode/json';
import 'brace/theme/textmate';
import { fromAceEditor, toAceEditor } from '../../../commons/json';
import * as labels from '../../../commons/labels';

const EdgesAce = ({ lang, edges, update }) => {
  const [tmpEdges, setTmpEdges] = useState(toAceEditor(edges));
  return (
    <div>
      <button
        type="button"
        className="button is-small is-text"
        style={{ float: 'right' }}
        onClick={() => {
          update(fromAceEditor(tmpEdges));
        }}
      >
        {labels.update[lang]}
      </button>
      <AceEditor
        value={tmpEdges}
        mode="json"
        theme="textmate"
        name="NODES_EDITOR"
        width="100%"
        tabSize={2}
        onChange={(value) => setTmpEdges(value)}
        editorProps={{
          $blockScrolling: Infinity,
        }}
      />
    </div>
  );
};

EdgesAce.propTypes = {
  lang: PropTypes.string.isRequired,
  edges: PropTypes.arrayOf(edgeType).isRequired,
  update: PropTypes.func.isRequired,
};

export default EdgesAce;
