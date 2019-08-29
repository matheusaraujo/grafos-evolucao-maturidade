import React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';

import 'brace/mode/json';
import 'brace/theme/github';

const JsonEditor = (props) => {
  const { message } = props;
  return (
    <AceEditor
      defaultValue={JSON.stringify(message, null, ' ')}
      mode="json"
      theme="github"
      name="UNIQUE_ID_OF_DIV"
      editorProps={{
        $blockScrolling: true,
        $tabSize: 2,
      }}
    />
  );
};

JsonEditor.propTypes = {
  message: PropTypes.object.isRequired,
};

export default JsonEditor;
