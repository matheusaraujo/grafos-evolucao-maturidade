/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GraphAceEditor from './Graph/GraphAceEditor';
import OptionsAceEditor from './Options/AceEditorOptions';
import NodeEditor from './NodeEditor/index';

import * as labels from '../../commons/labels';
import { isValidJson, toAceEditor, fromAceEditor } from '../../commons/json';

import { graphType, optionsType } from '../../commons/types';

const GraphEditor = ({
  lang, graph, options, updateGraph, updateOptions,
  beginNodeEdition,
}) => {
  const [selectedTab, selectTab] = useState('graph');

  const [isGraphValid, validateGraph] = useState(true);
  const [stateGraph, updateStateGraph] = useState(toAceEditor(graph));
  const graphAceEditor = (
    <GraphAceEditor
      graph={stateGraph}
      onChange={(value) => {
        updateStateGraph(value);
        validateGraph(isValidJson(value));
      }}
    />
  );

  const [isOptionsValid, validateOptions] = useState(true);
  const [stateOptions, updateStateOptions] = useState(JSON.stringify(options, null, ' '));
  const aceEditorOptions = (
    <OptionsAceEditor
      options={stateOptions}
      onChange={(value) => {
        updateStateOptions(value);
        validateOptions(isValidJson(value));
      }}
    />
  );

  const onUpdate = () => {
    updateGraph(fromAceEditor(stateGraph));
    updateOptions(fromAceEditor(stateOptions));
  };

  const buttonUpdate = (
    <button
      className="btn-update-graph button is-small is-primary"
      type="button"
      onClick={onUpdate}
      disabled={!(isGraphValid && isOptionsValid)}
    >
      {labels.update[lang]}
    </button>
  );

  const buttonEditNode = (
    <button
      className="btn-edit-node button is-small"
      type="button"
      onClick={beginNodeEdition}
    >
      {labels.node[lang]}
    </button>
  );

  const buttonEditEdge = (
    <button
      className="btn-edit-edge button is-small"
      type="button"
      disabled
    >
      {labels.edge[lang]}
    </button>
  );

  const buttonEditOptions = (
    <button
      className="btn-edit-edge button is-small"
      type="button"
      disabled
    >
      {labels.options[lang]}
    </button>
  );

  return (
    <div className="box">
      <div className="columns">
        <div className="column is-two-thirds">
          <div className="tabs is-small">
            <ul>
              <li className={selectedTab === 'graph' ? 'is-active' : ''}>
                <a onClick={() => selectTab('graph')}>{labels.graph[lang]}</a>
              </li>
              <li className={selectedTab === 'options' ? 'is-active' : ''}>
                <a onClick={() => selectTab('options')}>{labels.options[lang]}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="column">
          {buttonUpdate}
        </div>
      </div>
      <div className="buttons has-addons is-centered">
        {buttonEditNode}
        {buttonEditEdge}
        {buttonEditOptions}
      </div>
      <div>
        {selectedTab === 'graph' && graphAceEditor}
        {selectedTab === 'options' && aceEditorOptions}
      </div>
      <NodeEditor />
    </div>
  );
};

GraphEditor.propTypes = {
  lang: PropTypes.string.isRequired,
  graph: graphType.isRequired,
  options: optionsType.isRequired,
  updateGraph: PropTypes.func.isRequired,
  updateOptions: PropTypes.func.isRequired,
  beginNodeEdition: PropTypes.func.isRequired,
};

export default GraphEditor;
