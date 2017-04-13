import configureStore from './configureStore';

let store = null;

if(!store){
  store = configureStore();
}

import {initialise} from '../utils/analytics';
import {analytics} from '../actions/analyticsActions';
initialise(payload => {
  store.dispatch(analytics(payload));
});

export default store;
