// action type TOGGLE_HELPER_CHECKBOX
export const TOGGLE_HELPER_CHECKBOX = 'TOGGLE_HELPER_CHECKBOX';

// action creator toggleHelperCheckbox
export const toggleHelperCheckbox = (helper) => ({
  type: TOGGLE_HELPER_CHECKBOX,
  helper,
});
