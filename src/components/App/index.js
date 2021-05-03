// == Import npm
import React from 'react';
import Footer from 'src/components/Footer';
import HomePageHeader from 'src/components/HomePageHeader';
import SearchBar from 'src/components/SearchBar';
import Explaination from 'src/components/Explaination';
import HomePageMap from 'src/components/HomePageMap';
import UsersReviews from 'src/components/UsersReviews';
import ProfilesResults from 'src/components/ProfilesResults';
import OtherPagesHeader from 'src/components/OtherPagesHeader';
import MapResults from 'src/components/MapResults';
import Profile from 'src/components/Profile';

import SignIn from 'src/components/SignIn';
import LogIn from 'src/components/LogIn';

// == Import
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <img src={reactLogo} alt="react logo" />
    <div>
      HOME PAGE
      <HomePageHeader />
      <Explaination />
      <HomePageMap />
      <UsersReviews />
      <SignIn />
      <LogIn />
      <Footer />
    </div>
    <div>
      PAGE RESULTS
      <OtherPagesHeader />
      <SearchBar />
      <ProfilesResults />
      <MapResults />
      <Profile />
    </div>
    <div>
      PAGE PROFILE
      <OtherPagesHeader />
      <Profile />
    </div>
  </div>
);

// == Export
export default App;
