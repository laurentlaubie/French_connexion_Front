import { connect } from 'react-redux';

import SignIn from 'src/components/SignIn';
import { closeSignIn, openLogIn } from 'src/actions/log';
import { changeUserFieldValue } from 'src/actions/log';
import { addNewUser } from 'src/actions/user';


 
// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  isOpen: state.log.isSignInOpen,
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  email: state.user.email,
  password: state.user.password,
  confirmedPassword: state.user.confirmedPassword,
});

// connection de props fonctions qui déclenchent des actions
// ces props seront des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  close: () => {
    dispatch(closeSignIn());
  },
  openLogIn: () => {
    dispatch(openLogIn());
  },
  changeField: (value, name) => {
    dispatch(changeUserFieldValue(value, name));
  },
  handleSignIn: () => {
    dispatch(addNewUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
