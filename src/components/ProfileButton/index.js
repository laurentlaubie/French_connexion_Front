import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';

// == import style
import './profileButton.scss';

const ProfileButton = ({ type, textContent, color, linkTo, onClick }) => (

  <>
    {type === 'link' && (
      <Link to={linkTo} className={`profileButton profileButton--${color}`} onClick={onClick}>
        <div className="profileButton__textContent">{textContent}</div>
      </Link>
    )}

    {type === 'hashlink' && (
      <HashLink to={linkTo} className={`profileButton profileButton--${color}`} onClick={onClick}>
        <div className="profileButton__textContent">{textContent}</div>
      </HashLink>
    )}
  </>
);

ProfileButton.propTypes = {
  type: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProfileButton;
