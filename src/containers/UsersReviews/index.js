import { connect } from 'react-redux';

import UsersReviews from 'src/components/UsersReviews';
import { loadUsersReviews  } from 'src/actions/user';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  usersReviewList: state.user.usersReviewList,
  //newUserList: state.user.newUserList,
  
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadUsersReviews: () => {
    dispatch(loadUsersReviews());
  },
  //RenderNewList: (result) =>{
  //  dispatch(RenderNewList(result));
 // },
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersReviews);
