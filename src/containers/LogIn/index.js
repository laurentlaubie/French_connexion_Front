import { connect } from 'react-redux';

import LogIn from 'src/components/LogIn';
import { closeLogIn, openSignIn, changeUserFieldValue, login } from 'src/actions/log';
 
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
    // console.log(` Je veux changer la valeur de ${name} pour y mettre : ${value}`);

    dispatch(changeUserFieldValue(value, name));
  },
  handleLogin: () => {
    console.log('Allez, on se logge');
    dispatch(login());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
