import { connect } from 'react-redux';

import ModifyMyAvatar from 'src/components/ModifyMyAvatar';

import { setAvatar, sendAvatar } from 'src/actions/modifyForm';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  setAvatar: (newAvatar) => {
    dispatch(setAvatar(newAvatar));
  },
  sendAvatar: (id, newAvatar) => {
    dispatch(sendAvatar(id, newAvatar));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyMyAvatar);
