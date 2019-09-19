import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { optionsType } from '../../../commons/types';
import OptionsAce from './OptionsAce';

const OptionsEditor = ({ lang, options, updateOptions }) => {
  const update = (data) => {
    updateOptions(data);
  };
  return (
    <div className="columns">
      <div className="column is-half">
        <div style={{ textAlign: 'center', paddingTop: '8px' }}>
          <FontAwesomeIcon icon={faWrench} size="5x" />
          <em>Em construção</em>
        </div>
      </div>
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
