import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const ModifyMyAvatar = ({ id, saveAvatar }) => {
  // const [seeAvatar, setAvatar] = useState("");

  const [seeAvatar, setAvatar] = useState("");

  const manageSubmit = (event) => {
    event.preventDefault();
    console.log(seeAvatar);

    const fd = new FormData();
    fd.append("avatar", seeAvatar);

    axios.post(`http://ec2-34-239-254-34.compute-1.amazonaws.com/api/v1/user/avatar/${id}`, fd, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        store.dispatch(saveAvatar(response.data.avatar));
      }).catch((error) => {
        const errorStatus = error.response.status;
        if (errorStatus === 401) {
          window.location.href = '/403';
        }

      })
  };
  
  return (
    <div className="modifyMyAvatar">
      <form onSubmit={manageSubmit} >
        <input type="file" name="avatar" onChange = {() => {setAvatar(event.target.files[0])}}/>
        <button type="submit"> clic ici</button>
      </form>
    </div>
  );
};

ModifyMyAvatar.propTypes = {
  id: PropTypes.number.isRequired,
  setAvatar: PropTypes.func.isRequired,
};

export default ModifyMyAvatar;
