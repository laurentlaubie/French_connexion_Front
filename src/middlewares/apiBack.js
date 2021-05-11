/* eslint-disable no-console */
import axios from 'axios';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { LOAD_USER_PROFILE, saveUserProfile, ADD_NEW_USER, LOAD_USERS_CARDS, saveUsersCards } from 'src/actions/user';
import { LOG_IN, saveConnectedUserData } from 'src/actions/log';

const api = axios.create({
  baseURL: 'http://ec2-34-239-254-34.compute-1.amazonaws.com/api/v1/',
});

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      // connexion de l'utilisateur
      // on extrait l'email et le password du state
      const state = store.getState();
      const { email: username, password } = state.user;

      api
        .post(
          '/login',
          {
            username: 'leon@leon.com',
            password: 'leonleon',
          },
        )
        .then((response) => {
          const userData = (response.data);
          console.log(userData.token);
          const decoded = jwt_decode(userData.token);
          console.log(decoded);
          api.defaults.headers.common.Authorization = `Bearer ${userData.token}`;
          console.log('je sauvegarde mon token');
          store.dispatch(saveConnectedUserData(userData));
        }).catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case LOAD_USER_PROFILE:
      // Récupération des infos d'un utilisateur (page mon-profil ou notre-reseau/utilisateur/id)

      api
        .get('/user/14')
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
            // firstName,
            // lastName,
            // email,
            // password,
          },
        )
        .then((response) => {
          console.log(response);
          console.log('Vous êtes inscrit');
        }).catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    case LOAD_USERS_CARDS:
      // affichage de tous les profils sous forme de cards

      api
        .get('user')
        .then((response) => {
          console.log(response);
          const usersList = response.data;
          store.dispatch(saveUsersCards(usersList));
        }).catch((error) => {
        // eslint-disable-next-line no-console
          console.log(error);
        });

      // puis on décide si on la laisse filer ou si on la bloque
      next(action);
      break;

    default:
      next(action);
  }
};
