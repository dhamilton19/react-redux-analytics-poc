import React from 'react';
import {analytics} from '../actions/analyticsActions';
import store from '../store/store';


const getNewProps = props => {
  let newProps = {};
  Object.keys(props).forEach(key => {
    if (key.endsWith('Event')) {
      newProps = {
        ...newProps, ...{
          [key]: (...args) => {
            dispatchAction(props);
            props[key](...args);
          }
        }
      };
    }
    else {
      newProps = {...newProps, ...{[key]: props[key]}};
    }
  });
  return newProps;
};

const dispatchAction = props => {
  const {dispatch} = store;
  dispatch(analytics({key: props.key, name: props.name}));
};

const WithAnalytics = Component => props => <Component {...getNewProps(props)} />;

export default WithAnalytics;
