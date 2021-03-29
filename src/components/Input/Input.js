import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

// TODO Add color prop
function Input({
  type,
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
  required,
  className,
  error,
  helperText,
  disabled,
  fullWidth,
}) {
  const errorClass = error ? 'input--error' : '';

  return (
    <div>
      <label htmlFor={id} className="input__label">
        {label}
      </label>
      <input
        name={name}
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required={required}
        className={`input ${errorClass} ${
          fullWidth ? 'full-width' : ''
        } ${className}`}
        disabled={disabled}
      />
      {error && <div className="input__helpertext">{helperText}</div>}
    </div>
  );
}

Input.defaultProps = {
  id: '',
  name: '',
  value: '',
  required: false,
  className: '',
  placeholder: '',
  helperText: '',
  disabled: false,
  error: false,
  fullWidth: false,
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

export default Input;
