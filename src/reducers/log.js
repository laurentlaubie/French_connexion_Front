import {
  CLOSE_LOG_IN, OPEN_LOG_IN,
  CLOSE_SIGN_IN, OPEN_SIGN_IN,
  CHANGE_LOG_IN_FIELD_VALUE,
  SAVE_CONNECTED_USER_DATA,
  OPEN_LOG_OUT, CLOSE_LOG_OUT, LOG_OUT,
  SET_IS_CONNECTED,
  SAVE_TOKEN_IN_STATE,
  CHANGE_PASSWORD_PROFILE_FORM_FIELD_VALUE,
  CHANGE_PROFILE_FORM_FIELD_VALUE,
  RESET_PASSWORD,
} from 'src/actions/log';

import {
  ADD_SELECTED_HOBBY, SAVE_SELECTED_HOBBY,
} from 'src/actions/hobbies';

import {
  ADD_SELECTED_SERVICE, SAVE_SELECTED_SERVICE,
} from 'src/actions/services';

import {
  BECOME_HELPER,
  REMOVE_HELPER_STATUS,
  REDIRECT_TO_MY_PROFILE,
  SAVE_AVATAR,
  SET_NEW_ADDRESS,
  SAVE_NEW_ADDRESS,
  SAVE_MODIFIED_CONNECTED_USER_DATA,
} from 'src/actions/modifyForm';

import { SET_MY_PROFILE_LOADING } from 'src/actions/loading';

const initialState = {
  isConnected: false,
  isLogInOpen: false,
  isSignInOpen: false,
  isLogOutOpen: false,
  email: '',
  password: '',
  connectedUserData: '',
  isLoading: true,
  selectedHobby: '',
  newPassword: '',
  confirmedNewPassword: '',
  redirectionToMyProfile: false,
  isMyProfileLoaded: false,
  newAddress: '',
  completeNewAddress: [],

};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_TOKEN_IN_STATE:
      return {
        ...state,
        token: action.userToken,
      };
    case SAVE_CONNECTED_USER_DATA:
      return {
        ...state,
        connectedUserData: action.decodedToken,
        isConnected: true,
        isLogInOpen: false,
        email: '',
        password: '',
      };
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
    case CHANGE_LOG_IN_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case OPEN_LOG_OUT:
      return {
        ...state,
        isLogOutOpen: true,
      };
    case CLOSE_LOG_OUT:
      return {
        ...state,
        isLogOutOpen: false,
      };
    case LOG_OUT:
      return {
        ...state,
        isConnected: false,
        isLogOutOpen: false,
        connectedUserData: '',
        token: '',
      };
    case SET_IS_CONNECTED:
      return {
        ...state,
        isConnected: action.value,
        isLoading: false,
      };
    case CHANGE_PASSWORD_PROFILE_FORM_FIELD_VALUE:
      return {
        ...state,
        connectedUserData: {
          ...state.connectedUserData,
          [action.name]: action.value,
        },
      };
    case CHANGE_PROFILE_FORM_FIELD_VALUE:
      return {
        ...state,
        connectedUserData: {
          ...state.connectedUserData,
          [action.name]: action.value,
        },
      };
    case SAVE_SELECTED_HOBBY:
      return {
        ...state,
        selectedHobby: {
          ...state.selectedHobby,
          id: action.hobbyId,
          name: action.hobbyName,
        },
      };
    case ADD_SELECTED_HOBBY:
      return {
        ...state,
        connectedUserData: {
          ...state.connectedUserData,
          hobbies: [...state.connectedUserData.hobbies, action.selectedHobby],
        },
      };
    case SAVE_SELECTED_SERVICE:
      return {
        ...state,
        selectedService: {
          ...state.selectedService,
          id: action.serviceId,
          name: action.serviceName,
        },
      };
    case ADD_SELECTED_SERVICE:
      return {
        ...state,
        connectedUserData: {
          ...state.connectedUserData,
          services: [...state.connectedUserData.services, action.selectedService],
        },
      };
    case RESET_PASSWORD:
      return {
        ...state,
        connectedUserData: {
          ...state.connectedUserData,
          newPassword: '',
          confirmedNewPassword: '',
        },
      };
    // case TOGGLE_HELPER_CHECKBOX:
    //   return {
    //     ...state,
    //     connectedUserData: {
    //       ...state.connectedUserData,
    //       helper: !action.helper,
    //     },
    //   };
    case BECOME_HELPER:
      return {
        ...state,
        connectedUserData: {
          ...state.connectedUserData,
          helper: true,
        },
      };
    case REMOVE_HELPER_STATUS:
      return {
        ...state,
        connectedUserData: {
          ...state.connectedUserData,
          helper: false,
          services: [],
        },
      };
    case REDIRECT_TO_MY_PROFILE:
      return {
        ...state,
        redirectionToMyProfile: action.value,
      };
    case SET_MY_PROFILE_LOADING:
      return {
        ...state,
        isMyProfileLoaded: action.value,
      };
    case SAVE_AVATAR:
      return {
        ...state,
        connectedUserData: {
          ...state.connectedUserData,
          avatar: action.avatarData,
        },
      };
    case SET_NEW_ADDRESS:
      return {
        ...state,
        newAddress: action.address,
      };
    case SAVE_NEW_ADDRESS:
      return {
        ...state,
        completeNewAddress: action.completeAddress,
      };
    case SAVE_MODIFIED_CONNECTED_USER_DATA:
      return {
        ...state,
        connectedUserData: action.modifiedData,
      };
    default:
      return state;
  }
};
