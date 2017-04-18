import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default


const routes = (
  <Route path="/">
    <IndexRoute component={FuelSavingsPage}/>
  </Route>
);

export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
