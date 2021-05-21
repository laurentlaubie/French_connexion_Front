import { connect } from 'react-redux';

import ModifyMyAvatar from 'src/components/ModifyMyAvatar';

import { setAvatar, sendAvatar, saveAvatar, saveAvatarInState } from 'src/actions/modifyForm';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  avatar: state.log.connectedUserData.avatar,
  avatarFile: state.log.avatarFile,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  // setAvatar: (newAvatar) => {
  //   dispatch(setAvatar(newAvatar));
  // },
  // sendAvatar: (id, newAvatar) => {
  //   dispatch(sendAvatar(id, newAvatar));
  // },
  saveAvatar: (avatarData) => {
    dispatch(saveAvatar(avatarData));
  },
  saveAvatarInState: (file) => {
    dispatch(saveAvatarInState(file));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyMyAvatar);
