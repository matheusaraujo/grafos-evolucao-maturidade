import { combineReducers } from 'redux';

import graph from './graph.reducer';
import modal from './modal.reducer';
import nexts from './nexts.reducer';
import nodeGroups from './nodeGroups.reducer';
import options from './options.reducer';
import page from './page.reducer';

export default combineReducers({
  graph,
  modal,
  nexts,
  nodeGroups,
  options,
  page,
});
