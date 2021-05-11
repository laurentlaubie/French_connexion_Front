import React from 'react';
import UserCard from 'src/components/UserCard';
import './usersCards.scss';

const UsersCards = ({networkProfiles}) =>
(
  <div className="usersCards">
    <h1 className="usersCards__title">Notre réseau</h1>
    <ul className="usersCards__list">
      <li>
        {networkProfiles.map((Profile) => <UserCard key={Profile.id} {...Profile} />)}
      </li>
    </ul>
  </div>
  );

export default UsersCards;
