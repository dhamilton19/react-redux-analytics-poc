export const analytics = store => next => action => {
  if(action.type.startsWith('@@ANALYTICS')){
    //service call to log analytics
    console.log(store.getState());
  }
  else{
    next(action);
  }
};
