import { connect } from 'react-redux';
import { closeLogOut, logOut } from 'src/actions/log';

import LogOut from 'src/components/LogOut';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  isOpen: state.log.isLogOutOpen,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  close: () => {
    dispatch(closeLogOut());
  },
  handleLogOut: () => {
    dispatch(logOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);
