/* eslint-disable no-console */
import axios from 'axios';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { LOAD_USER_PROFILE, saveUserProfile, ADD_NEW_USER, LOAD_USERS_CARDS, saveUsersCards, MODIFY_PROFILE, setLoading, LOAD_USERS_REVIEWS, loadUsersReviews} from 'src/actions/user';
import { LOG_IN, saveConnectedUserData, LOG_OUT, closeSignIn } from 'src/actions/log';


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
            username: 'leonie@gmail.com',
            password: 'salut',

          },
        )
        .then((response) => {
          // on récupère le token et on paramètre axios pour le faire apparaitre dans notre header
          const userToken = (response.data.token);

          // on stocke le token dans le localStorage
          localStorage.setItem('token', (userToken));

          console.log(userToken);
          // api.defaults.headers.common.Authorization = `Bearer ${userToken}`;

          // on décode notre token pour récupérer les données de l'utilisateur connecté
          // et on les sauvegardes dans le state
          const decodedToken = jwt_decode(userToken);
          console.log(decodedToken);
          // const connectedUserData = decodedToken.username;
          // console.log(connectedUserData);
          store.dispatch(saveConnectedUserData(decodedToken));
        }).catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case LOAD_USER_PROFILE: {
      // CETTE REQUETE N'EST ACCESSIBLE QUE POUR UN UTILISATEUR CONNECTE
      
      // Récupération des infos d'un utilisateur (page mon-profil ou notre-reseau/utilisateur/id)
      const idParam = (action.userId);
      console.log(idParam);
      // on récupère le token stocké dans le localStorage
      const userToken = localStorage.getItem('token');
      console.log(userToken);

      // -- gestion loader for profilPage
      store.dispatch(setLoading(true));

      api
        .get(`/user/${idParam}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((response) => {
          // l'API nous retourne les infos de l'utilisateur
          console.log(response.status);
          console.log(response.data);
          const userInfos = response.data;
          console.log(response.headers);
          // on sauvegarde ces infos
          store.dispatch(saveUserProfile(userInfos));
        }).catch((error) => {
          // eslint-disable-next-line no-console
          const errorStatus = error.response.status;
          console.log(error.response.status);
          console.log('vous ne passerez pas');
          if (errorStatus === 401) {
            window.location.href = '/403';
          }
        })
        // -- gestion loader for profilPage
        .finally(() => {store.dispatch(setLoading(false))
        });
       
      // puis on décide si on la laisse filer ou si on la bloque
      next(action);
      break;
    }
    case ADD_NEW_USER: {
      // Création d'un nouvel utilisateur (inscription)
      const state = store.getState();
      const { firstname, lastname, email, password, confirmedPassword } = state.user;
      api
        .post(
          '/user',
          {
            firstname,
            lastname,
            email,
            confirmedPassword,
            password,
          },
        )
        .then((response) => {
          console.log(response);
          console.log('Vous êtes inscrit');
          store.dispatch(closeSignIn());
        }).catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    case LOAD_USERS_CARDS:
      // affichage de tous les profils sous forme de cards
      
      // -- gestion loader for profilPage
      store.dispatch(setLoading(true));

      api
        .get('user')
        .then((response) => {
          console.log(response);
          const usersList = response.data;
          store.dispatch(saveUsersCards(usersList));
        }).catch((error) => {
        // eslint-disable-next-line no-console
          console.log(error);
        })
        // -- gestion loader for profilPage
        .finally(() => {store.dispatch(setLoading(false))
        });

      // puis on décide si on la laisse filer ou si on la bloque
      next(action);
      break;


      case LOAD_USERS_REVIEWS:
      // affichage de tous les profils sur la HP
      
      api
        .get('/user')
        .then((response) => {
          console.log(response);
          const usersReviewList = response.data;
          store.dispatch(loadUsersReviews(usersReviewList));
        }).catch((error) => {
        // eslint-disable-next-line no-console
          console.log(error);
        })
      
      // puis on décide si on la laisse filer ou si on la bloque
      next(action);
      break;


    case MODIFY_PROFILE: {
      // on récupère l'ID de la personne connectée
      const { userId } = action;
      console.log(userId);

      // on récupère le token stocké dans le localStorage
      const userToken = localStorage.getItem('token');
      console.log(userToken);

      // on récupère les nouvelles données de la personne connectée, ainsi que celle non modifiée
      const state = store.getState();
      const { userInfos } = state.user;
      const { email, firstname, lastname, phoneNumber, biography } = userInfos;
      const { newPassword: password, confirmedNewPassword: confirmedPassword } = state.user;

      api
        .put(`/user/${userId}`,
          {
            lastname,
            firstname,
            email,
            password,
            confirmedPassword,
            biography,
            // phoneNumber,
          },
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          })
        .then((response) => {
          console.log(response);
          // const usersList = response.data;
          // store.dispatch(saveUsersCards(usersList));
        }).catch((error) => {
          // eslint-disable-next-line no-console
          const errorStatus = error.response.status;
          console.log(errorStatus);
          console.log('vous ne passerez pas');
          // if (errorStatus === 401) {
          //   window.location.href = '/403';
          // }
        });
      next(action);
      break;
    }

    case LOG_OUT:
      delete api.defaults.headers.common.Authorization;
      localStorage.removeItem('token');
      console.log('je me déconnecte');
      next(action);
      break;
    default:
      next(action);
  }
};
