// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import Locaux
import Footer from 'src/components/Footer';
import HomePageHeader from 'src/components/HomePageHeader';
import SearchBar from 'src/components/SearchBar';
import HomePageFonctionnalities from 'src/components/HomePageFonctionnalities';
import HomePageMap from 'src/components/HomePageMap';
import UsersReviews from 'src/components/UsersReviews';
import ProfilesResults from 'src/components/ProfilesResults';
import OtherPagesHeader from 'src/components/OtherPagesHeader';
import MapResults from 'src/components/MapResults';
import Profile from 'src/components/Profile';
import Page404 from 'src/components/Page404';

import SignIn from 'src/components/SignIn';
import LogIn from 'src/components/LogIn';

// == Import
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Switch>
      <Route path="/" exact>
        <HomePageHeader />
        <HomePageFonctionnalities />
        <HomePageMap />
        <UsersReviews />
        <SignIn />
        <LogIn />
        <Footer />
      </Route>
      <Route path="/resultats" exact>
        <OtherPagesHeader />
        <SearchBar />
        <ProfilesResults />
        <MapResults />
        <Profile />
        <Footer />
      </Route>
      <Route path="/notre-reseau/utilisateur" exact>
        <OtherPagesHeader />
        <Profile />
        <Footer />
      </Route>
      <Route>
        <Page404 />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
