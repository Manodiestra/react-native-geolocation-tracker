import Constants from './constants';

export const constants = new Constants({
  CREATE_MARKER: 'CREATE_MARKER',
  GET_MARKERS: 'GET_MARKERS',
  GET_MARKERS_DONE: 'GET_MARKERS_DONE',
  CREATE_ADV: 'CREATE_ADV',
  GET_ADV: 'GET_ADV',
  GET_ADV_DONE: 'GET_ADV_DONE',
});

export const createMarker = payload => ({
  type: constants.get('CREATE_MARKER'),
  payload: payload,
});

export const createAdv = payload => ({
  type: constants.get('CREATE_ADV'),
  payload: payload,
});

export const getMarkers = () => ({
  type: constants.get('GET_MARKERS'),
});

export const getAdv = () => ({
  type: constants.get('GET_ADV'),
});
