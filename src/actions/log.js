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


// action type CHANGE_USER_FIELD_VALUE

//action using for log and SignIn 

export const CHANGE_USER_FIELD_VALUE = 'CHANGE_USER_FIELD_VALUE';

// action creator changeUserFieldValue
// on récupère le nom du champ et la valeur
// et on construit un objet action qui contient ces informations
export const changeUserFieldValue = (value, name) => ({
  type: CHANGE_USER_FIELD_VALUE,
  value,
  name,
});

// action type LOGIN
export const LOGIN = 'LOGIN';

// action creator login
export const login = () => ({
  type: LOGIN,
});


