/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const NodeEditor = ({ nodeEdition, endNodeEdition }) => {
  if (!nodeEdition) return null;
  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <strong>Editar Vértice</strong>
          <button
            type="button"
            className="delete"
            aria-label="close"
            onClick={endNodeEdition}
          />
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label">id</label>
            <div className="control">
              <input className="input" type="text" id="nodeId" placeholder="id" disabled />
            </div>
          </div>
          <div className="field">
            <label className="label">label</label>
            <div className="control">
              <input className="input" type="text" id="nodeId" placeholder="label" />
            </div>
          </div>
          <div className="field">
            <label className="label">title</label>
            <div className="control">
              <input className="input" type="text" id="nodeId" placeholder="title" />
            </div>
          </div>
          <div className="field">
            <label className="label">details</label>
            <div className="control">
              <textarea className="textarea" placeholder="details" />
            </div>
          </div>
        </section>
        <footer className="modal-card-foot" />
      </div>
    </div>
  );
};

NodeEditor.propTypes = {
  nodeEdition: PropTypes.bool.isRequired,
  endNodeEdition: PropTypes.func.isRequired,
};

export default NodeEditor;
