import React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';

import 'brace/mode/json';
import 'brace/theme/github';
import { graphType } from '../../commons/types';

const JsonEditor = ({
  showCode, graph, toggleCode, updateGraph,
}) => {
  let innerGraph = { ...graph };
  const onChange = (value) => { innerGraph = value; };
  const onClick = () => {
    if (typeof innerGraph === 'string') {
      innerGraph = JSON.parse(innerGraph);
    }
    updateGraph(innerGraph);
  };

  const editor = (
    <div>
      <AceEditor
        value={JSON.stringify(graph, null, ' ')}
        mode="json"
        theme="github"
        name="ACE_EDITOR"
        editorProps={{
          $blockScrolling: true,
          $tabSize: 2,
        }}
        onChange={onChange}
      />
      <button className="btn--primary" type="button" onClick={onClick}>
        Atualizar
      </button>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={toggleCode}>Código</button>
      {showCode ? editor : ''}
    </div>
  );
};

JsonEditor.propTypes = {
  showCode: PropTypes.bool.isRequired,
  graph: graphType.isRequired,
  toggleCode: PropTypes.func.isRequired,
  updateGraph: PropTypes.func.isRequired,
};

export default JsonEditor;
