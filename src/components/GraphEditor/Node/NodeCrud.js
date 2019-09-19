/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nodeType } from '../../../commons/types';
import * as labels from '../../../commons/labels';

const NodeCrud = ({ lang, nodes, update }) => {
  const [tmpId, setTmpId] = useState(0);
  const [tmpLabel, setTmpLabel] = useState('');
  const [tmpTitle, setTmpTitle] = useState('');
  const [tmpDetails, setTmpDetails] = useState('');

  const [operation, setOperation] = useState('list');
  const list = () => setOperation('list');
  const addNode = () => {
    setTmpId(nodes.length ? nodes[nodes.length - 1].id + 1 : 0);
    setTmpLabel('');
    setTmpTitle('');
    setTmpDetails('');
    setOperation('new');
  };
  const editNode = (id) => {
    const node = nodes.find((n) => n.id === id);
    setTmpId(node.id);
    setTmpLabel(node.label);
    setTmpTitle(node.title);
    setTmpDetails(node.details);
    setOperation('edit');
  };

  const saveTmpNode = () => {
    const node = {
      id: tmpId,
      label: tmpLabel,
      title: tmpTitle,
      details: tmpDetails,
    };
    const i = nodes.find((n) => n.id === node.id);
    if (i) update(nodes.map((n) => (n.id === node.id ? node : n)));
    else update([...nodes, node]);
    list();
  };

  if (operation === 'list') {
    return (
      <div className="content">
        <ul>
          {nodes.map((n) => (
            <li key={n.id}>
              {n.id} - {n.label}
              <button
                type="button"
                className="button is-small is-text"
                onClick={() => editNode(n.id)}
              >
                {labels.edit[lang]}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="button is-small is-text"
          onClick={addNode}
        >
          {labels.add[lang]}
        </button>
      </div>
    );
  }

  if (operation === 'new' || operation === 'edit') {
    return (
      <div className="content">
        <div className="field">
          <label className="label">id</label>
          <div className="control">
            <input
              className="input"
              type="text"
              id="nodeId"
              placeholder="id"
              disabled
              value={tmpId}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">label</label>
          <div className="control">
            <input
              className="input"
              type="text"
              id="nodeId"
              placeholder="label"
              value={tmpLabel}
              onChange={(ev) => { setTmpLabel(ev.target.value); }}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">title</label>
          <div className="control">
            <input
              className="input"
              type="text"
              id="nodeId"
              placeholder="title"
              value={tmpTitle}
              onChange={(ev) => { setTmpTitle(ev.target.value); }}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">details</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="details"
              value={tmpDetails}
              onChange={(ev) => { setTmpDetails(ev.target.value); }}
            />
          </div>
        </div>
        <button
          type="button"
          className="button is-small is-text"
          onClick={list}
        >
          {labels.cancel[lang]}
        </button>
        <button
          type="button"
          className="button is-small is-text"
          onClick={saveTmpNode}
        >
          {labels.save[lang]}
        </button>
      </div>
    );
  }

  return (<div>Erro</div>);
};

NodeCrud.propTypes = {
  lang: PropTypes.string.isRequired,
  nodes: PropTypes.arrayOf(nodeType).isRequired,
  update: PropTypes.func.isRequired,
};

export default NodeCrud;
