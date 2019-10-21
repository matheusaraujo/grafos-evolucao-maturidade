import React from 'react';
import PropTypes from 'prop-types';
import * as labels from '../../commons/labels';
import { graphType, nextsType } from '../../commons/types';
import NextsOptions from './NextsOptions/index';

const Calcs = ({
  lang,
  graph,
  nexts,
  showNexts,
}) => {
  const buttonNexts = (
    <button
      className="button is-primary is-light"
      type="button"
      onClick={() => { showNexts(graph); }}
    >
      {labels.nexts[lang]}
    </button>
  );

  if (nexts.visible) {
    return (<NextsOptions />);
  }

  return (
    <div>
      {buttonNexts}
    </div>
  );
};

Calcs.propTypes = {
  lang: PropTypes.string.isRequired,
  graph: graphType.isRequired,
  showNexts: PropTypes.func.isRequired,
  nexts: nextsType.isRequired,
};

export default Calcs;
