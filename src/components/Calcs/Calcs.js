import React from 'react';
import PropTypes from 'prop-types';
import * as labels from '../../commons/labels';
import { graphType, nextsOptionsType } from '../../commons/types';

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

  return (
    <div>
      {buttonNexts}
      {nexts.calculated ? 'c' : ''}
    </div>
  );
};

Calcs.propTypes = {
  lang: PropTypes.string.isRequired,
  graph: graphType.isRequired,
  beginCalcNexts: PropTypes.func.isRequired,
  nexts: PropTypes.shape({
    calculated: PropTypes.bool,
    calculating: PropTypes.bool,
    options: PropTypes.arrayOf(nextsOptionsType),
  }).isRequired,
};

export default Calcs;
