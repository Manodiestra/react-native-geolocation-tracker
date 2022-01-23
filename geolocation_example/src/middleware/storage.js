import AsyncStorage from '@react-native-community/async-storage';
import {constants} from '../actions/markerActions';

export default store => next => action => {
  const result = next(action);
  if (action.type === constants.get('GET_MARKERS')) {
    AsyncStorage.getItem('@markers')
      .then(markersJson => {
        let markers = [];
        if (markersJson) {
          markers = JSON.parse(markersJson);
        }
        store.dispatch({
          type: constants.get('GET_MARKERS_DONE'),
          payload: markers,
        });
      })
      .catch(console.log);
  } else if (action.type === constants.get('CREATE_MARKER')) {
    console.log('STORING MARKERS', store.getState().markers.markers);
    AsyncStorage.setItem(
      '@markers',
      JSON.stringify(store.getState().markers.markers),
    ).catch(console.log);
  } else if (action.type === constants.get('GET_ADV')) {
    AsyncStorage.getItem('@adventures')
      .then(advJson => {
        let advs = [];
        if (advJson) {
          advs = JSON.parse(advJson);
        }
        console.log('Dispatch payload', advs);
        store.dispatch({
          type: constants.get('GET_ADV_DONE'),
          payload: advs,
        });
      })
      .catch(console.log);
  } else if (action.type === constants.get('CREATE_ADV')) {
    console.log('STORING ADV', store.getState().markers.adventures);
    AsyncStorage.setItem(
      '@adventures',
      JSON.stringify(store.getState().markers.adventures),
    ).catch(console.log);
  }
  return result;
};
