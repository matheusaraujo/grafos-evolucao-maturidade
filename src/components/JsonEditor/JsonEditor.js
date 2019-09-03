import React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';

import 'brace/mode/json';
import 'brace/theme/textmate';
import { graphType } from '../../commons/types';

const JsonEditor = ({
  graph, updateGraph,
}) => {
  let innerGraph = { ...graph };
  const onChange = (value) => { innerGraph = value; };
  const onClick = () => {
    if (typeof innerGraph === 'string') {
      innerGraph = JSON.parse(innerGraph);
    }
    updateGraph(innerGraph);
  };

  const buttonUpdate = (
    <button className="btn-update-graph button is-small is-primary" style={{ float: 'right' }} type="button" onClick={onClick}>
      Atualizar
    </button>
  );

  const editor = (
    <AceEditor
      value={JSON.stringify(graph, null, ' ')}
      mode="json"
      theme="textmate"
      name="ACE_EDITOR"
      width="100%"
      tabSize={2}
      onChange={onChange}
    />
  );

  return (
    <div>      
      {editor}
    </div>
  );
};

JsonEditor.propTypes = {
  graph: graphType.isRequired,
  updateGraph: PropTypes.func.isRequired,
};

export default JsonEditor;
