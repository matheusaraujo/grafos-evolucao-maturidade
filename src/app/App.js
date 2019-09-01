import React from 'react';
import PropTypes from 'prop-types';
import JsonEditor from '../components/JsonEditor/index';
import GraphViewer from '../components/GraphViewer/index';
import InitialPage from '../components/InitialPage/index';
import './App.sass';

const App = ({ loaded }) => {
  if (!loaded) {
    return (
      <section className="section">
        <div className="container">
          <div className="notification">
            <InitialPage />
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="columns">
      <div className="column is-one-quarter">
        <JsonEditor />
      </div>
      <div className="column is-three-quarters">
        <GraphViewer />
      </div>
    </div>
  );
};

App.propTypes = {
  loaded: PropTypes.bool.isRequired,
};

export default App;
