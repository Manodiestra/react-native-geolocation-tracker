import {createStore, combineReducers, applyMiddleware} from 'redux';
import markers from '../reducers/markers';
import idAssigner from '../middleware/id_assigner';
import storage from '../middleware/storage';

export default createStore(
  combineReducers({
    markers,
  }),
  applyMiddleware(idAssigner, storage),
);
