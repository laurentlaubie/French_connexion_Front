import axios from 'axios';
import { LOAD_USER_PROFILE, saveUserProfile, ADD_NEW_USER } from 'src/actions/user';

const api = axios.create({
  baseURL: 'http://ec2-34-239-254-34.compute-1.amazonaws.com/api/v1/',
});

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_USER_PROFILE:
      // Récupération des infos d'un utilisateur (page mon-profil ou notre-reseau/utilisateur/id)

      api
        .get('/user/3')
        .then((response) => {
          // l'API nous retourne les infos de l'utilisateur
          console.log(response.data);
          const userInfos = response.data;

          // on sauvegarde ces infos
          store.dispatch(saveUserProfile(userInfos));
        }).catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });

      // puis on décide si on la laisse filer ou si on la bloque
      next(action);
      break;

    case ADD_NEW_USER:
      // Création d'un nouvel utilisateur (inscription)

      api
        .post(
          '/user',
          {
            firstName,
            lastName,
            email,
            password,
          },
        )
        .then((response) => {
          console.log(response);
          console.log("Vous êtes inscrit");
        }).catch((error) => {
          console.log(error);
        });

    default:
      console.log('auth');
      next(action);
  }
};
