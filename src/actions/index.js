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

// action type LOAD_USER_PROFILE
export const LOAD_USER_PROFILE = 'LOAD_USER_PROFILE';

// action creator loadUserProfile
export const loadUserProfile = () => ({
  type: LOAD_USER_PROFILE,
});

// action type SAVE_USER_PROFILE
export const SAVE_USER_PROFILE = 'SAVE_USER_PROFILE';

// action creator saveUserProfile
export const saveUserProfile = (userInfos) => ({
  type: SAVE_USER_PROFILE,
  userInfos,
});
