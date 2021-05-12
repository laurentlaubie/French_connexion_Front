import { connect } from 'react-redux';
import { loadUserProfile } from 'src/actions/user';

import Profile from 'src/components/Profile';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  // propName:  valueFromTheState,
  isHelper: state.user.isHelper,
  // connectedUserInfos: state.connectedUserInfos,
  // otherUserInfos: state.otherUserInfos,
  userInfos: state.user.userInfos,
  connectedUserData: state.log.connectedUserData,

});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadUserProfile: (userId) => {
    dispatch(loadUserProfile(userId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
