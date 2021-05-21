// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './textArea.scss';

// == Composant
const TextArea = ({
  className,
  value,
  name,
  placeholder,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `${className}-${name}`;

  return (
    <textarea
      className={className}
      value={value}
      onChange={handleChange}
      id={inputId}
      placeholder={placeholder}
      name={name}
    />
  );
};

TextArea.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

// Valeurs par défaut pour les props
TextArea.defaultProps = {
  value: '',
};

// == Export
export default TextArea;
