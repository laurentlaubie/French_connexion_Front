import React from 'react';
import defaultAvatar from 'src/assets/images/defaultAvatar.jpg';

import PropTypes from 'prop-types';

import './userReview.scss';

const UserReview = ({ id, avatar, nickname, cities }) => (
  <div className="userReview">
    <img className="userReview__image" src={`http://ec2-34-239-254-34.compute-1.amazonaws.com/images/avatars/${avatar}`} alt={`Avatar de ${nickname}`} />
    <div className="userReview__text">
      <p className="userReview__text__username">{nickname}</p>
      <p className="userReview__text__city">  {cities.name} </p>
      <p className="userReview__text__country"> {cities.country.name}</p>
    </div>
  </div>
);

UserReview.propTypes = {
  avatar: PropTypes.string,
  nickname: PropTypes.string.isRequired,
  cities: PropTypes.shape(
    {
      name: PropTypes.string.isRequired,
      country: PropTypes.shape(
        {
          name: PropTypes.string.isRequired,
        },
      ).isRequired,
    },
  ).isRequired,
};

UserReview.defaultProps = {
  avatar: defaultAvatar,
};

export default UserReview;
