/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

// import './profileHobbies.scss';

const ProfileHobbies = ({ hobbies }) => {
  console.log(hobbies);
  return (

  <div className="profileHobbies card">
    <div className="card__title">Mes centres d'interets </div>
    <div className="card__list">
      {hobbies.map((hobby) => (
        <div className="card__item card__item--grey">{hobby.name}</div>
      ))}
    </div>
  </div>

);
    };

ProfileHobbies.propTypes = {
  hobbies: PropTypes.array.isRequired,
};

export default ProfileHobbies;
