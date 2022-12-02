import { combineReducers } from 'redux';

import objects from './objects/reducer';
import filter from './filter/reducer';

const rootReducer = combineReducers({
  objects,
  filter
});

export default rootReducer;
