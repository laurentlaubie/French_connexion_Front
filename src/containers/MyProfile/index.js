import { connect } from 'react-redux';
import { openLogOut } from 'src/actions/log';
import { loadUserProfile } from 'src/actions/user';
import { redirectToMyProfile } from 'src/actions/modifyForm';

import MyProfile from 'src/components/MyProfile';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  connectedUserData: state.log.connectedUserData,
  isLoading: state.user.isLoading,
  userInfos: state.user.userInfos,
  isConnected: state.log.isConnected,

});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  openLogOut: () => {
    dispatch(openLogOut());
  },
  loadUserProfile: (userId) => {
    dispatch(loadUserProfile(userId));
  },
  redirect: (value) => {
    dispatch(redirectToMyProfile(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
