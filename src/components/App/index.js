// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import style
import 'semantic-ui-css/semantic.min.css';


// == Import Locaux
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import HomePageHeader from 'src/components/HomePageHeader';
import SearchBar from 'src/components/SearchBar';
import HomePageFonctionnalities from 'src/components/HomePageFonctionnalities';
import HomePageMap from 'src/components/HomePageMap';
import UsersReviews from 'src/components/UsersReviews';
import ProfilesResults from 'src/components/ProfilesResults';
import MapResults from 'src/components/MapResults';
import Profile from 'src/components/Profile';
import Page404 from 'src/components/Page404';
import ProfilesCards from 'src/components/ProfilesCards';
import MapTest from 'src/containers/MapTest';

import SignIn from 'src/containers/SignIn';
import LogIn from 'src/components/LogIn';

// == Import
import DataFile from 'src/data/ProfileList';
import DataProfile from 'src/data/DataProfile';
import './styles.css';
import users from 'src/data/users';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <SignIn />
    <Switch>
      <Route path="/" exact>
        <HomePageHeader />
        <HomePageFonctionnalities />
        <HomePageMap />
        <UsersReviews users={users} />
        <LogIn />
        <Footer />
      </Route>
      <Route path="/resultats" exact>
        <SearchBar />
        <div className="app__ResultDesktop">
          <MapResults />
          <ProfilesResults data={DataFile} />
        </div>
      </Route>
      <Route path="/notre-reseau/utilisateur" exact>
        <Profile />
        <Footer />
      </Route>
      <Route path="/notre-reseau" exact>
        <SearchBar />
        <ProfilesCards networkProfiles={DataProfile} />
      </Route>
      <Route path="/map" exact>
        <MapTest />
      </Route>
      <Route>
        <Page404 />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
