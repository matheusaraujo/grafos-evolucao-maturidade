import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import { optionsType } from '../../../utils/types';
import 'brace/mode/json';
import 'brace/theme/textmate';
import { isValidJson, fromAceEditor, toAceEditor } from '../../../utils/json';
import * as labels from '../../../utils/labels';

const OptionsAce = ({ lang, options, update }) => {
  const [tmpOptions, setTmpOptions] = useState(toAceEditor(options));
  const [isValidOptions, validateOptions] = useState(true);
  return (
    <div>
      <button
        type="button"
        className="button is-primary is-small"
        style={{ marginBottom: '12px' }}
        disabled={!isValidOptions}
        onClick={() => {
          update(fromAceEditor(tmpOptions));
        }}
      >
        {labels.update[lang]}
      </button>
      <AceEditor
        value={tmpOptions}
        mode="json"
        theme="textmate"
        name="OPTIONS_EDITOR"
        tabSize={2}
        onChange={(value) => {
          setTmpOptions(value);
          validateOptions(isValidJson(value));
        }}
        editorProps={{
          $blockScrolling: Infinity,
        }}
      />
    </div>
  );
};

OptionsAce.propTypes = {
  lang: PropTypes.string.isRequired,
  options: optionsType.isRequired,
  update: PropTypes.func.isRequired,
};

export default OptionsAce;
