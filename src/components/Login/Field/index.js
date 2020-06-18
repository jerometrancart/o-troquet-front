import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Field = ({
  value,
  changeValue,
  type,
  placeholder,
  name,
}) => (
  <input
    name={name}
    value={value}
    className="field"
    type={type}
    placeholder={placeholder}
    onChange={(event) => {
      changeValue(event.target.value);
    }}
  />
);

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
