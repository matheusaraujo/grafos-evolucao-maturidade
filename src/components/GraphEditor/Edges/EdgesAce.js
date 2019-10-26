import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import { edgeType } from '../../../utils/types';
import 'brace/mode/json';
import 'brace/theme/textmate';
import { isValidJson, fromAceEditor, toAceEditor } from '../../../utils/json';
import * as labels from '../../../utils/labels';

const EdgesAce = ({ lang, edges, update }) => {
  const [tmpEdges, setTmpEdges] = useState(toAceEditor(edges));
  const [isValidEdges, validateEdges] = useState(true);
  return (
    <div>
      <button
        type="button"
        className="button is-primary"
        style={{ float: 'right' }}
        disabled={!isValidEdges}
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
        name="EDGES_EDITOR"
        width="100%"
        tabSize={2}
        onChange={(value) => {
          setTmpEdges(value);
          validateEdges(isValidJson(value));
        }}
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
