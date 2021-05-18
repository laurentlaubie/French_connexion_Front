/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import UserCard from 'src/containers/UserCard';
import './usersCards.scss';

const UsersCards = ({loadUsersCards, usersList, RenderNewList, newUserList, inputValue, ChangeInputValue}) => {
  useEffect(
    loadUsersCards,
    [],
  );
  

  const handleInputValueChange = (evt) => {
    evt.preventDefault();
    // eslint-disable-next-line no-param-reassign
    inputValue = document.querySelector(".usersCards__search").value;
    console.log(inputValue.toLowerCase());

 
    let searchResult = usersList.filter((user) => user.nickname.toLowerCase().startsWith(inputValue.toLowerCase()));
    // if (searchResult.length === 0) {
    //   searchResult = usersList.filter((user) => (user.firstname.toLowerCase().startsWith(inputValue.toLowerCase()) && user.nickname === null) || user.lastname.toLowerCase() === inputValue.toLowerCase() && user.nickname === null);
    // }
    if (searchResult.length === 0) {
      searchResult = null;
    }
    console.log(searchResult);
    RenderNewList(searchResult);
    ChangeInputValue(inputValue);
  };

  return (
    <div className="usersCards">
      <h1 className="usersCards__title">Notre réseau</h1>
      <form className="usersCards__form" onSubmit={handleInputValueChange}>
        <input type="text" className="usersCards__search" placeholder="Nom / pays / ville" onChange={handleInputValueChange} />
        <input type="submit" className="usersCards__submit" value="" />
      </form>
      <ul className="usersCards__list">
        {newUserList ? newUserList.map((userCard) => <UserCard key={userCard.id} {...userCard} />) : usersList.map((userCard) => <UserCard key={userCard.id} {...userCard} />)}
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
