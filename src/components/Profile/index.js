/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useLocation } from 'react-router-dom';

// == import local
import ProfilePrincipalInfos from 'src/components/ProfilePrincipalInfos';
import ProfileDescription from 'src/components/ProfileDescription';
// import ProfileHobbies from 'src/components/ProfileHobbies';
// import ProfileServices from 'src/components/ProfileServices';

// import ModifyButton from 'src/components/ModifyButton';
// import BecomeHelperButton from 'src/components/BecomeHelperButton';
import ContactMe from 'src/containers/ContactMe';
import ProfileButton from 'src/components/ProfileButton';

import Loading from 'src/components/Loading';

// == import style
import './profile.scss';


const Profile = ({ isMyProfile, loadUserProfile, userInfos, connectedUserData, openLogOut, isLoading, saveAvatar }) => {
  // let userInfos = null;
  // // console.log(connectedUserInfos);
  // if (isMyProfile) {
  //   userInfos = { ...connectedUserInfos };
  //   // console.log(userInfos);
  // } else {
  //   userInfos = { ...otherUserInfos };
  //   // console.log(userInfos);
  // }

  // let gaga = location.query.id; 
  // console.log(gaga);

  let userId = '';

  const params = useParams();
  const userId = params.id;
  const pathName = useLocation().pathname;
  console.log(pathName);
  // on charge les infos du user à chaque fois que le pathname est modifié
  useEffect(() => {
    loadUserProfile(userId);
    console.log('l\'url a changé');
  }, [pathName]);

  return (

    <>  {isLoading && (<Loading />)}
        {!isLoading && (

    <div className="profile">
      <LogOut />
      <h1 className="profile__title"> {isMyProfile ? 'Mon profil' : 'Le nom du helpeur/voyageur'} </h1>
      <div className="profile__content">
        <div className="profile__content__left">
          <ProfilePrincipalInfos {...userInfos} isMyProfile={isMyProfile} saveAvatar={saveAvatar} />
          { isMyProfile && <ProfilePersonalInfos {...userInfos} /> }
          { !isMyProfile && <ContactMe /> }
        </div>

        <div className="profile__content__right">
          <ProfileDescription {...userInfos} />
          {/* <ProfileHobbies {...userInfos} /> */}
          {/* {(userInfos.isHelper) && <ProfileServices {...userInfos} />} */}

        </div>
      )}
    </>
  );
};

Profile.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  userInfos: PropTypes.arrayOf(
    PropTypes.shape(
      {
        // helper: PropTypes.bool.isRequired,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        nickname: PropTypes.string,
      },
    ).isRequired,
  ).isRequired,
  loadUserProfile: PropTypes.func.isRequired,
};

// Profile.defaultProps = {
//   nickname: '',
// }

export default Profile;
