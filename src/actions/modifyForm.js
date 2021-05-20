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
