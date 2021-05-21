import { connect } from 'react-redux';
import { loadUserProfile, setLoading } from 'src/actions/user';
import { openLogOut } from 'src/actions/log';

import Profile from 'src/components/Profile';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  // propName:  valueFromTheState,
  // isHelper: state.user.isHelper,
  // connectedUserInfos: state.connectedUserInfos,
  // otherUserInfos: state.otherUserInfos,
  userInfos: state.user.userInfos,
  isLogOutOpen: state.log.isLogOutOpen,
  isLoading: state.user.isLoading,
  // isConnected: state.
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadUserProfile: (userId) => {
    dispatch(loadUserProfile(userId));
  },
  openLogOut: () => {
    dispatch(openLogOut());
  },
  setLoading: (value) => {
    dispatch(setLoading(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
