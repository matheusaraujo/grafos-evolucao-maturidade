import React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';

import 'brace/mode/json';
import 'brace/theme/github';

const JsonEditor = ({ graph, apply }) => {
  let innerGraph = { ...graph };
  const onChange = (v) => {
    innerGraph = v;
  };

  const onApply = () => {
    if (typeof innerGraph === 'string') {
      innerGraph = JSON.parse(innerGraph);
    }
    apply(innerGraph);
  };

  return (
    <div>
      <AceEditor
        value={JSON.stringify(graph, null, ' ')}
        mode="json"
        theme="github"
        name="UNIQUE_ID_OF_DIV"
        editorProps={{
          $blockScrolling: true,
          $tabSize: 2,
        }}
        onChange={onChange}
      />
      <button className="btn--primary" type="button" onClick={onApply}>
        Atualizar
      </button>
    </div>
  );
};

JsonEditor.propTypes = {
  graph: PropTypes.object.isRequired,
  apply: PropTypes.func.isRequired,
};

export default JsonEditor;
