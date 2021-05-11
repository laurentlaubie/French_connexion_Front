import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import UserCard from 'src/components/UserCard';
import './usersCards.scss';

const UsersCards = ({loadUsersCards, usersList}) => {
  useEffect(
    loadUsersCards,
    [],
  );

  return (
    <div className="usersCards">
      <h1 className="usersCards__title">Notre réseau</h1>
      <ul className="usersCards__list">
        {usersList.map((userCard) => <UserCard key={userCard.id} {...userCard} />)}
      </ul>
    </div>
  );
};

UsersCards.propTypes = {
  loadUsersCards: PropTypes.func.isRequired,
  usersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default UsersCards;
