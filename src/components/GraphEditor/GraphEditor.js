/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import JsonEditor from '../JsonEditor/index';

import * as labels from '../../commons/labels';

const GraphEditor = ({ lang }) => (
  <div className="box">
    <div className="columns">
      <div className="column is-four-fifths">
        <div className="tabs is-small">
          <ul>
            <li className="is-active">
              <a>{labels.graph[lang]}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="column">
        &nbsp;
      </div>
    </div>
    <div>
      <JsonEditor />
    </div>
  </div>
);

export default GraphEditor;
