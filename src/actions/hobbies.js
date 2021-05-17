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
