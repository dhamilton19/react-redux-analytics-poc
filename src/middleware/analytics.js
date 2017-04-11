export const analytics = store => next => action => {
  if(action.type.startsWith('@@ANALYTICS')){
    console.log(store.getState());
  }
  else{
    next(action);
  }
};
