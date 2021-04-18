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

  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <div>
      <label className="input__label">
        <div className="mb-4">
          {label}
          {required ? '*' : ''}
        </div>
        <input
          name={name}
          id={id}
          type={type}
          onChange={handleChange}
          value={value}
          placeholder={placeholder}
          required={required}
          className={`input ${errorClass} ${
            fullWidth ? 'full-width' : ''
          } ${className}`}
          disabled={disabled}
        />
      </label>
      {error && <div className="input__helpertext">{helperText}</div>}
    </div>
  );
}

Input.defaultProps = {
  id: '',
  value: '',
  required: false,
  className: '',
  placeholder: '',
  helperText: '',
  disabled: false,
  error: false,
  fullWidth: false,
  type: 'text',
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
  label: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
