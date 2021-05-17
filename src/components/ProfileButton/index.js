import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == import style 
import './profileButton.scss';

const ProfileButton = ({ textContent, color, linkTo, onClick }) => (

  // ----- helper Button -----
  <Link to={linkTo} className={`profileButton profileButton--${color}`} onClick={onClick}>
    <div className="profileButton__textContent">{textContent}</div>
  </Link>
);

ProfileButton.propTypes = {
  textContent: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProfileButton;
