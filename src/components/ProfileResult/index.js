import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './profileResult.scss';

const ProfileResult = ({
  id,
  firstname,
  biography,
  nickname,
  lastname,
  avatar,
  isConnected,
  openModal,
}) => (
  <Link to={isConnected ? `/notre-reseau/utilisateur/${id}` : '/resultats'} className="profileResult__Card" onClick={isConnected ? '' : openModal}>
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

ProfileResult.propTypes = {
  id: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  biography: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isConnected: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ProfileResult;
