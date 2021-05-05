import React from 'react';
import PropTypes from 'prop-types';
// import Carousel from 'react-multi-carousel';

import UserReview from 'src/components/UserReview';

import './usersReviews.scss';
import 'react-multi-carousel/lib/styles.css';

const UsersReviews = ({ users }) => (
  <div className="usersReviews">
    <h3 className="usersReviews__title"> Notre communauté s'aggrandit </h3>
    <div className="usersReviews__list">
      {users.map((user) => (
        <UserReview key={user.id} {...user} />
      ))}
    </div>
  </div>

);

// VERSION AVEC CAROUSEL NON FONCTIONNEL
// const UsersReviews = ({ users }) => {
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 768 },
  //     items: 4,
  //     slidesToSlide: 4 // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 768, min: 464 },
  //     items: 3,
  //     slidesToSlide: 3 // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 2,
  //     slidesToSlide: 2 // optional, default to 1.
  //   },
  // };

  // return (
  //   <div className="usersReviews">
  //     <h3 className="usersReviews__title"> Notre communauté s'aggrandit </h3>
  //     <Carousel
  //       className="usersReviews__list"
  //       swipeable={true}
  //       draggable={false}
  //       showDots={true}
  //       responsive={responsive}
  //       ssr={true} // means to render carousel on server-side.
  //       infinite={true}
  //       autoPlay={false}
  //       autoPlaySpeed={1000}
  //       keyBoardControl={true}
  //       customTransition="all .5"
  //       transitionDuration={500}
  //       containerClass="carousel-container"
  //       removeArrowOnDeviceType={["tablet", "mobile"]}
  //       // deviceType={this.props.deviceType}
  //       dotListClass="custom-dot-list-style"
  //       itemClass="carousel-item-padding-40-px"
  //     >
  //       {users.map((user) => (
  //         <UserReview key={user.id} {...user} />
  //       ))}

  //     </Carousel>
  //   </div>
  // ); 
// } 

UsersReviews.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
      },
    ),
  ).isRequired,
};

export default UsersReviews;
