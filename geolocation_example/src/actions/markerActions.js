import Constants from './constants';

export const constants = new Constants({
  CREATE_MARKER: 'CREATE_MARKER',
  GET_MARKERS: 'GET_MARKERS',
  GET_MARKERS_DONE: 'GET_MARKERS_DONE',
});

export const createMarker = payload => ({
  type: constants.get('CREATE_MARKER'),
  payload: payload,
});

export const getMarkers = () => ({
  type: constants.get('GET_MARKERS'),
});
