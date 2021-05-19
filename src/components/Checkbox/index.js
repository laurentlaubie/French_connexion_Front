import React from 'react';
import PropTypes from 'prop-types';

import './checkbox.scss';

const Checkbox = ({ type, name, checked, onChange, defaultCheck }) => {
  const handleChange = (evt) => {
    console.log(checked);
    console.log(evt.target.value);
    onChange(evt.target.value, checked);
    console.log('on a changé');
  };

  return (
    <div className="checkbox">
      <label htmlFor={name}>
        {name}
        <input type={type} value={name} checked={checked} onChange={handleChange} defaultChecked={defaultCheck}/> 
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
