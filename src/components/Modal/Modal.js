import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import './Modal.scss';

const Modal = ({
  visible, title, subtitle, content, hideModal,
}) => {
  if (!visible) return null;
  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <strong>{title}</strong>
          {subtitle && <p>&nbsp;-&nbsp;{subtitle}</p>}
          <button
            type="button"
            className="delete"
            aria-label="close"
            onClick={hideModal}
          />
        </header>
        <section className="modal-card-body">
          <ReactMarkdown source={content} />
        </section>
        <footer className="modal-card-foot" />
      </div>

    </div>
  );
};

Modal.defaultProps = {
  subtitle: undefined,
};

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default Modal;
