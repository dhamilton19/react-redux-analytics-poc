let isInitialised = false;
let dispatcher = null;

export const initialise = newDispatcher => {
  if(newDispatcher) {
    isInitialised = true;
    dispatcher = newDispatcher;
  }
};

export default () => {
  if(!isInitialised){
    throw Error('Must initialise dispatcher');
  }
  return dispatcher;
}
