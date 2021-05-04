import React from 'react';
import PropTypes from 'prop-types';

import UserReview from 'src/components/UserReview';

import './usersReviews.scss';

const UsersReviews = ({ users }) => (
  <div className="usersReviews">
    <h3 className="usersReviews__title"> Notre communauté s'aggrandit </h3>
    <div className="usersReviews__list">
      {users.map((user) => (
        <UserReview key={user.id} {...user} />
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
