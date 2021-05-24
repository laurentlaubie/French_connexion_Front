import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// == import local
import LogOut from 'src/containers/LogOut';
import ProfilePrincipalInfos from 'src/components/ProfilePrincipalInfos';
import ProfilePersonalInfos from 'src/components/ProfilePersonalInfos';
import ProfileDescription from 'src/components/ProfileDescription';
import ProfileHobbies from 'src/components/ProfileHobbies';
import ProfileServices from 'src/components/ProfileServices';
import ProfileButton from 'src/components/ProfileButton';
import Loading from 'src/components/Loading';

// == import style
import './myProfile.scss';

const MyProfile = ({
  connectedUserData,
  openLogOut,
  redirect,
  isConnected,
  isMyProfileLoaded,
}) => {
  useEffect(() => {
    console.log('useEffect');
    redirect(false);
  }, []);

  let name = '';
  if (connectedUserData.nickname != null) {
    name = connectedUserData.nickname;
  }
  else {
    name = `${connectedUserData.firstname} ${connectedUserData.lastname}`;
  }

  return (
    <>
      {!isMyProfileLoaded && <Loading /> }

      {!isConnected && <Redirect to="/" />}

      {isMyProfileLoaded && isConnected && (

        <div className="myProfile">

          <LogOut />

          <h1 className="myProfile__title"> Mon profil </h1>

          <div className="myProfile__content">
            <div className="myProfile__content__left">
              <ProfilePrincipalInfos {...connectedUserData} name={name} isMyProfile />
              <ProfilePersonalInfos {...connectedUserData} />
            </div>
            <div className="myProfile__content__right">
              <ProfileDescription {...connectedUserData} isMyProfile name={name} />
              <ProfileHobbies {...connectedUserData} isMyProfile name={name} />
              <ProfileServices {...connectedUserData} isMyProfile name={name} />
            </div>
          </div>

          <div className="myProfile__buttons">
            <ProfileButton type="link" textContent="Me déconnecter" color="blue" linkTo="/mon-profil" onClick={openLogOut} />
            <ProfileButton type="hashlink" textContent="Devenez helper" color="red" linkTo="/mon-profil/modifier/#helperSection" />
            <ProfileButton type="link" textContent="Modifier mon profil" color="red" linkTo="/mon-profil/modifier" />
          </div>
        </div>
      )}
    </>
  );
};

// MyProfile.propTypes = {
//   connectedUserData: PropTypes.objectOf(
//     PropTypes.shape(
//       {
//         nickname: PropTypes.string.isRequired,
//         firstname: PropTypes.string.isRequired,
//         lastname: PropTypes.string.isRequired,
//       },
//     ).isRequired,
//   ).isRequired,
//   openLogOut: PropTypes.func.isRequired,
//   redirect: PropTypes.func.isRequired,
//   isConnected: PropTypes.bool.isRequired,
//   isMyProfileLoaded: PropTypes.bool.isRequired,
// };

export default MyProfile;
