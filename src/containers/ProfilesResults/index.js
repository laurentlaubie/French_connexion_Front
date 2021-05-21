import { connect } from 'react-redux';

import ProfilesResults from 'src/components/ProfilesResults';

const mapStateToProps = (state, ownProps) => ({
  usersList: state.map.usersList,
  usersByCity: state.map.usersCity,
  cityName: state.map.cityName,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilesResults);
