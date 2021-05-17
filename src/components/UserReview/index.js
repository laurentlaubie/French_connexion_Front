import React from 'react';

import PropTypes from 'prop-types';

import './userReview.scss';

const UserReview = ({ id, avatar, nickname, cities,  }) => (
  <div className="userReview">
    <img className="userReview__image" src={avatar} alt={`Avatar de ${nickname}`} />
    <div className="userReview__text">
      <p className="userReview__text__username">{nickname}</p>
       
       { {cities} !== null && (
      <p className="userReview__text__city">  {cities.name} </p>)}
      <p className="userReview__text__country"> {cities.country.name}</p>

    </div>
  </div>
);

UserReview.propTypes = {
  avatar: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  // comment: PropTypes.string.isRequired,
  //cities: PropTypes.arrayOf,
  //country: PropTypes.string.isRequired,
};

export default UserReview;
