import { connect } from 'react-redux';

import LogIn from 'src/components/LogIn';
import { closeLogIn, openSignIn } from 'src/actions';
 
// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  isOpen: state.isLogInOpen,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
