import React from 'react';
import BLACKJACK from 'src/assets/images/blackjack.png';

const Achievement = ({ icon, phrase }) => (
  <img
    className="Achievement-img"
    src={icon}
    alt={phrase}
  />
);

export default Achievement;
