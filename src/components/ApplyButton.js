import React from 'react';
import PropTypes from 'prop-types';

const ApplyButton = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
  >
    Apply
  </button>
);

ApplyButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ApplyButton;
