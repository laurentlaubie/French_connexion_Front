// action type LOAD_SERVICES_LIST
export const LOAD_SERVICES_LIST = 'LOAD_SERVICES_LIST';

// action creator loadServicesList
export const loadServicesList = () => ({
  type: LOAD_SERVICES_LIST,
});

// action type SAVE_SERVICES_LIST
export const SAVE_SERVICES_LIST = 'SAVE_SERVICES_LIST';

// action creator saveServicesList
export const saveServicesList = (servicesList) => ({
  type: SAVE_SERVICES_LIST,
  servicesList,
});

// action type SET_LOADING
export const SET_LOADING_SERVICES = 'SET_LOADING_SERVICES';

// action creator setLoadingServices
export const setLoadingServices = (value) => ({
  type: SET_LOADING_SERVICES,
  value,
});
