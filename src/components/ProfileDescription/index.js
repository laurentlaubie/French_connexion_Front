/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const ProfileDescription = ({ biography, name, isMyProfile }) => {
  let emptyMessage = `${name} n'a pas rempli sa biographie.`;
  if (isMyProfile) {
    emptyMessage = 'Vous n\'avez pas rempli votre biographie. Complétez votre profil !';
  }

  return (
    <div className="profileDescription card">
      <div className="card__title"> À propos de moi </div>
      <div className={biography !== null ? 'card__text' : 'hidden'}> {biography} </div>
      <div className="card__text"> {biography !== null ? biography : emptyMessage} </div>
    </div>
  );
};

ProfileDescription.propTypes = {
  biography: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isMyProfile: PropTypes.bool.isRequired,
};

export default ProfileDescription;
