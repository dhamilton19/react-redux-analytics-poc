import React from 'react';
import {analytics} from '../actions/analyticsActions';
import store from '../store/store';


const getNewProps = (analytics, props) => {
  let newProps = {...props};
  const {key, events} = analytics[props.name];

  Object.keys(props).forEach(prop => {
    Object.keys(events).forEach(event => {
      if (event === prop) {
        newProps = {
          ...newProps, ...{
            [prop]: (...args) => {
              let params = {};
              if(events[event].params){
                events[event].params.forEach(param => {
                    params = {...params, ...{[param]: args[param]}};
                });
              }
              dispatchAction({key, params});
              props[prop](...args);
            }
          }
        }
      }
    });
  });

  return newProps;
};

const dispatchAction = payload => {
  const {dispatch} = store;
  dispatch(analytics(payload));
};

const WithAnalytics = (analytics, Component) => props => <Component {...getNewProps(analytics, props)} />;

export default WithAnalytics;
