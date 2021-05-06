import { connect } from 'react-redux';

import SignIn from 'src/components/SignIn';
import { closeSignIn } from 'src/actions';
 
// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  isOpen: state.isSignInOpen,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  close: () => {
    dispatch(closeSignIn());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
