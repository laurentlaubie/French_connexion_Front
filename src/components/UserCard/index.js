import React from 'react';
import { Link } from 'react-router-dom';

import './userCard.scss';

const UserCard = ({name, description, role, localisation, created_at, hobbys}) => (
  <Link to="/notre-reseau/utilisateur">
    <div className="userCard">
      <div className="userCard__flexCard">
        <div className="userCard__leftCard">
          <div className="userCard__name">{name}</div>
          <div className="userCard__localisation">{localisation}</div>
          <div className="userCard__picture" />
        </div>
        <div className="userCard__rightCard">
          <div className="userCard__role">{role}</div>
          <div className="userCard__created_At">{created_at}</div>
          <div className="userCard__description">{description}</div>
        </div>
      </div>
      <div className="userCard__hobbys">
        <ul>
          <li>
            {hobbys.map((hobby) => <div className="userCard__hobby" key={hobby}>
            {hobby}
            </div> 
          )}
          </li>
        </ul>
      </div>
    </div>
  </Link>
);

export default UserCard;
