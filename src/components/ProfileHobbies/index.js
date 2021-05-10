/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

// import './profileHobbies.scss';

const ProfileHobbies = ({ hobbiesList }) => (

  <div className="profileHobbies card">
    <div className="card__title">Mes centres d'interets </div>
    <div className="card__list">
      {hobbiesList.map((hobby) => (
        <div className="card__item">{hobby}</div>
      ))}
    </div>
  </div>

);

ProfileHobbies.propTypes = {
  hobbiesList: PropTypes.string.isRequired,
};

export default ProfileHobbies;
