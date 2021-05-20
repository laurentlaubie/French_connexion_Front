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
