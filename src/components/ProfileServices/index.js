/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const ProfileServices = ({ services, name, isMyProfile, helper }) => {
  let emptyMessage = `${name} n'a pas précisé de service dans son profil. Contactez ${name} pour en savoir plus !`;
  if (isMyProfile && !helper) {
    emptyMessage = 'Vous n\'êtes pas helper. Devenez helper et proposez des services aux voyageurs. Complétez votre profil !';
  }
  if (isMyProfile && helper) {
    emptyMessage = 'Vous ne proposez aucun service aux voyageurs. Complétez votre profil !';
  }

  return (
    <div className="card profileServices">
      <div className="card__title"> {isMyProfile ? 'Mon statut helper' : 'Mes services'} </div>
      <div className="card__list">
        <div className="card__list__emptyCard">
          {services.length === 0 ? emptyMessage : ''}
        </div>
        {services.map((service) => (
          <div className="card__item card__item--red">{service.name}</div>
        ))}
      </div>
    </div>
  );
};

ProfileServices.propTypes = {
  services: PropTypes.array,
  name: PropTypes.string.isRequired,
  isMyProfile: PropTypes.bool.isRequired,
  helper: PropTypes.bool.isRequired,

};

ProfileServices.defaultProps = {
  services: [],
};

export default ProfileServices;
