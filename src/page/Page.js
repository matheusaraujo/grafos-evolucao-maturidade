import React from 'react';
import PropTypes from 'prop-types';
import JsonEditor from '../components/JsonEditor/index';
import GraphViewer from '../components/GraphViewer/index';
import InitialPage from '../components/InitialPage/index';
import './Page.css';

const Page = ({ loaded }) => {
  if (!loaded) {
    return (<InitialPage />);
  }

  return (
    <div>
      <JsonEditor />
      <GraphViewer />
    </div>
  );
};

Page.propTypes = {
  loaded: PropTypes.bool.isRequired,
};

export default Page;
