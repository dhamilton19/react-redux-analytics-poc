import React from 'react';
import PropTypes from 'prop-types';
import analyticsDispatcher from '../utils/analytics';


const FuelSavingsTextInput = (props) => {
  const handleChange = (e) => {
    analyticsDispatcher()({key: props.name});
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

export default FuelSavingsTextInput;
