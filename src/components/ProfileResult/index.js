import React from 'react';
import { Link } from 'react-router-dom';

import './profileResult.scss';
import profile from 'src/assets/pictures/profile.png';

const ProfileResult = ({id,firstname,biography,nickname,lastname,avatar, isConnected, openModal}) => (
  <Link to={`/notre-reseau/utilisateur/${id}`} className="profileResult__Card" onClick={isConnected ? '' : openModal}>
  <div className="profileResult">
    <div className="profileResult__picture">
      <img src={`http://ec2-34-239-254-34.compute-1.amazonaws.com/images/avatars/${avatar}`} alt={`avatar de ${firstname} ${lastname}`} className="profileResult__Picture" />
    </div>
    <div className="profileResult__text">
      <div className="profileResult__name">{nickname != null ? nickname : `${firstname} ${lastname}`}</div>
      <div className="profileResult__biography">{biography}</div>
      <div className="profileResult__link"> Voir le profil </div>
    </div>
  </div>
  </Link>
);

export default ProfileResult;
