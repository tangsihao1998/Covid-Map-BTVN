import { combineReducers } from 'redux';
import initialState from './../initialState';
import mapReducers from './mapReducers';

export default combineReducers({
  infoMap: mapReducers(initialState.infoMap),
});