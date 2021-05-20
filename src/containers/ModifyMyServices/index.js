import { connect } from 'react-redux';

import ModifyMyServices from 'src/components/ModifyMyServices';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  servicesList: state.services.servicesList,
  myServices: state.log.connectedUserData.services,
  helper: state.log.connectedUserData.helper,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
// props: () => {
//   dispatch(actionFromAnActionCreator());
// },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyMyServices);
