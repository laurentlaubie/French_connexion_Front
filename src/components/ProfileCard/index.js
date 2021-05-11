import React from 'react';
import { Link } from 'react-router-dom';

import './profileCard.scss';
// import profilePicture from 'src/assets/pictures/profile.png';

const ProfileCard = ({name,description,role,localisation,created_at,hobbys}) => 
{
// console.log(name,description,role,localisation,created_at,hobbys);

  return (
    <Link to="/notre-reseau/utilisateur">
      <div className="profileCard">
        <div className="profileCard__FlexCard">
          <div className="profileCard__LeftCard">
             <div className="profileCard__Name">{name}</div>
            <div className="profileCard__Localisation">{localisation}</div>
            <div className="profileCard__Picture"></div>
          </div>
          <div className="profileCard__RightCard">
            <div className="profileCard__Role">{role}</div>
            <div className="profileCard__Created_At">{created_at}</div>
            <div className="profileCard__Description">{description}</div>
          </div>
        </div>
        <div className="profileCard__Hobbys">
          <ul>
            <li>
            {hobbys.map((hobby) => <div className="profileCard__Hobby" key={hobby}>
              {hobby}
            </div> 
            )}
            </li>
          </ul>
        </div>
      </div>
    </Link>
  )
}

export default ProfileCard;
