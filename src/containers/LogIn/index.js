import { connect } from 'react-redux';

import LogIn from 'src/components/LogIn';
import { closeLogIn, openSignIn, changeLogInFieldValue, logIn } from 'src/actions/log';
 
// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  isOpen: state.log.isLogInOpen,
  email: state.log.email,
  password: state.log.password,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  close: () => {
    dispatch(closeLogIn());
  },
  openSignIn: () => {
    dispatch(openSignIn());
  },
  changeField: (value, name) => {
    dispatch(changeLogInFieldValue(value, name));
  },
  handleLogin: () => {
    console.log('Allez, on se logge');
    dispatch(logIn());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
