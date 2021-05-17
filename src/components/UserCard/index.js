import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultAvatar from 'src/assets/images/defaultAvatar.jpg';

import './userCard.scss';

const UserCard = ({
  id, firstname, lastname, nickname, helper, cities, avatar, createdAt, services, isConnected, openModal,
}) => {
  let localisation = '';
  if (cities != null) {
    localisation = `${cities.name} , ${cities.country.frenchName}`;
  }
  else {
    localisation = 'Non précisé';
  }

  return (
    
    <Link to={isConnected ? `/notre-reseau/utilisateur/${id}` : 'notre-reseau'} className="userCard" onClick={isConnected ? '' : openModal}>
      <div className="userCard__picture">
        <img alt={`Profil de ${firstname} ${lastname}`} src={avatar != null ? avatar : defaultAvatar} />
      </div>
      <div className="userCard__text">
        <div className={helper ? 'userCard__text__role' : 'userCard__text__role userCard__text__role--hidden'}> HELPER </div>

        <div className="userCard__text__name">{nickname != null ? nickname : `${firstname} ${lastname}`}</div>
        <div className="userCard__text__localisation">{localisation}</div>
        <div className="userCard__text__link"> Voir le profil de {nickname != null ? nickname : `${firstname} ${lastname}`} </div>
        {/* <div className="userCard__created_At">{created_at}</div> */}
        {/* <div className="userCard__text__hobbys">
          <ul>
            <li>
              {hobbys.map((hobby) => <div className="userCard__hobby" key={hobby}> {hobby} </div>)}
            </li>
          </ul>
        </div> */}
      </div>
    </Link>
    
  );
};

UserCard.propTypes = {
  id: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  nickname: PropTypes.string,
  helper: PropTypes.bool.isRequired,
  cities: PropTypes.shape(
    {
      name: PropTypes.string,
      country: PropTypes.shape(
        {
          frenchName: PropTypes.string.isRequired,
        },
      ),
    },
  ),
  isConnected: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
};

UserCard.defaultProps = {
  nickname: '',
  cities: '',
};

export default UserCard;
