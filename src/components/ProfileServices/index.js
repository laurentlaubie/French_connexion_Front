/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import './profileServices.scss';

const ProfileServices = ({ services }) => (

  <div className="card profileServices">
    <div className="card__title">Mes services </div>
    <div className="card__list">
      {services.map((service) => (
        <div className="card__item card__item--red">{service.name}</div>
      ))}
    </div>
  </div>

);

ProfileServices.propTypes = {
  servicesList: PropTypes.array.isRequired,
};

export default ProfileServices;
