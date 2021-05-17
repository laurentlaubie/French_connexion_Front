import { useParams } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export const getUserId = (isMyProfile, userInfos, connectedUserData) => {
  let userId = '';
  const params = useParams();

  if (isMyProfile) {
    userId = connectedUserData.id;
    console.log(userId);
    console.log('je suis dans monProfile');
  }
  else {
    userId = params.id;
  }
  return userId;
};
