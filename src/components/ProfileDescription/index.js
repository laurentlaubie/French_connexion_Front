/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const ProfileDescription = ({ biography, name }) => (

  <div className="profileDescription card">
    <div className="card__title"> À propos de moi </div>
    <div className="card__text"> {biography != null ? biography : `${name} n'a pas rempli sa biographie.` } </div>
  </div>

);

ProfileDescription.propTypes = {
  biography: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ProfileDescription;
