/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { nodeType } from '../../../commons/types';
import * as labels from '../../../commons/labels';
import './NodesCrud.scss';

const NodesCrud = ({ lang, nodes, update }) => {
  const [_id, setId] = useState(0);
  const [_label, setLabel] = useState('');
  const [_title, setTitle] = useState('');
  const [_details, setDetails] = useState('');
  const [_groupId, setGroupId] = useState(0);
  const [_level, setLevel] = useState(0);

  const [operation, setOperation] = useState('list');
  const list = () => setOperation('list');
  const addNode = () => {
    setId(nodes.length ? nodes[nodes.length - 1].id + 1 : 1);
    setLabel('');
    setTitle('');
    setDetails('');
    setGroupId(0);
    setLevel(0);
    setOperation('new');
  };
  const editNode = (id) => {
    const node = nodes.find((n) => n.id === id);
    setId(node.id);
    setLabel(node.label);
    setTitle(node.title || '');
    setDetails(node.details || '');
    setGroupId(node.groupId || 0);
    setLevel(node.level || 0);
    setOperation('edit');
  };

  const saveTmpNode = () => {
    const node = {
      id: _id,
      label: _label,
      title: _title,
      details: _details,
      groupId: _groupId,
      level: _level,
    };
    const i = nodes.find((n) => n.id === node.id);
    if (i) update(nodes.map((n) => (n.id === node.id ? node : n)));
    else update([...nodes, node]);
    list();
  };

  if (operation === 'list') {
    return (
      <div className="content nodes-content">
        <button
          type="button"
          className="button is-primary"
          style={{ float: 'right' }}
          onClick={addNode}
        >
          {labels.add[lang]}
        </button>
        &nbsp;
        <table className="table is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <td>id</td>
              <td colSpan="2">label</td>
            </tr>
          </thead>
          <tbody>
            {nodes.map((n) => (
              <tr key={n.id}>
                <td>{n.id}</td>
                <td>{n.label}</td>
                <td>
                  <button
                    type="button"
                    className="button is-text"
                    onClick={() => editNode(n.id)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (operation === 'new' || operation === 'edit') {
    return (
      <div className="content nodes-content">
        <div className="columns is-paddingless is-marginless">
          <div className="field column is-half">
            <label className="label">{labels.id[lang]}</label>
            <div className="control">
              <input
                className="input"
                type="text"
                id="nodeId"
                placeholder={labels.id[lang]}
                disabled
                value={_id}
              />
            </div>
          </div>
          <div className="field column is-half">
            <label className="label">{labels.label[lang]}</label>
            <div className="control">
              <input
                className="input"
                type="text"
                id="nodeId"
                placeholder={labels.label[lang]}
                value={_label}
                onChange={(ev) => { setLabel(ev.target.value); }}
              />
            </div>
          </div>
        </div>
        <div className="columns is-paddingless is-marginless">
          <div className="field column">
            <label className="label">{labels.title[lang]}</label>
            <div className="control">
              <input
                className="input"
                type="text"
                id="nodeId"
                placeholder={labels.title[lang]}
                value={_title}
                onChange={(ev) => { setTitle(ev.target.value); }}
              />
            </div>
          </div>
        </div>
        <div className="columns is-paddingless is-marginless">
          <div className="field column">
            <label className="label">{labels.details[lang]}</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder={labels.details[lang]}
                value={_details}
                onChange={(ev) => { setDetails(ev.target.value); }}
              />
            </div>
          </div>
        </div>
        <div className="columns is-paddingless is-marginless">
          <div className="field column is-half">
            <label className="label">{labels.groupId[lang]}</label>
            <div className="control">
              <input
                className="input"
                type="number"
                id="nodeId"
                placeholder={labels.groupId[lang]}
                value={_groupId}
                onChange={(ev) => { setGroupId(Number(ev.target.value)); }}
              />
            </div>
          </div>
          <div className="field column is-half">
            <label className="label">{labels.level[lang]}</label>
            <div className="control">
              <input
                className="input"
                type="number"
                id="nodeId"
                placeholder={labels.level[lang]}
                value={_level}
                onChange={(ev) => { setLevel(Number(ev.target.value)); }}
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          className="button is-primary"
          onClick={saveTmpNode}
          style={{ float: 'right' }}
        >
          {labels.save[lang]}
        </button>
        <p style={{ float: 'right' }}>&nbsp;</p>
        <button
          type="button"
          className="button"
          onClick={list}
          style={{ float: 'right' }}
        >
          {labels.cancel[lang]}
        </button>
      </div>
    );
  }

  return (<div>Erro</div>);
};

NodesCrud.propTypes = {
  lang: PropTypes.string.isRequired,
  nodes: PropTypes.arrayOf(nodeType).isRequired,
  update: PropTypes.func.isRequired,
};

export default NodesCrud;
