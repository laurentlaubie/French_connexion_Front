/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import store from 'src/store';

import './modifyMyAvatar.scss';

const ModifyMyAvatar = ({ id, saveAvatar }) => {
  // const [seeAvatar, setAvatar] = useState("");

  const [seeAvatar, setAvatar] = useState('');

  const handleChange = (evt) => {
    console.log(evt.target.files[0]);
    setAvatar(evt.target.files[0]);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(seeAvatar);

    const fd = new FormData();
    fd.append('avatar', seeAvatar);

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
        // const errorStatus = error.response.status;
        // if (errorStatus === 401) {
        //   window.location.href = '/403';
        // }
      });
  };

  return (
    <div className="modifyMyAvatar">
      <form onSubmit={handleSubmit}>
        <input type="file" name="avatar" onChange={handleChange} />
        <button type="submit"> clic ici</button>
      </form>
    </div>
  );
};

ModifyMyAvatar.propTypes = {
  id: PropTypes.number.isRequired,
  saveAvatar: PropTypes.func.isRequired,
};

export default ModifyMyAvatar;
