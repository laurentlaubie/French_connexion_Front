/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

// import './profileHobbies.scss';

const ProfileHobbies = ({ hobbies, name }) => (

  <div className="profileHobbies card">
    <div className="card__title">Mes centres d'intérêts </div>
    <div className="card__list">
      <div className="card__list__emptyCard">
        {hobbies.length === 0 ? `${name} n'a pas précisé ses centres d'intérêts.` : ''}
      </div>
      {hobbies.map((hobby) => (
        <div className="card__item card__item--grey">{hobby.name}</div>
      ))}
    </div>
  </div>
);

ProfileHobbies.propTypes = {
  hobbies: PropTypes.array,
  name: PropTypes.string.isRequired,
};

ProfileHobbies.defaultProps = {
  hobbies: [],
};
export default ProfileHobbies;
