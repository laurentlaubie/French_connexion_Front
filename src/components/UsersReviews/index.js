import React from 'react';
import PropTypes from 'prop-types';

import './usersReviews.scss';


const UsersReviews = ({ users }) => (
  <div className="usersReviews">
    <h3> Nos utilisateurs ont aimés </h3>
    <div className="usersReviews__list">
      {users.map((user) => (
        <div className="usersReviews__item">
          <img className="usersReviews__item__image" src={user.avatar} alt={`Avatar de ${user.username}`} />
          <p className="usersReviews__item__name"> {user.username} </p>
          <p className="usersReviews__item__comment"> {user.comment}</p>
        </div>

      ))}

    </div>
  </div>
);

UsersReviews.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
      },
    ),
  ).isRequired,
};

export default UsersReviews;
