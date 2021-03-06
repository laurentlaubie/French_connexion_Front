/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useLocation, Redirect } from 'react-router-dom';

// == import local
import ProfilePrincipalInfos from 'src/components/ProfilePrincipalInfos';
import ProfileDescription from 'src/components/ProfileDescription';
import ProfileHobbies from 'src/components/ProfileHobbies';
import ProfileServices from 'src/components/ProfileServices';

// import ModifyButton from 'src/components/ModifyButton';
// import BecomeHelperButton from 'src/components/BecomeHelperButton';
import ContactMe from 'src/containers/ContactMe';
// import ProfileButton from 'src/components/ProfileButton';

import Loading from 'src/components/Loading';

// == import style
import './profile.scss';

const Profile = ({
  isConnected,
  loadUserProfile,
  userInfos,
  connectedUserData,
  openLogOut,
  saveAvatar,
  isLoading,
}) => {
  const params = useParams();
  const userId = params.id;
  const pathName = useLocation().pathname;
  console.log(pathName);
  // on charge les infos du user à chaque fois que le pathname est modifié
  useEffect(() => {
    loadUserProfile(userId);
    console.log('l\'url a changé');
  }, [pathName]);

  let name = '';
  if (userInfos.nickname != null) {
    name = userInfos.nickname;
  }
  else {
    name = `${userInfos.firstname} ${userInfos.lastname}`;
  }

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="profile">
          <h1 className="profile__title"> Profil de {name} </h1>
          <div className="profile__content">
            <div className="profile__content__left">
              <ProfilePrincipalInfos {...userInfos} name={name} isMyProfile={false} saveAvatar={saveAvatar} />
              <ContactMe />
            </div>

            <div className="profile__content__right">
              <ProfileDescription {...userInfos} name={name} />
              <ProfileHobbies {...userInfos} name={name} />
              {(userInfos.helper) && <ProfileServices {...userInfos} name={name} />}

            </div>
          </div>
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
