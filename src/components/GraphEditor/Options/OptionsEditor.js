import React from 'react';
import PropTypes from 'prop-types';
import { optionsType } from '../../../utils/types';
import OptionsAce from './OptionsAce';

const OptionsEditor = ({ lang, options, updateOptions }) => {
  const update = (data) => {
    updateOptions(data);
  };
  return (
    <div className="columns">
      <div className="column is-half">
        <OptionsAce lang={lang} options={options} update={update} />
      </div>
    </div>
  );
};

OptionsEditor.propTypes = {
  lang: PropTypes.string.isRequired,
  options: optionsType.isRequired,
  updateOptions: PropTypes.func.isRequired,
};

export default OptionsEditor;
