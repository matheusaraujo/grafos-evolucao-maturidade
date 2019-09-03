/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/textmate';

import * as labels from '../../commons/labels';

import { graphType, optionsType } from '../../commons/types';

const GraphEditor = ({
  lang, graph, options, updateGraph, updateOptions,
}) => {
  const [selectedTab, selectTab] = useState('graph');

  let innerGraph = { ...graph };
  let innerOptions = { ...options };
  const onChangeGraph = (value) => { innerGraph = value; };
  const onChangeOptions = (value) => { innerOptions = value; };
  const onClick = () => {
    if (typeof innerGraph === 'string') {
      innerGraph = JSON.parse(innerGraph);
    }
    if (typeof innerOptions === 'string') {
      innerOptions = JSON.parse(innerOptions);
    }
    updateGraph(innerGraph);
    updateOptions(innerOptions);
  };

  const buttonUpdate = (
    <button className="btn-update-graph button is-small is-primary" type="button" onClick={onClick}>
      Atualizar
    </button>
  );

  const aceGraphEditor = (
    <AceEditor
      value={JSON.stringify(graph, null, ' ')}
      mode="json"
      theme="textmate"
      name="GRAPH_EDITOR"
      width="100%"
      tabSize={2}
      onChange={onChangeGraph}
      editorProps={{
        $blockScrolling: Infinity,
      }}
    />
  );

  const aceOptionsEditor = (
    <AceEditor
      value={JSON.stringify(options, null, ' ')}
      mode="json"
      theme="textmate"
      name="OPTIONS_EDITOR"
      width="100%"
      tabSize={2}
      onChange={onChangeOptions}
      editorProps={{
        $blockScrolling: Infinity,
      }}
    />
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
        {selectedTab === 'graph' && aceGraphEditor}
        {selectedTab === 'options' && aceOptionsEditor}
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
