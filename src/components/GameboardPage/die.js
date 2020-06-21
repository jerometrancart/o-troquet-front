import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Die = () => (
  <div className="die">
    <ol className="die-list even-roll" data-roll="1" id="die-1">
      <li className="die-item" data-side="1">
        <span className="dot" />
      </li>
      <li className="die-item" data-side="2">
        <span className="dot" />
        <span className="dot" />
      </li>
      <li className="die-item" data-side="3">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </li>
      <li className="die-item" data-side="4">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </li>
      <li className="die-item" data-side="5">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </li>
      <li className="die-item" data-side="6">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </li>
    </ol>
  </div>

);

Die.propTypes = {
  children: PropTypes.node,
};

Die.defaultProps = {
  children: (
    <div className="die--children">Die children</div>
  ),
};

export default Die;
