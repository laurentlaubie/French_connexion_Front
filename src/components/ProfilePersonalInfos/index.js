import React from 'react';
import PropTypes from 'prop-types';

// == import style
import './profilePersonalInfos.scss';

const ProfilePersonalInfos = ({
  firstname, lastname, email, cities, country, phoneNumber,
}) => {
  let localisation='';
  if (cities !== null){
    localisation = `${cities.name}, ${cities.country.frenchName}`;
  };
  console.log(localisation);

  return(

    <div className="profilePersonalInfos">
      <div className="profilePersonalInfos__title"> Mes informations personnelles </div>
      <div className="profilePersonalInfos__list">
        <div className="profilePersonalInfos__item">{firstname} {lastname}</div>
        <div className="profilePersonalInfos__item">{email}</div>
        <div className={cities != '' ? 'profilePersonalInfos__item' : 'hiden'}>{localisation}</div>
        <div className="profilePersonalInfos__item">{phoneNumber}</div>
      </div>
    </div>

  );
};

ProfilePersonalInfos.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cities: PropTypes.object.isRequired,
  country: PropTypes.object,
};

ProfilePersonalInfos.defaultProps = {
  phoneNumber: '',

};

export default ProfilePersonalInfos;
