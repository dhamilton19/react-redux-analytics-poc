import React from 'react';
import PropTypes from 'prop-types';
import analytics from './AnalyticsFuelSavingsTextInput.analytics';
import withAnalyticsContext from '../withAnalyticsContext';

const FuelSavingsTextInput = (props) => {
  const handleChange = (e) => {
    props.analytics.dispatch({...analytics, value: e.target.value});
    props.onChange(props.name, e.target.value);
  };

  return (
    <input
      className="small"
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={handleChange}/>
  );
};

FuelSavingsTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default withAnalyticsContext(FuelSavingsTextInput);
