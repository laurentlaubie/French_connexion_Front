import React from 'react';

import PropTypes from 'prop-types';

import './userReview.scss';

const UserReview = ({ avatar, username, city, country }) => (
  <div className="userReview">
    <img className="userReview__image" src={avatar} alt={`Avatar de ${username}`} />
    <div className="userReview__text">
      <p className="userReview__text__username">{username}</p>
      <p className="userReview__text__city"> {city}</p>
      <p className="userReview__text__country"> {country}</p>

    </div>
  </div>
);

UserReview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  // comment: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default UserReview;
