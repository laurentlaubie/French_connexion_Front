import React from 'react';
import PropTypes from 'prop-types';

// == import local
import ProfileDescription from 'src/components/ProfilDescription';
import ContactMe from 'src/components/ContactMe';
import UserInfos from 'src/components/UserInfos';
import ProfileServices from 'src/components/ProfileServices';
import ResidentMap from 'src/components/ResidentMap';
import ModifyButton from 'src/components/ModifyButton';
import HelperButton from 'src/components/HelperButton';

// == import style
import './profile.scss';

const Profile = ({ isMyProfile, isHelper }) => (

  <div className="profile">
    { isMyProfile && !isHelper && <HelperButton /> }
    <div className="profile__title"> {isMyProfile ? 'Mon profil' : 'Le nom du helpeur/voyageur'} </div>
    <div className="profile__content">
      <div className="profile__content__left">
        <div className="member">
          <div className="member__name">Jean-José</div>
          <div className="member__date"> Membre depuis Mars 2018 </div>
          <div className="member__image" />
          <div className={isMyProfile ? 'member__update' : 'member__update member__update--hidden'}>Mettre à jour votre photo</div>
          <div className="member__localisation">Massy-Palaiseau, France</div>
        </div>
        { !isMyProfile && <ContactMe /> }
        { isHelper && <ResidentMap /> }
        { isMyProfile && <UserInfos /> }
        <ModifyButton />
      </div>
      <div className="profile__content__right">
        <ProfileDescription />
        {isHelper && <ProfileServices />}
      </div>
    </div>

  </div>
);

Profile.propTypes = {
  isMyProfile: PropTypes.bool.isRequired,
  isHelper: PropTypes.bool.isRequired,
};

export default Profile;
