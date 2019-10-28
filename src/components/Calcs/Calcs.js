import React from 'react';
import { nextsType } from '../../utils/types';
import NextsOptions from './NextsOptions/index';

const Calcs = ({
  nexts,
}) => {
  if (nexts.visible) {
    return (<NextsOptions />);
  }
  return null;
};

Calcs.propTypes = {
  nexts: nextsType.isRequired,
};

export default Calcs;
