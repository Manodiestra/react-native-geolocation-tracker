import UUID from 'uuid-js';
import {constants} from '../actions/markerActions';
import {act} from 'react-test-renderer';
const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.get('CREATE_MARKER'):
      let updatedMarkers = JSON.parse(JSON.stringify(state));
      console.log('payload', action.payload);
      const newMarker = {
        ...action.payload,
      };
      updatedMarkers.push(newMarker);
      return [...updatedMarkers];
    case constants.get('GET_MARKERS_DONE'):
      //console.log('GET MARKERS DONE', action.payload);
      return action.payload;
  }
  return state;
}
