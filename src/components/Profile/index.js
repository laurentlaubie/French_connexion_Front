import React, { useEffect } from 'react';
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

const Profile = ({ isMyProfile, loadUserProfile, userInfos }) => {
  // let userInfos = null;
  // // console.log(connectedUserInfos);
  // if (isMyProfile) {
  //   userInfos = { ...connectedUserInfos };
  //   // console.log(userInfos);
  // } else {
  //   userInfos = { ...otherUserInfos };
  //   // console.log(userInfos);
  // }

  useEffect(
    loadUserProfile,
    [],
  );

  return (
    <div className="profile">
      <div className="profile__title"> {isMyProfile ? 'Mon profil' : 'Le nom du helpeur/voyageur'} </div>
      <div className="profile__content">
        <div className="profile__content__left">
          <ProfilePrincipalInfos {...userInfos} isMyProfile={isMyProfile} />
          { (userInfos.helper) && <ProfileMap {...userInfos} /> }
          { isMyProfile && <ProfilePersonalInfos {...userInfos} /> }
          { !isMyProfile && <ContactMe /> }
        </div>

        <div className="profile__content__right">
          <ProfileDescription {...userInfos} />
          {/* <ProfileHobbies {...userInfos} /> */}
          {/* {(userInfos.isHelper) && <ProfileServices {...userInfos} />} */}
        </div>

      </div>
      <div className="profile__button">
        { isMyProfile && <ModifyButton />}
        { isMyProfile && !(userInfos.helper) && <BecomeHelperButton />}
      </div>
    </div>
  );
};

Profile.propTypes = {
  isMyProfile: PropTypes.bool.isRequired,
  userInfos: PropTypes.shape(
    {
      helper: PropTypes.bool.isRequired,
    },
  ).isRequired,
  loadUserProfile: PropTypes.func.isRequired,

};

export default Profile;
