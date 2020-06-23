// == Import : npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './style.scss';

// == Composant
const Field = ({
  value,
  changeValue,
  type,
  placeholder,
  name,
}) => {
  const inputId = `field-${name}`;
  return (
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <input
        autoComplete="on"
        name={name}
        value={value}
        className="field-input"
        
        type={type}
        placeholder={placeholder}
        onChange={(event) => {
          changeValue(event.target.value);
        }}
      />
      <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label>
    </div>
  );
};

Field.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
};

Field.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
};

export default Field;
