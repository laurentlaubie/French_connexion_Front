import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useLocation } from 'react-router-dom';

// == import local
import LogOut from 'src/containers/LogOut';
import ProfilePrincipalInfos from 'src/components/ProfilePrincipalInfos';
import ProfilePersonalInfos from 'src/components/ProfilePersonalInfos';
import ProfileDescription from 'src/components/ProfileDescription';
// import ProfileHobbies from 'src/components/ProfileHobbies';
// import ProfileServices from 'src/components/ProfileServices';
// import ModifyButton from 'src/components/ModifyButton';
// import BecomeHelperButton from 'src/components/BecomeHelperButton';
import ContactMe from 'src/components/ContactMe';
import ProfileButton from 'src/components/ProfileButton';


// == import style
import './profile.scss';

const Profile = ({ isMyProfile, loadUserProfile, userInfos, connectedUserData, openLogOut }) => {
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

  if (isMyProfile) {
    userId = connectedUserData.id;
    console.log(userId);
    console.log('je suis dans monProfile');
  }
  else {
    userId = params.id;
  }

  const pathName = useLocation().pathname;
  console.log(pathName);

  // on charge les infos du user à chaque fois que le pathname est modifié
  useEffect(() => {
    loadUserProfile(userId);
    console.log('l\'url a changé');
  }, [pathName]);

  return (
    <div className="profile">
      <LogOut />
      <h1 className="profile__title"> {isMyProfile ? 'Mon profil' : 'Le nom du helpeur/voyageur'} </h1>
      <div className="profile__content">
        <div className="profile__content__left">
          <ProfilePrincipalInfos {...userInfos} isMyProfile={isMyProfile} />
          { isMyProfile && <ProfilePersonalInfos {...userInfos} /> }
          { !isMyProfile && <ContactMe /> }
        </div>

        <div className="profile__content__right">
          <ProfileDescription {...userInfos} />
          {/* <ProfileHobbies {...userInfos} /> */}
          {/* {(userInfos.isHelper) && <ProfileServices {...userInfos} />} */}
        </div>

      </div>
      <div className="profile__buttons">
        {/* { isMyProfile && <ModifyButton />}
        { isMyProfile && !(userInfos.helper) && <BecomeHelperButton />} */}
        { isMyProfile && <ProfileButton textContent="Me déconnecter" color="blue" linkTo="/mon-profil" onClick={openLogOut} />}
        { isMyProfile && <ProfileButton textContent="Devenez helper" color="red" linkTo="/mon-profil/modifier" />}
        { isMyProfile && <ProfileButton textContent="Modifier mon profil" color="red" linkTo="/mon-profil/modifier" />}

      </div>
    </div>
  );
};

Profile.propTypes = {
  isMyProfile: PropTypes.bool.isRequired,
  userInfos: PropTypes.arrayOf(
    PropTypes.shape(
      {
        helper: PropTypes.bool.isRequired,
      },
    ).isRequired,
  ).isRequired,
  loadUserProfile: PropTypes.func.isRequired,
  connectedUserData: PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
    },
  ).isRequired,
  openLogOut: PropTypes.func.isRequired,

};

export default Profile;
