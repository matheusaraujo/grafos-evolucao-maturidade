/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nextsType, graphType } from '../../../utils/types';
import generateRandom from '../../../utils/random';
import './NextsOptions.scss';

const NextsOptions = ({
  graph,
  nexts,
  showNexts,
  hideNexts,
  beginCalcNexts,
  changeNodesStatus,
}) => {
  let content = null;
  const [_minWeight, setMinWeight] = useState(195);
  const [_maxWeight, setMaxWeight] = useState(375);
  const [_maxDistance, setMaxistance] = useState(3);
  const [_forceMinimumLevel, setForceMinimumLevel] = useState(true);
  const [_showNextsOptions, setShowNextsOptions] = useState([]);
  const [_mustIncludeNodes, setMustIncludeNodes] = useState('');
  const [_mustNotIncludeSlots, setMustNotIncludeSlots] = useState('');

  if (nexts.calculated) {
    content = (
      <div>
        {nexts.options.length === 0 ? <div>Nenhuma combinação encontrada </div> : null}
        {nexts.options.map((o, i) => (
          <div className="card" key={generateRandom()}>
            <header
              className="card-header"
              onClick={() => setShowNextsOptions(
                _showNextsOptions.map((v, i1) => (i1 === i ? !v : v)),
              )}
            >
              <p className="card-header-title">Opção {i + 1}</p>
              <p className="card-header-subtitle">Distância: <b>{o.distance}</b>, Peso: <b>{o.totalWeight}</b>, Slots: <b>{o.slots.join(',')}</b></p>
            </header>
            {_showNextsOptions[i]
              && (
                <div className="card-content">
                  <ul className="inner-ul">
                    {o.combination.map((c) => (
                      <li key={generateRandom()}>
                        {c.label} - {c.title} <b>{c.level}</b> - <b>{c.weight}</b> - <b>{c.slots.join(',')}</b>
                      </li>
                    ))}
                  </ul>
                  <div className="is-divider" />
                  <div className="select-button-container">
                    <button
                      type="button"
                      className="button is-primary is-small"
                      onClick={() => { changeNodesStatus(o.combination.map((c) => c.id)); }}
                    >
                      Selecionar
                    </button>
                  </div>
                </div>
              )}
          </div>
        ))}
        <button
          className="button is-text is-small"
          type="button"
          onClick={() => { showNexts(); }}
        >
          Voltar
        </button>
      </div>
    );
  } else if (nexts.calculating) {
    content = (<div>Calculando ...</div>);
  } else {
    content = (
      <div className="content">
        <div className="columns is-paddingless is-marginless">
          <div className="field column is-one-quarter">
            <label className="label is-small" htmlFor="minWeight">Peso mínimo
              <div className="control">
                <input
                  className="input is-small"
                  type="text"
                  id="minWeight"
                  placeholder="195"
                  value={_minWeight}
                  onChange={(e) => { setMinWeight(e.target.value); }}
                />
              </div>
            </label>
          </div>
          <div className="field column is-one-quarter">
            <label className="label is-small" htmlFor="maxWeight">Peso máximo
              <div className="control">
                <input
                  className="input is-small"
                  type="text"
                  id="maxWeight"
                  placeholder="375"
                  value={_maxWeight}
                  onChange={(e) => { setMaxWeight(e.target.value); }}
                />
              </div>
            </label>
          </div>
          <div className="field column is-one-quarter">
            <label className="label is-small" htmlFor="maxDistance">Distância Máxima
              <div className="control">
                <input
                  className="input is-small"
                  type="text"
                  id="maxDistance"
                  placeholder="3"
                  value={_maxDistance}
                  onChange={(e) => { setMaxistance(e.target.value); }}
                />
              </div>
            </label>
          </div>
          <div className="field column is-one-quarter">
            <p>&nbsp;</p>
            <label className="checkbox is-small" htmlFor="forceMinimumLevel">
              <input
                type="checkbox"
                id="forceMinimumLevel"
                placeholder="3"
                checked={_forceMinimumLevel}
                onChange={(e) => { setForceMinimumLevel(e.target.checked); }}
              />
              &nbsp;Forçar nível mínimo
            </label>
          </div>
        </div>
        <div className="columns is-paddingless is-marginless">
          <div className="field column is-half">
            <label className="label is-small" htmlFor="mustIncludeNodes">Deve conter os nós
              <div className="control">
                <input
                  className="input is-small"
                  type="text"
                  id="mustIncludeNodes"
                  placeholder="AAA001,BBB002"
                  value={_mustIncludeNodes}
                  onChange={(e) => { setMustIncludeNodes(e.target.value); }}
                />
              </div>
            </label>
          </div>
          <div className="field column is-half">
            <label className="label is-small" htmlFor="mustNotIncludeSlots">Não deve conter os slots
              <div className="control">
                <input
                  className="input is-small"
                  type="text"
                  id="mustNotIncludeSlots"
                  placeholder="1,2,3"
                  value={_mustNotIncludeSlots}
                  onChange={(e) => { setMustNotIncludeSlots(e.target.value); }}
                />
              </div>
            </label>
          </div>
        </div>
        <div className="columns is-paddingless is-marginless">
          <div className="field column is-full">
            <button
              className="button is-primary is-small"
              type="button"
              onClick={() => {
                beginCalcNexts(graph, {
                  minWeight: _minWeight,
                  maxWeight: _maxWeight,
                  maxDistance: _maxDistance,
                  forceMinimumLevel: _forceMinimumLevel,
                  mustIncludeNodes: _mustIncludeNodes.length !== 0 ? _mustIncludeNodes.split(',') : null,
                  mustNotIncludeSlots: _mustNotIncludeSlots.length !== 0 ? _mustNotIncludeSlots.split(',').map((o) => parseInt(o, 10)) : null,
                }, (options) => setShowNextsOptions(Array(options.length).fill(false)));
              }}
            >
              Calcular
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <h1 className="title no-margin">Próximas</h1>
          <button
            type="button"
            className="delete"
            aria-label="close"
            onClick={hideNexts}
          />
        </header>
        <section className="modal-card-body">
          {content}
        </section>
        <footer className="modal-card-foot" />
      </div>
    </div>
  );
};

NextsOptions.propTypes = {
  nexts: nextsType.isRequired,
  graph: graphType.isRequired,
  showNexts: PropTypes.func.isRequired,
  hideNexts: PropTypes.func.isRequired,
  beginCalcNexts: PropTypes.func.isRequired,
  changeNodesStatus: PropTypes.func.isRequired,
};

export default NextsOptions;
