import { connect } from 'react-redux';

import Profile from 'src/components/Profile';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  // propName:  valueFromTheState,
  isHelper: state.isHelper,

});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
// props: () => {
//   dispatch(actionFromAnActionCreator());
// },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
