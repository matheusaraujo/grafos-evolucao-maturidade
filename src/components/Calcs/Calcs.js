import React from 'react';
import PropTypes from 'prop-types';
import * as labels from '../../commons/labels';
import { graphType, nextsType } from '../../commons/types';
import NextsOptions from './NextsOptions/index';

const Calcs = ({
  lang,
  graph,
  nexts,
  beginCalcNexts,
}) => {
  const buttonNexts = (
    <button
      className="button is-primary is-light is-small"
      type="button"
      onClick={() => { beginCalcNexts(graph); }}
    >
      {labels.nexts[lang]}
    </button>
  );

  if (nexts.calculated) {
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
  beginCalcNexts: PropTypes.func.isRequired,
  nexts: nextsType.isRequired,
};

export default Calcs;
