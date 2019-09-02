import React from 'react';

import GraphEditor from '../GraphEditor/index';
import GraphViewer from '../GraphViewer/index';

import * as labels from '../../commons/labels';

const GraphPage = ({ lang }) => (
  <div>
    <h1 className="title">{labels.maturityEvolutionGraphsTitle[lang]}</h1>
    <div className="columns">
      <div className="column is-one-quarter">
        <GraphEditor />
      </div>
      <div className="column is-three-quarters">
        <GraphViewer />
      </div>
    </div>
  </div>
);

export default GraphPage;
