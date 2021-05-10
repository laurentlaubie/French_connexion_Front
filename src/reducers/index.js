/* eslint-disable max-len */
import {
  CLOSE_LOG_IN, OPEN_LOG_IN, CLOSE_SIGN_IN, OPEN_SIGN_IN, SAVE_USER_PROFILE
} from 'src/actions';

const initialState = {
  isConnected: false,
  isLogInOpen: false,
  isSignInOpen: false,
  isHelper: false,
  // connectedUserInfos: {
  //   id: 2,
  //   email: 'albert@albert.com',
  //   username: 'Albert22',
  //   password: 'albertalbert',
  //   firstName: 'Albert',
  //   lastName: 'Dupont',
  //   isHelper: true,
  //   avatar: 'https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg',
  //   status: 'expert',
  //   biography: 'Lorem ipsum dolor sit amet. Eum atque dicta est quod suscipit ea nihil impedit cum exercitationem voluptatem! Sed galisum quod sed cumque dignissimos sed magnam fugit qui odio quibusdam 33 perferendis explicabo ut odit amet et similique galisum. Qui ipsum magnam sit pariatur quia et labore Quis id eius ullam.Aut pariatur quia est commodi perferendis et ratione amet eos obcaecati quidem. Sed harum sint aut quas numquam id ratione corrupti ut maiores illum et facilis labore? Eum consequatur deserunt ut ratione porro ut magni veritatis. Et omnis quas id optio quidem vel unde magni et ipsam aliquid 33 asperiores officiis hic ipsa atque. Ea voluptatum quod aut nisi beatae ut odit error ut odio officia et repellat ullam est quaerat corporis? Cum sequi fugiat eos tempora atque aut ipsum omnis est autem esse rem commodi aperiam qui fugiat omnis. Sed magnam optio in itaque Quis qui saepe consequatur. Vel explicabo dignissimos ab consequatur excepturi et porro ducimus sed fugiat odio.Lorem ipsum dolor sit amet. Eum atque dicta est quod suscipit ea nihil impedit cum exercitationem voluptatem! Sed galisum quod sed cumque dignissimos sed magnam fugit qui odio quibusdam 33 perferendis explicabo ut odit amet et similique galisum. Qui ipsum magnam sit pariatur quia et labore Quis id eius ullam. Aut pariatur quia est commodi perferendis et ratione amet eos obcaecati quidem. Sed harum sint aut quas numquam id ratione corrupti ut maiores illum et facilis labore? Eum consequatur deserunt ut ratione porro ut magni veritatis. Et omnis quas id optio quidem vel unde magni et ipsam aliquid 33 asperiores officiis hic ipsa atque.Ea voluptatum quod aut nisi beatae ut odit error ut odio officia et repellat ullam est quaerat corporis? Cum sequi fugiat eos tempora atque aut ipsum omnis est autem esse rem commodi aperiam qui fugiat omnis. Sed magnam optio in itaque Quis qui saepe consequatur.',
  //   shortDescription: 'blablablablablablablabla blablablablabla blablabla',
  //   cituId: 22,
  //   cityName: 'Bogota',
  //   countryName: 'Colombie',
  //   createdAt: 'Mars 2018',
  //   phoneNumber: '06 12 12 12 12',
  //   hobbiesList: [
  //     'Pêche',
  //     'Tir à l\'arc',
  //     'Karaté',
  //     'Bowling',
  //     'Sortir avec mes amis',
  //   ],
  //   servicesList: [
  //     'Trajet',
  //     'Traduction',
  //     'Visites guidées',
  //     'Hébergement',
  //   ],
  // },
  userInfos: [],

};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CLOSE_LOG_IN:
      return {
        ...state,
        isLogInOpen: false,
      };
    case OPEN_LOG_IN:
      return {
        ...state,
        isLogInOpen: true,
        isSignInOpen: false,
      };
    case CLOSE_SIGN_IN:
      return {
        ...state,
        isSignInOpen: false,
      };
    case OPEN_SIGN_IN:
      return {
        ...state,
        isSignInOpen: true,
        isLogInOpen: false,
      };
    case SAVE_USER_PROFILE:
      return {
        ...state,
        userInfos: action.userInfos,
      };
    default:
      return state;
  }
};
