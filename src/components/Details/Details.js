import React from 'react';
import PropTypes from 'prop-types';
import './Details.css';

const Details = ({ showDetails, content, hideDetails }) => (
  !showDetails ? ''
    : (
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <button
              type="button"
              className="delete"
              aria-label="close"
              onClick={hideDetails}
            />
          </header>
          <section className="modal-card-body">
            {content}
          </section>
          <footer className="modal-card-foot" />
        </div>

      </div>
    )
);

Details.propTypes = {
  showDetails: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  hideDetails: PropTypes.func.isRequired,
};

export default Details;
