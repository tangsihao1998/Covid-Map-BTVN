import { createStore , applyMiddleware } from 'redux';
import appReducer from './../reducers/root-Reducers';
import thunk from 'redux-thunk';

//store
const store = createStore(appReducer, {} ,applyMiddleware(thunk));

export { store };