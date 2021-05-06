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
import hands from 'src/assets/images/hands.png';

// == import style
import './profile.scss';

const Profile = ({ isMyProfile, isHelper }) => (

  <div className="profile">
    { isMyProfile && !isHelper && <HelperButton /> }
    <div className="profile__title"> {isMyProfile ? 'Mon profil' : 'Le nom du helpeur/voyageur'} </div>
    <div className="profile__content">
      <div className="profile__content__left">
        <div className="member">
          <div className={isMyProfile ? 'member__status' : 'hidden'}>
            <p className="member__status__name"> HELPEUR </p>
            <img className="member__status__logo" src={hands} alt="Logo du helpeur" />
          </div>
          <div className="member__name">Jean-José</div>
          <div className="member__date"> Membre depuis Mars 2018 </div>
          <div className="member__image">
            <img className="jose" alt="image__profile" src="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg" />
          </div>
          <div className={isMyProfile ? 'member__update' : 'hidden'} >Mettre à jour votre photo</div>
          <div className={!isHelper ? 'member__localisation' : 'hidden'}>Massy-Palaiseau, France</div>
        </div>
        { isHelper && <ResidentMap /> }
        { !isMyProfile && <ContactMe /> }
        { isMyProfile && <UserInfos /> }
      </div>

      <div className="profile__content__right">
        <ProfileDescription />
        {isHelper && <ProfileServices />}
      </div>
    </div>
    { isMyProfile && <ModifyButton />}

  </div>
);

Profile.propTypes = {
  isMyProfile: PropTypes.bool.isRequired,
  isHelper: PropTypes.bool.isRequired,
};

export default Profile;
