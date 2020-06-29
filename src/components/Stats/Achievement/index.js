import React from 'react';

const Achievement = ({ icon, phrase }) => (
  <img
    className="Achievement-img"
    src={icon}
    alt={phrase}
  />
);

export default Achievement;
