import React from 'react';
import ProfileCard from 'src/components/ProfileCard';
import './usersCards.scss';

const UsersCards = ({networkProfiles}) =>
(
  <div className="usersCards">
    <h1 className="usersCards__title">Notre réseau</h1>
    <ul className="usersCards__list">
      <li>
        {networkProfiles.map((Profile) => <ProfileCard key={Profile.id} {...Profile} />)}
      </li>
    </ul>
  </div>
  );

export default UsersCards;
