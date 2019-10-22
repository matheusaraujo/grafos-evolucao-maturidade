/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nextsType, graphType } from '../../../commons/types';
import './NextsOptions.scss';

const NextsOptions = ({
  graph, nexts, showNexts, hideNexts, beginCalcNexts,
}) => {
  let content = null;
  const [_minWeight, setMinWeight] = useState(195);
  const [_maxWeight, setMaxWeight] = useState(375);
  const [_maxDistance, setMaxistance] = useState(3);
  const [_forceMinimumLevel, setForceMinimumLevel] = useState(true);

  if (nexts.calculated) {
    content = (
      <div>
        {nexts.options.length === 0 ? <div>Nenhuma combinação encontrada </div> : null}
        {nexts.options.map((o, i) => (
          <div className="card" key={Math.random()}>
            <header className="card-header">
              <p className="card-header-title">Opção {i + 1}:</p>
              <p className="card-header-subtitle">Distância: <b>{o.distance}</b>, Peso: <b>{o.totalWeight}</b>, Slots: <b>{o.slots.join(',')}</b></p>
            </header>
            <div className="card-content">
              <ul className="inner-ul">
                {o.combination.map((c) => (
                  <li key={Math.random()}>
                    {c.label} {c.title} <b>{c.level}</b> - <b>{c.weight}</b> - <b>{c.slots.join(',')}</b>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <button
          className="button is-text"
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
          <div className="field column is-half">
            <label className="label">Peso mínimo</label>
            <div className="control">
              <input
                className="input"
                type="text"
                id="minWeight"
                placeholder="195"
                value={_minWeight}
                onChange={(e) => { setMinWeight(e.target.value); }}
              />
            </div>
          </div>
          <div className="field column is-half">
            <label className="label">Peso máximo</label>
            <div className="control">
              <input
                className="input"
                type="text"
                id="maxWeight"
                placeholder="375"
                value={_maxWeight}
                onChange={(e) => { setMaxWeight(e.target.value); }}
              />
            </div>
          </div>
        </div>
        <div className="columns is-paddingless is-marginless">
          <div className="field column is-half">
            <label className="label">Distância Máxima</label>
            <div className="control">
              <input
                className="input"
                type="text"
                id="maxDistance"
                placeholder="3"
                value={_maxDistance}
                onChange={(e) => { setMaxistance(e.target.value); }}
              />
            </div>
          </div>
          <div className="field column is-half">
            <label className="label">&nbsp;</label>
            <label className="checkbox">
              <input
                type="checkbox"
                id="forcMinimumLevel"
                placeholder="3"
                checked={_forceMinimumLevel}
                onChange={(e) => { setForceMinimumLevel(e.target.checked); }}
              />
              &nbsp;Forçar nível mínimo
            </label>
          </div>
        </div>
        <div className="columns is-paddingless is-marginless">
          <div className="field column is-full">
            <button
              className="button is-primary"
              type="button"
              onClick={() => {
                beginCalcNexts(graph, {
                  minWeight: _minWeight,
                  maxWeight: _maxWeight,
                  maxDistance: _maxDistance,
                  forceMinimumLevel: _forceMinimumLevel,
                });
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
          Próximas
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
};

export default NextsOptions;
