/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const ProfileDescription = ({ biography, nickname, firstname, lastname }) => {
  let name = '';
  if (nickname != null) {
    name = nickname;
  }
  else {
    name = firstname + lastname;
  }

  return (

    <div className="profileDescription card">
      <div className="card__title"> À propos de moi </div>
      <div className="card__text"> {biography != null ? biography : `${name} n'a pas rempli sa biographie.` } </div>
    </div>

  );
}

ProfileDescription.propTypes = {
  biography: PropTypes.string,
};

ProfileDescription.defaultProps = {
  biography: '',
};

export default ProfileDescription;
