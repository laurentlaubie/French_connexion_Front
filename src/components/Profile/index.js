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
import BecomeHelperButton from 'src/components/BecomeHelperButton';
import ContactMe from 'src/components/ContactMe';

// == import style
import './profile.scss';

const Profile = ({ isMyProfile, connectedUserInfos, otherUserInfos }) => {
  let userInfos = null;
  // console.log(connectedUserInfos);
  if (isMyProfile) {
    userInfos = { ...connectedUserInfos };
    // console.log(userInfos);
  } else {
    userInfos = { ...otherUserInfos };
    // console.log(userInfos);
  }

  return (
    <div className="profile">
      <div className="profile__title"> {isMyProfile ? 'Mon profil' : 'Le nom du helpeur/voyageur'} </div>
      <div className="profile__content">
        <div className="profile__content__left">
          <ProfilePrincipalInfos {...userInfos} />
          { (userInfos.isHelper) && <ProfileMap {...userInfos} /> }
          { isMyProfile && <ProfilePersonalInfos {...userInfos} /> }
          { !isMyProfile && <ContactMe /> }
        </div>

        <div className="profile__content__right">
          <ProfileDescription {...userInfos} />
          <ProfileHobbies {...userInfos} />
          {(userInfos.isHelper) && <ProfileServices {...userInfos} />}
        </div>

      </div>
      <div className="profile__button">
        { isMyProfile && <ModifyButton />}
        { isMyProfile && !(userInfos.isHelper) && <BecomeHelperButton />}
      </div>
    </div>
  );
};

Profile.propTypes = {
  isMyProfile: PropTypes.bool.isRequired,
  isHelper: PropTypes.bool.isRequired,
  connectedUserInfos: PropTypes.shape(
    {
      isHelper: PropTypes.bool.isRequired,
    },
  ).isRequired,
  otherUserInfos: PropTypes.shape(
    {
      isHelper: PropTypes.bool.isRequired,
    },
  ).isRequired,


};

export default Profile;
