import React from 'react';
import PropTypes from 'prop-types';

const Member = ({ img, post, text, name }) => (
  <div className="team--member">
    <img
      className="team--icon"
      alt="un des membres"
      src={img}
    />
    <h2 className="team--name">{name}</h2>
    <p className="team--role">{post}</p>
    <p className="team--text">{text}</p>
  </div>
);

Member.propTypes = {
  img: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Member;
