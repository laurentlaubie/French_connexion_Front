import React from 'react';
import PropTypes from 'prop-types';

// == import local
import ProfilePrincipalInfos from 'src/components/ProfilePrincipalInfos';
import ProfileMap from 'src/components/ProfileMap';
import ProfilePersonalInfos from 'src/components/ProfilePersonalInfos';
import ProfileDescription from 'src/components/ProfileDescription';
import ProfileHobbies from 'src/components/ProfileHobbies';
import ProfileServices from 'src/components/ProfileServices';
import ModifyButton from 'src/components/ModifyButton';
import hands from 'src/assets/images/hands.png';
import BecomeHelperButton from 'src/components/BecomeHelperButton';
import ContactMe from 'src/components/ContactMe';


import question from 'src/assets/images/question.png';

// == import style
import './profile.scss';

const Profile = ({ isMyProfile, isHelper, connectedUserInfos }) => (

  <div className="profile">
    <div className="profile__title"> {isMyProfile ? 'Mon profil' : 'Le nom du helpeur/voyageur'} </div>
    <div className="profile__content">
      <div className="profile__content__left">
        <ProfilePrincipalInfos {...connectedUserInfos} />
        { isHelper && <ProfileMap /> }
        { isMyProfile && <ProfilePersonalInfos /> }
        { !isMyProfile && <ContactMe /> }
      </div>

      <div className="profile__content__right">
        <ProfileDescription />
        <ProfileHobbies />
        {(connectedUserInfos.isHelper) && <ProfileServices />}
      </div>

    </div>
    <div className="profile__button">
      { isMyProfile && <ModifyButton />}
      { isMyProfile && !(connectedUserInfos.isHelper) && <BecomeHelperButton />}
    </div>
  </div>
);

Profile.propTypes = {
  isMyProfile: PropTypes.bool.isRequired,
  isHelper: PropTypes.bool.isRequired,
  connectedUserInfos: PropTypes.shape(
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

};

export default Profile;
