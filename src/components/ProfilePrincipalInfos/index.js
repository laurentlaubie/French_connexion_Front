import React from 'react';
import PropTypes from 'prop-types';

// // == import local

import question from 'src/assets/images/question.png';
import hands from 'src/assets/images/hands.png';

// == import style
import './profilePrincipalInfos.scss';

const ProfilePrincipalInfos = ({ isMyProfile, isHelper, username, createdAt, avatar, city, country }) => (

  <div className="profilePrincipalInfos">
    <div className="profilePrincipalInfos__status">
      <div className={isHelper ? 'profilePrincipalInfos__status__name--helper' : 'hidden'}>
        HELPER
        <img className="profilePrincipalInfos__status__logo--helper" src={hands} alt="Logo du helpeur" />
      </div>
      <div className={(!isHelper && isMyProfile) ? 'profilePrincipalInfos__status__name' : 'hidden'}>
        <a href="mon-profil/modifier"> Je deviens helper</a>
        <img className="profilePrincipalInfos__status__logo" src={question} alt="Logo question" />
      </div>

    </div>
    <div className="profilePrincipalInfos__username">{username}</div>
    <div className="profilePrincipalInfos__date"> Membre depuis {createdAt} </div>
    <div className="profilePrincipalInfos__image">
      <img className="jose" alt="image__profile" src={avatar} />
    </div>
    <div className={isMyProfile ? 'profilePrincipalInfos__update' : 'hidden'}>Mettre à jour ma photo</div>
    <div className={!isHelper ? 'profilePrincipalInfos__localisation' : 'hidden'}>`{city}, {country}`</div>
  </div>

);

ProfilePrincipalInfos.propTypes = {
  isMyProfile: PropTypes.bool.isRequired,
  isHelper: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  // id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  // status: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default ProfilePrincipalInfos;
