import React from 'react';
import JsonEditor from '../components/JsonEditor';
import GraphViewer from '../components/GraphViewer';

import basicSampleData from '../samples/basicDataSample';
import systemEngineerSampleData from '../samples/systemEngineerSampleData';

import './Page.css';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { graph: null };
  }

  applyBasic = () => {
    this.setState({ graph: basicSampleData.graph });
  }

  applySystemEngineer = () => {
    this.setState({ graph: systemEngineerSampleData.graph });
  }

  applyFromEditor = (graph) => {
    this.setState({ graph });
  }

  render() {
    const { graph } = this.state;

    if (!graph) {
      return (
        <div className="container">
          <strong>Aplicação não iniciada</strong>
          <p>Selecione um modelo para iniciar.</p>
          <button type="button" className="btn--primary" onClick={this.applyBasic}>Basic</button> &nbsp;
          <button type="button" className="btn--primary" onClick={this.applySystemEngineer}>System Engineer</button>
        </div>
      );
    }

    return (
      <div>
        <div className="container11">
          <JsonEditor graph={graph} apply={this.applyFromEditor} />
          <GraphViewer graph={graph} />
        </div>
      </div>
    );
  }
}

export default Page;
