import React from 'react';
import PropTypes from 'prop-types';

// == import local
import ProfileDescription from 'src/components/ProfilDescription';
import ContactMe from 'src/components/ContactMe';
import UserInfos from 'src/components/UserInfos';
import ProfileServices from 'src/components/ProfileServices';
import ResidentMap from 'src/components/ResidentMap';
import ModifyButton from 'src/components/ModifyButton';
import hands from 'src/assets/images/hands.png';
import BecomeHelperButton from 'src/components/BecomeHelperButton';

import question from 'src/assets/images/question.png';

// == import style
import './profile.scss';

const Profile = ({ isMyProfile, isHelper, connectedUserInfos }) => (

  <div className="profile">
    <div className="profile__title"> {isMyProfile ? 'Mon profil' : 'Le nom du helpeur/voyageur'} </div>
    <div className="profile__content">
      <div className="profile__content__left">
        <div className="member">
          <div className="member__status">
            <div className={isHelper ? 'member__status__name--helper' : 'hidden'}>
              HELPER
              <img className="member__status__logo--helper" src={hands} alt="Logo du helpeur" />
            </div>
            <div className={(!isHelper && isMyProfile) ? 'member__status__name' : 'hidden'}>
              <a href="mon-profil/modifier"> Je deviens helper</a>
              <img className="member__status__logo" src={question} alt="Logo question" />
            </div>

          </div>
          <div className="member__username">{connectedUserInfos.username}</div>
          <div className="member__date"> Membre depuis {connectedUserInfos.createdAt} </div>
          <div className="member__image">
            <img className="jose" alt="image__profile" src="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg" />
          </div>
          <div className={isMyProfile ? 'member__update' : 'hidden'}>Mettre à jour ma photo</div>
          <div className={!isHelper ? 'member__localisation' : 'hidden'}>`{connectedUserInfos.city}, {connectedUserInfos.country}`</div>
        </div>
        { isHelper && <ResidentMap /> }
        { isMyProfile && <UserInfos /> }
        { !isMyProfile && <ContactMe /> }
      </div>

      <div className="profile__content__right">
        <ProfileDescription />
        {isHelper && <ProfileServices />}
      </div>
    </div>
    { isMyProfile && <ModifyButton />}
    { isMyProfile && !isHelper && <BecomeHelperButton />}
  </div>
);

Profile.propTypes = {
  isMyProfile: PropTypes.bool.isRequired,
  isHelper: PropTypes.bool.isRequired,
  connectedUserInfos: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        isHelper: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        biography: PropTypes.string.isRequired,
        shortDescription: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        createdAd: PropTypes.string.isRequired,
      },
    ).isRequired,
  ).isRequired,

};

export default Profile;
