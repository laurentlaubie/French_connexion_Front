import { connect } from 'react-redux';

import UserCard from 'src/components/UserCard';

import { openLogIn } from 'src/actions/log';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  isConnected: state.log.isConnected,
  // isSignInOpen: state.log.isSignInOpen,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  openModal: () => {
    dispatch(openLogIn());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
