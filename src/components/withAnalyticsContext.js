import React from 'react';
import PropTypes from 'prop-types';


const Wrapper = (props, context) => props.render(context);

Wrapper.contextTypes = {
  analytics: PropTypes.shape({
    dispatch: PropTypes.func.isRequired
  })
};

const withAnalyticsContext = Component => props => <Wrapper render={context => <Component {...props} {...context} />} />;

export default withAnalyticsContext;
