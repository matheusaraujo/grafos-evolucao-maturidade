/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GraphAceEditor from './Graph/GraphAceEditor';
import OptionsAceEditor from './Options/AceEditorOptions';

import * as labels from '../../commons/labels';
import { isValidJson, toAceEditor, fromAceEditor } from '../../commons/json';

import { graphType, optionsType } from '../../commons/types';

const GraphEditor = ({
  lang, graph, options, updateGraph, updateOptions,
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

  const onClick = () => {
    updateGraph(fromAceEditor(stateGraph));
    updateOptions(fromAceEditor(stateOptions));
  };

  const buttonUpdate = (
    <button
      className="btn-update-graph button is-small is-primary"
      type="button"
      onClick={onClick}
      disabled={!(isGraphValid && isOptionsValid)}
    >
      {labels.update[lang]}
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
      <div>
        {selectedTab === 'graph' && graphAceEditor}
        {selectedTab === 'options' && aceEditorOptions}
      </div>
    </div>
  );
};

GraphEditor.propTypes = {
  lang: PropTypes.string.isRequired,
  graph: graphType.isRequired,
  options: optionsType.isRequired,
  updateGraph: PropTypes.func.isRequired,
  updateOptions: PropTypes.func.isRequired,
};

export default GraphEditor;
