import React from 'react';
import PropTypes from 'prop-types';

const FuelSavingsTextInput = (props) => {
  const handleChange = (e) => {
    props.onChangeEvent(props.name, e.target.value);
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
  onChangeEvent: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default FuelSavingsTextInput;
