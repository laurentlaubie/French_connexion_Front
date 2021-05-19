import { connect } from 'react-redux';

import ContactMe from 'src/components/ContactMe';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  userMail: state.user.userInfos.email,
  // propName:  valueFromTheState,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
// props: () => {
//   dispatch(actionFromAnActionCreator());
// },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactMe);
