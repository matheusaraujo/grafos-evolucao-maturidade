import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import { nodeGroupType } from '../../../commons/types';
import 'brace/mode/json';
import 'brace/theme/textmate';
import { isValidJson, fromAceEditor, toAceEditor } from '../../../commons/json';
import * as labels from '../../../commons/labels';

const NodeGroupsAce = ({ lang, nodeGroups, update }) => {
  const [tmpNodeGroups, setTmpNodeGroups] = useState(toAceEditor(nodeGroups));
  const [isValidNodeGroups, validateNodeGroups] = useState(true);
  return (
    <div>
      <button
        type="button"
        className="button is-small is-text"
        style={{ float: 'right' }}
        disabled={!isValidNodeGroups}
        onClick={() => {
          update(fromAceEditor(tmpNodeGroups));
        }}
      >
        {labels.update[lang]}
      </button>
      <AceEditor
        value={tmpNodeGroups}
        mode="json"
        theme="textmate"
        name="NODE_GROUPS_EDITOR"
        width="100%"
        tabSize={2}
        onChange={(value) => {
          setTmpNodeGroups(value);
          validateNodeGroups(isValidJson(value));
        }}
        editorProps={{
          $blockScrolling: Infinity,
        }}
      />
    </div>
  );
};

NodeGroupsAce.propTypes = {
  lang: PropTypes.string.isRequired,
  nodeGroups: PropTypes.arrayOf(nodeGroupType).isRequired,
  update: PropTypes.func.isRequired,
};

export default NodeGroupsAce;
