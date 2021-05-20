import React, { useState } from 'react';

import PropTypes from 'prop-types';

import axios from 'axios';

import question from 'src/assets/images/question.png';
import hands from 'src/assets/images/hands.png';
import defaultAvatar from 'src/assets/images/defaultAvatar.jpg';
import ProfileLocalisation from 'src/components/ProfileLocalisation';

// == import style
import './profilePrincipalInfos.scss';

const ProfilePrincipalInfos = ({
  isMyProfile,
  helper,
  nickname,
  createdAt,
  avatar,
  cities,
  name,
  id,
  saveAvatar,
}) => {
  
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

  let creationDate = new Date(createdAt);
  console.log(creationDate);
  creationDate = `${creationDate.getDate()}/${creationDate.getMonth() + 1}/${creationDate.getFullYear()}`;
  console.log(creationDate);

  return (
    <div className="profilePrincipalInfos">
      <div className="profilePrincipalInfos__status">
        <div className={helper ? 'profilePrincipalInfos__status__name--helper' : 'hidden'}>
          HELPER
          <img className="profilePrincipalInfos__status__logo--helper" src={hands} alt="Logo du helpeur" />
      </div>
      <div className="profilePrincipalInfos__username">{nickname != null ? nickname : `${firstname} ${lastname}`}</div>
      <div className="profilePrincipalInfos__date"> {`Membre depuis le ${creationDate}`} </div>
      <div className="profilePrincipalInfos__image">
        <img className="jose" alt="image__profile" src={`http://ec2-34-239-254-34.compute-1.amazonaws.com/images/avatars/${avatar}`} />
      </div>
      {/* <div className={isMyProfile ? 'profilePrincipalInfos__update' : 'hidden'}>Mettre à jour ma photo </div> */}
      <form onSubmit={manageSubmit} >
        <input type="file" name="avatar" onChange = {() => {setAvatar(event.target.files[0])}}/>
        <button> clic ici</button>
      </form>

      <ProfileLocalisation {...cities} />
      </div>
    </div>

  );
};

ProfilePrincipalInfos.propTypes = {
  isMyProfile: PropTypes.bool.isRequired,
  helper: PropTypes.bool.isRequired,
  nickname: PropTypes.string,
  // id: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  // status: PropTypes.string.isRequired,
  // cities: PropTypes.array({
  //   name: PropTypes.string.isRequired,
  //   longitude: PropTypes.number.isRequired,
  //   latitude: PropTypes.number.isRequired,
  // }),
  // country: PropTypes.string,
  createdAt: PropTypes.string,
  // firstname: PropTypes.string.isRequired,
  // lastname: PropTypes.string.isRequired,
};

ProfilePrincipalInfos.defaultProps = {
  avatar: defaultAvatar,
  nickname: '',
  // cities: [],
  // country: [],
  createdAt: '2021-05-11T07:33:18+00:00',
};

export default ProfilePrincipalInfos;
