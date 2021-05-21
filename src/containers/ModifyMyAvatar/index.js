import { connect } from 'react-redux';

import ModifyMyAvatar from 'src/components/ModifyMyAvatar';

import { setAvatar, sendAvatar, saveAvatar } from 'src/actions/modifyForm';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  avatar: state.log.connectedUserData.avatar,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyMyAvatar);
