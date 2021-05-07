import React from 'react';
import PropTypes from 'prop-types';

// == import style
import './profilePersonalInfos.scss';

const ProfilePersonalInfos = ({
  firstName, lastName, email, cityName, countryName, phoneNumber,
}) => (

  <div className="profilePersonalInfos">
    <div className="profilePersonalInfos__title"> Mes informations personnelles </div>
    <div className="profilePersonalInfos__list">
      <div className="profilePersonalInfos__item">{firstName} {lastName}</div>
      <div className="profilePersonalInfos__item">{email}</div>
      <div className="profilePersonalInfos__item">{cityName}</div>
      <div className="profilePersonalInfos__item">{countryName}</div>
      <div className="profilePersonalInfos__item">{phoneNumber}</div>
    </div>
  </div>

);

ProfilePersonalInfos.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,

};

export default ProfilePersonalInfos;
