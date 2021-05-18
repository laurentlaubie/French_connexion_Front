// action type LOAD_HOBBIES_LIST
export const LOAD_HOBBIES_LIST = 'LOAD_HOBBIES_LIST';

// action creator loadHobbiesList
export const loadHobbiesList = () => ({
  type: LOAD_HOBBIES_LIST,
});

// action type SAVE_HOBBIES_LIST
export const SAVE_HOBBIES_LIST = 'SAVE_HOBBIES_LIST';

// action creator saveHobbiesList
export const saveHobbiesList = (hobbiesList) => ({
  type: SAVE_HOBBIES_LIST,
  hobbiesList,
});

// // action type SAVE_MY_HOBBIES_IN_STATE
// export const SAVE_MY_HOBBIES_IN_STATE = 'SAVE_MY_HOBBIES_IN_STATE';

// // action creator saveMyHobbiesInState
// export const saveMyHobbiesInState = (value) => ({
//   type: SAVE_MY_HOBBIES_IN_STATE,
//   value,
// });

// action type SET_LOADING
export const SET_LOADING_HOBBIES = 'SET_LOADING_HOBBIES';

// action creator setLoadingHobbies
export const setLoadingHobbies = (value) => ({
  type: SET_LOADING_HOBBIES,
  value,
});

// action type TOGGLE_CHECKBOX_HOBBIES
export const TOGGLE_CHECKBOX_HOBBIES = 'TOGGLE_CHECKBOX_HOBBIES';

// action creator toggleCheckboxHobbies
export const toggleCheckboxHobbies = (value, checked) => ({
  type: TOGGLE_CHECKBOX_HOBBIES,
  value,
  checked,
});
