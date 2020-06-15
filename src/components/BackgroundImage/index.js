import React from 'react';
import PropTypes from 'prop-types';

const BackgroundImage = ({ firstColor, lastColor }) => (
  <div id="colors">
    <span
      // pour mettre des style inline dans du JSX on doit passer un objet de styles
      style={{
        color: firstColor,
      }}
    >
      {firstColor}
    </span>
    -
    <span
      style={{
        color: lastColor,
      }}
    >
      {lastColor}
    </span>
  </div>
);


BackgroundImage.propTypes = {
  randomBackgroundImage: PropTypes.string.isRequired,
};


export default BackgroundImage;
