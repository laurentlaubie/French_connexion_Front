// action type TOGGLE_HELPER_CHECKBOX
export const TOGGLE_HELPER_CHECKBOX = 'TOGGLE_HELPER_CHECKBOX';

// action creator toggleHelperCheckbox
export const toggleHelperCheckbox = (helper) => ({
  type: TOGGLE_HELPER_CHECKBOX,
  helper,
});

// action type BECOME_HELPER
export const BECOME_HELPER = 'BECOME_HELPER';

// action creator becomeHelper
export const becomeHelper = () => ({
  type: BECOME_HELPER,
});

// action type MODIFY_PROFILE
export const MODIFY_PROFILE = 'MODIFY_PROFILE';

// action creator modifyProfile
export const modifyProfile = (userId, myHobbiesList, myServicesList) => ({
  type: MODIFY_PROFILE,
  userId,
  myHobbiesList,
  myServicesList,
});


// action type REMOVE_HELPER_STATUS
export const REMOVE_HELPER_STATUS = 'REMOVE_HELPER_STATUS';

// action creator removeHelperStatus
export const removeHelperStatus = () => ({
  type: REMOVE_HELPER_STATUS,
});

// action type REDIRECT_TO_PROFILE
export const REDIRECT_TO_MY_PROFILE = 'REDIRECT_TO_PROFILE';

// action creator redirectToMyProfile
export const redirectToMyProfile = (value) => ({
  type: REDIRECT_TO_MY_PROFILE,
  value,
});

// action type SET_AVATAR
export const SET_AVATAR = 'SET_AVATAR';

// action creator setAvatar
export const setAvatar = (avatar) => ({
  type: SET_AVATAR,
  avatar,
});

// // action type SAVE_AVATAR
// export const SAVE_AVATAR = 'SAVE_AVATAR';

// // action creator saveAvatar
// export const saveAvatar = (id, avatar) => ({
//   type: SAVE_AVATAR,
//   id,
//   avatar,
// });

// action type SEND_AVATAR
export const SEND_AVATAR = 'SEND_AVATAR';

// action creator sendAvatar
export const sendAvatar = (id, avatar) => ({
  type: SEND_AVATAR,
  id,
  avatar,
});

// action type SAVE_AVATAR
export const SAVE_AVATAR = 'SAVE_AVATAR';

// action creator setLoading
export const saveAvatar = (avatarData) => ({
  type: SAVE_AVATAR,
  avatarData,
});
