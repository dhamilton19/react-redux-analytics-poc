import React from 'react';
import {analytics} from '../actions/analyticsActions';
import store from '../store/store';

const handleEvents = (events, prop, key, currentProp) => {
  let newProps = {};
  if (events) {
    Object.keys(events).forEach(event => {
      if (event === prop) {
        newProps = {...newProps, ...handleEvent(events, prop, key, currentProp, event)};
      }
    });
  }
  return newProps;
};

const handleEvent = (events, prop, key, currentProp, event) => {
  return {
    [prop]: (...args) => {
      let params = {};
      if (events[event].params) {
        events[event].params.forEach(param => {
          params = {...params, ...{[param]: args[param]}};
        });
      }
      dispatchAction({key, params});
      currentProp(...args);
    }
  };
};

const getNewProps = (analytics, props) => {
  let newProps = {...props};
  const {key, events} = analytics[props.name];

  Object.keys(props).forEach(prop => {
    newProps = {...newProps, ...handleEvents(events, prop, key, props[prop])};
  });

  return newProps;
};

const dispatchAction = payload => {
  const {dispatch} = store;
  dispatch(analytics(payload));
};

const WithAnalytics = (analytics, Component) => props => <Component {...getNewProps(analytics, props)} />;

export default WithAnalytics;
