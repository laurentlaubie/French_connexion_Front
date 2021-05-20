/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import './profileServices.scss';

const ProfileServices = ({ services, name }) => (

  <div className="card profileServices">
    <div className="card__title">Mes services </div>
    <div className="card__list">
      <div className="card__list__emptyCard">
        {services.length === 0 ? `${name} n'a pas précisé de service dans son profil. Contactez ${name} pour en savoir plus !` : ''}
      </div>
      {services.map((service) => (
        <div className="card__item card__item--red">{service.name}</div>
      ))}
    </div>
  </div>

);

ProfileServices.propTypes = {
  services: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default ProfileServices;
