import UUID from 'uuid-js';
import {constants} from '../actions/markerActions';
import {act} from 'react-test-renderer';
const initialState = {adventures: [], goals: [], markers: []};

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.get('CREATE_MARKER'):
      let updatedMarkers = JSON.parse(JSON.stringify(state.markers));
      console.log('payload', action.payload);
      const newMarker = {
        ...action.payload,
      };
      updatedMarkers.push(newMarker);
      return {...state, markers: [...updatedMarkers]};
    case constants.get('GET_MARKERS_DONE'):
      //console.log('GET MARKERS DONE', action.payload);
      return {...state, markers: [...action.payload]};
    case constants.get('CREATE_ADV'):
      console.log('State in create', state.adventures);
      let updatedAdv = JSON.parse(JSON.stringify(state.adventures));
      console.log('payload', action.payload);
      const newAdv = {
        ...action.payload,
      };
      updatedAdv.push(newAdv);
      return {...state, adventures: [...updatedAdv]};
    case constants.get('GET_ADV_DONE'):
      console.log('GET ADV DONE', action.payload);
      return {...state, adventures: [...action.payload]};
  }
  return state;
}
