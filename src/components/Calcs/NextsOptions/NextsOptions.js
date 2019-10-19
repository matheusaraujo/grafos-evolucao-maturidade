import React from 'react';
import PropTypes from 'prop-types';
import { nextsType } from '../../../commons/types';
import './NextsOptions.scss';

const NextsOptions = ({ nexts, hideNexts }) => {
  if (nexts.calculated) {
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
          </section>
          <footer className="modal-card-foot" />
        </div>
      </div>
    );
  }
  return (null);
};

NextsOptions.propTypes = {
  nexts: nextsType.isRequired,
  hideNexts: PropTypes.func.isRequired,
};

export default NextsOptions;
