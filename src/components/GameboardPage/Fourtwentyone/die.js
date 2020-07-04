import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Die = ({ dieId, toggleBlock, blocked }) => {
  return (
    <div className="die" id={dieId}>
      {/* <ol className="die-list even-roll" data-roll="1" onClick={(evt) => toggleBlock(evt)}> */}
      <ol className={`die-list even-roll ${blocked ? 'blocked' : ''}`} data-roll="1" onClick={(evt) => toggleBlock(evt)}>
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
};

Die.propTypes = {
  dieId: PropTypes.string.isRequired,
  toggleBlock: PropTypes.func.isRequired,
  blocked: PropTypes.bool,
};

Die.defaultProps = {
  blocked: false,

};

export default Die;
