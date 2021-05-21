/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import store from 'src/store';

import './modifyMyAvatar.scss';

const ModifyMyAvatar = ({ id, saveAvatar }) => {
  const handleChange = (evt) => {
    const file = evt.target.files[0];
    console.log(file);
    const fd = new FormData();
    fd.append('avatar', file);
    console.log(fd);

    console.log('avatarChangé');
    axios.post(`http://ec2-34-239-254-34.compute-1.amazonaws.com/api/v1/user/avatar/${id}`, fd, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        console.log(response);
        console.log('blablabla');
        store.dispatch(saveAvatar(response.data.avatar));
      }).catch((error) => {
        console.log('il y a une erreur');
        console.log(error);
      });
  };

  return (
    <div className="modifyMyAvatar">
      <label htmlFor="changeAvatar" className="modifyMyAvatar__loadButton">
        Modifier votre avatar
        <input className="hidden" type="file" id="changeAvatar" onChange={handleChange} />
      </label>
    </div>
  );
};

ModifyMyAvatar.propTypes = {
  id: PropTypes.number.isRequired,
  saveAvatar: PropTypes.func.isRequired,
};

export default ModifyMyAvatar;
