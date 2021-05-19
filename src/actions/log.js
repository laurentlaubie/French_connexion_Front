// action type CLOSE_SIGN_IN
export const CLOSE_SIGN_IN = 'CLOSE_SIGN_IN';

// action creator closeSignIn
export const closeSignIn = () => ({
  type: CLOSE_SIGN_IN,
});

// action type OPEN_SIGN_IN
export const OPEN_SIGN_IN = 'OPEN_SIGN_IN';

// action creator openSignIn
export const openSignIn = () => ({
  type: OPEN_SIGN_IN,
});

// action type CLOSE_LOG_IN
export const CLOSE_LOG_IN = 'CLOSE_LOG_IN';

// action creator closeLogIn
export const closeLogIn = () => ({
  type: CLOSE_LOG_IN,
});

// action type OPEN_LOG_IN
export const OPEN_LOG_IN = 'OPEN_LOG_IN';

// action creator openLogIn
export const openLogIn = () => ({
  type: OPEN_LOG_IN,
});

// action type CHANGE_LOG_IN_FIELD_VALUE
export const CHANGE_LOG_IN_FIELD_VALUE = 'CHANGE_LOG_IN_FIELD_VALUE';

// action creator changeLogInFieldValue
export const changeLogInFieldValue = (value, name) => ({
  type: CHANGE_LOG_IN_FIELD_VALUE,
  value,
  name,
});

// action type LOGIN
export const LOG_IN = 'LOG_IN';

// action creator logIn
export const logIn = () => ({
  type: LOG_IN,
});

// action type SAVE_CONNECTED_USER_DATA
export const SAVE_CONNECTED_USER_DATA = 'SAVE_CONNECTED_USER_DATA';

// action creator saveConnectedUserData
export const saveConnectedUserData = (decodedToken) => ({
  type: SAVE_CONNECTED_USER_DATA,
  decodedToken,
});

// action type OPEN_LOG_OUT
export const OPEN_LOG_OUT = 'OPEN_LOG_OUT';

// action creator openLogOut
export const openLogOut = () => ({
  type: OPEN_LOG_OUT,
});

// action type CLOSE_LOG_OUT
export const CLOSE_LOG_OUT = 'CLOSE_LOG_OUT';

// action creator closeLogOut
export const closeLogOut = () => ({
  type: CLOSE_LOG_OUT,
});

// action type LOG_OUT
export const LOG_OUT = 'LOG_OUT';

// action creator logOut
export const logOut = () => ({
  type: LOG_OUT,
});

// action type SET_IS_CONNECTED
export const SET_IS_CONNECTED = 'SET_IS_CONNECTED';

// action creator setToConnected
export const setIsConnected = (value) => ({
  type: SET_IS_CONNECTED,
  value,
});

// action type SAVE_TOKEN_IN_STATE
export const SAVE_TOKEN_IN_STATE = 'SAVE_TOKEN_IN_STATE';

// action creator saveTokenInState
export const saveTokenInState = (userToken) => ({
  type: SAVE_TOKEN_IN_STATE,
  userToken,
});

// action type CHANGE_PROFILE_FORM_FIELD_VALUE
export const CHANGE_PROFILE_FORM_FIELD_VALUE = 'CHANGE_PROFILE_FORM_FIELD_VALUE';

// action creator changeProfileFormFieldValue
export const changeProfileFormFieldValue = (value, name) => ({
  type: CHANGE_PROFILE_FORM_FIELD_VALUE,
  value,
  name,
});

// action type CHANGE_PASSWORD_PROFILE_FORM_FIELD_VALUE
export const CHANGE_PASSWORD_PROFILE_FORM_FIELD_VALUE = 'CHANGE_PASSWORD_PROFILE_FORM_FIELD_VALUE';

// action creator changePasswordProfileFormFieldValue
export const changePasswordProfileFormFieldValue = (value, name) => ({
  type: CHANGE_PASSWORD_PROFILE_FORM_FIELD_VALUE,
  value,
  name,
});

// action type RESET_PASSWORD
export const RESET_PASSWORD = 'RESET_PASSWORD';

// action creator resetPassword
export const resetPassword = () => ({
  type: RESET_PASSWORD,
});
