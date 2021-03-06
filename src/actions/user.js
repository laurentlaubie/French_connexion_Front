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
export const loadUserProfile = (userId) => ({
  type: LOAD_USER_PROFILE,
  userId,
});

// action type SAVE_USER_PROFILE
export const SAVE_USER_PROFILE = 'SAVE_USER_PROFILE';

// action creator saveUserProfile
export const saveUserProfile = (userInfos) => ({
  type: SAVE_USER_PROFILE,
  userInfos,
});

// action type ADD_NEW_USER
export const ADD_NEW_USER = 'ADD_NEW_USER';

// action creator addNewUser
export const addNewUser = () => ({
  type: ADD_NEW_USER,
});

// action type LOAD_USERS_CARDS
export const LOAD_USERS_CARDS = 'LOAD_USERS_CARDS';

// action creator loadUsersCards
export const loadUsersCards = () => ({
  type: LOAD_USERS_CARDS,
});

// action type SAVE_USERS_CARDS
export const SAVE_USERS_CARDS = 'SAVE_USERS_CARDS';

// action creator saveUsersCards
export const saveUsersCards = (usersList) => ({
  type: SAVE_USERS_CARDS,
  usersList,
});



// action type SAVE_USERS_REVIEWS
export const SAVE_USERS_REVIEWS = 'SAVE_USERS_REVIEWS';

// action creator saveUsersReviews
export const saveUsersReviews = (usersReviewList) => ({
  type: SAVE_USERS_REVIEWS,
  usersReviewList,
});

// action type LOAD_USERS_REVIEWS
export const LOAD_USERS_REVIEWS = 'LOAD_USERS_REVIEWS';

// action creator loadUsersCards
export const loadUsersReviews = () => ({
  type: LOAD_USERS_REVIEWS,
});




// action type RENDER_NEW_LIST
export const RENDER_NEW_LIST = 'RENDER_NEW_LIST';

// action creator RenderNewList
export const RenderNewList = (result) => ({
  type: RENDER_NEW_LIST,
  result,
});

// action type CHANGE_SIGN_IN_FIELD_VALUE
export const CHANGE_SIGN_IN_FIELD_VALUE = 'CHANGE_SIGN_IN_FIELD_VALUE';

// action creator changeSignInFieldValue
export const changeSignInFieldValue = (value, name) => ({
  type: CHANGE_SIGN_IN_FIELD_VALUE,
  value,
  name,
});

// action type CLOSE_MODIFY_CITY_MODAL
export const CLOSE_MODIFY_CITY_MODAL = 'CLOSE_MODIFY_CITY_MODAL';

// action creator closeModifyCityModal
export const closeModifyCityModal = () => ({
  type: CLOSE_MODIFY_CITY_MODAL,
});

// action type OPEN_MODIFY_CITY_MODAL
export const OPEN_MODIFY_CITY_MODAL = 'OPEN_MODIFY_CITY_MODAL';

// action creator openModifyCityModal
export const openModifyCityModal = () => ({
  type: OPEN_MODIFY_CITY_MODAL,
});

// action type CHANGE_INPUTVALUE
export const CHANGE_INPUTVALUE = 'CHANGE_INPUTVALUE';

// action creator changeInputValue
export const changeInputValue = (inputValue) => ({
  type: CHANGE_INPUTVALUE,
  inputValue,
});
// action type SET_LOADING
export const SET_LOADING = 'SET_LOADING';

// action creator setLoading
export const setLoading = (value) => ({
  type: SET_LOADING,
  value,
});



// // action type SAVE_AVATAR
// export const SAVE_AVATAR = 'SAVE_AVATAR';

// // action creator setLoading
// export const saveAvatar = (avatarData) => ({
//   type: SAVE_AVATAR,
//   avatarData,
// });
  


