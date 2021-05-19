import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == import local
import LogOut from 'src/containers/LogOut';
import ProfilePrincipalInfos from 'src/components/ProfilePrincipalInfos';
import ProfilePersonalInfos from 'src/components/ProfilePersonalInfos';
import ProfileDescription from 'src/components/ProfileDescription';
import ProfileButton from 'src/components/ProfileButton';
import Loading from 'src/components/Loading';

// == import style
import './myProfile.scss';

const MyProfile = ({ connectedUserData, isLoading, openLogOut }) => {
  // console.log(connectedUserData);
  // const connectedUserId = connectedUserData.id;
  // console.log(connectedUserId);

  // useEffect(() => {
  //   loadUserProfile(connectedUserId);
  //   console.log(userInfos);
  // }, [connectedUserData]);

  return (
    // <>
    //   {isLoading && (<Loading />)}
    //   {!isLoading && (

        <div className="myProfile">
          <LogOut />
          <h1 className="myProfile__title"> Mon profil </h1>

          <div className="myProfile__content">
            <div className="myProfile__content__left">
              <ProfilePrincipalInfos {...connectedUserData} isMyProfile />
              <ProfilePersonalInfos {...connectedUserData} />
            </div>
            <div className="myProfile__content__right">
              <ProfileDescription {...connectedUserData} />
            </div>
          </div>

          <div className="myProfile__buttons">
            <ProfileButton textContent="Me déconnecter" color="blue" linkTo="/mon-profil" onClick={openLogOut} />
            <ProfileButton textContent="Devenez helper" color="red" linkTo="/mon-profil/modifier" />
            <ProfileButton textContent="Modifier mon profil" color="red" linkTo="/mon-profil/modifier" />
          </div>
        </div>
      // )}
  //   </>
  );
};

MyProfile.propTypes = {
  connectedUserData: PropTypes.object.isRequired,
  userInfos: PropTypes.object.isRequired,
  openLogOut: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadUserProfile: PropTypes.func.isRequired,
};

export default MyProfile;
