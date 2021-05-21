import React from 'react';

import PropTypes from 'prop-types';

import question from 'src/assets/images/question.png';
import hands from 'src/assets/images/hands.png';
import defaultAvatar from 'src/assets/images/defaultAvatar.jpg';
import ProfileLocalisation from 'src/components/ProfileLocalisation';
import ModifyMyAvatar from 'src/components/ModifyMyAvatar';

// == import style
import './profilePrincipalInfos.scss';

const ProfilePrincipalInfos = ({
  isMyProfile,
  helper,
  createdAt,
  avatar,
  cities,
  name,
}) => {
  let creationDate = new Date(createdAt);
  // console.log(creationDate);
  creationDate = `${creationDate.getDate()}/${creationDate.getMonth() + 1}/${creationDate.getFullYear()}`;
  // console.log(creationDate);

  return (
    <div className="profilePrincipalInfos">
      <div className="profilePrincipalInfos__status">
        <div className={helper ? 'profilePrincipalInfos__status__name--helper' : 'hidden'}>
          HELPER
          <img className="profilePrincipalInfos__status__logo--helper" src={hands} alt="Logo du helpeur" />
        </div>
        <div className="profilePrincipalInfos__username">{name}</div>
        <div className="profilePrincipalInfos__date"> {`Membre depuis le ${creationDate}`} </div>
        <div className="profilePrincipalInfos__image">
          <img alt={`Avatar de ${name}`} className={avatar === null ? 'hidden' : ''} src={`http://ec2-34-239-254-34.compute-1.amazonaws.com/images/avatars/${avatar}`} />
          <img alt="Avatar par défaut" className={avatar !== null ? 'hidden' : ''} src={defaultAvatar} />
        </div>
        {isMyProfile && <ModifyMyAvatar />}
        <ProfileLocalisation {...cities} isMyProfile={isMyProfile} />
      </div>
    </div>

  );
};

ProfilePrincipalInfos.propTypes = {
  isMyProfile: PropTypes.bool.isRequired,
  helper: PropTypes.bool.isRequired,
  cities: PropTypes.object,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  createdAt: PropTypes.string,
};

ProfilePrincipalInfos.defaultProps = {
  avatar: defaultAvatar,
  cities: '',
  createdAt: '2021-05-11T07:33:18+00:00',
};

export default ProfilePrincipalInfos;
