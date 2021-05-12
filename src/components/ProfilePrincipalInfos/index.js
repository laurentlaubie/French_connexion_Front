import React from 'react';
import PropTypes from 'prop-types';

import question from 'src/assets/images/question.png';
import hands from 'src/assets/images/hands.png';
import defaultAvatar from 'src/assets/images/defaultAvatar.jpg';
import ProfileLocalisation from 'src/components/ProfileLocalisation';


// == import style
import './profilePrincipalInfos.scss';

const ProfilePrincipalInfos = ({
  isMyProfile, helper, nickname, createdAt, avatar, cities, firstname, lastname,
}) => (

  <div className="profilePrincipalInfos">
    <div className="profilePrincipalInfos__status">
      <div className={helper ? 'profilePrincipalInfos__status__name--helper' : 'hidden'}>
        HELPER
        <img className="profilePrincipalInfos__status__logo--helper" src={hands} alt="Logo du helpeur" />
      </div>
      <div className={(!helper && isMyProfile) ? 'profilePrincipalInfos__status__name' : 'hidden'}>
        <a href="mon-profil/modifier"> Je deviens helper</a>
        <img className="profilePrincipalInfos__status__logo" src={question} alt="Logo question" />
      </div>

    </div>
    <div className="profilePrincipalInfos__username">{nickname != null ? nickname : `${firstname} ${lastname}`}</div>
    <div className="profilePrincipalInfos__date"> Membre depuis {createdAt} </div>
    <div className="profilePrincipalInfos__image">
      <img className="jose" alt="image__profile" src={avatar != null ? avatar : defaultAvatar} />
    </div>
    <div className={isMyProfile ? 'profilePrincipalInfos__update' : 'hidden'}>Mettre à jour ma photo</div>
    <ProfileLocalisation {...cities} />
  </div>

);

ProfilePrincipalInfos.propTypes = {
  isMyProfile: PropTypes.bool.isRequired,
  helper: PropTypes.bool.isRequired,
  nickname: PropTypes.string,
  // id: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  // status: PropTypes.string.isRequired,
  // cities: PropTypes.array({
  //   name: PropTypes.string.isRequired,
  //   longitude: PropTypes.number.isRequired,
  //   latitude: PropTypes.number.isRequired,
  // }),
  // country: PropTypes.string,
  // createdAt: PropTypes.string.isRequired,
  // firstname: PropTypes.string.isRequired,
  // lastname: PropTypes.string.isRequired,
};

ProfilePrincipalInfos.defaultProps = {
  avatar: defaultAvatar,
  nickname: '',
  // cities: [],
  // country: [],
};

export default ProfilePrincipalInfos;
