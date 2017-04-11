import configureStore from './configureStore';

let store = null;

if(!store){
  store = configureStore();
}

export default store;
