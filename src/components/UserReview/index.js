import React from 'react';
import defaultAvatar from 'src/assets/images/defaultAvatar.jpg';


import PropTypes from 'prop-types';

import './userReview.scss';

const UserReview = ({ id, avatar, nickname, cities,  }) => (
  <div className="userReview">
    <img className="userReview__image" src={avatar ? avatar : defaultAvatar} alt={`Avatar de ${nickname}`} />
    <div className="userReview__text">
      <p className="userReview__text__username">{nickname}</p>
      
      { cities ? <> <p className="userReview__text__city">  {cities.name} </p> 
      <p className="userReview__text__country"> {cities.country.name}</p> </> : <> <p className="userReview__text__city">Non renseigné</p> <p className="userReview__text__country">Non renseigné</p> </> }
      
      
      
      
      

    </div>
  </div>
);

UserReview.propTypes = {
  avatar: PropTypes.string,
  nickname: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf( 
    PropTypes.shape(
      {
        name: PropTypes.string.isRequired,
      },
    ),
  ),
  //country: PropTypes.string.isRequired,
};
UserReview.defaultProps = {
  avatar: defaultAvatar,
};

export default UserReview;
