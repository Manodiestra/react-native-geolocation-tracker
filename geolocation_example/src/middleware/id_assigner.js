import UUID from 'uuid-js';
import {constants} from '../actions/markerActions';

export default store => next => action => {
  if (action.type == constants.get('CREATE_MARKER')) {
    action.payload.id = UUID.create().toString();
    console.log('NEW ID MADE');
  }
  const result = next(action);
  return result;
};
