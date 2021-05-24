/* eslint-disable no-console */
// == Import npm
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Route, Switch, useLocation, useHistory,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import jwt_decode from 'jwt-decode';

// == Import Locaux
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import HomePageHeader from 'src/components/HomePageHeader';
import HomePageFonctionnalities from 'src/components/HomePageFonctionnalities';
import HomePageMap from 'src/components/HomePageMap';

import UsersReviews from 'src/containers/UsersReviews';

import ProfilesResults from 'src/containers/ProfilesResults';

import MapResults from 'src/containers/MapResults';
import Page404 from 'src/components/Page404';
import Page403 from 'src/components/Page403';
import SearchBar from 'src/containers/SearchBar';
import Profile from 'src/containers/Profile';
import MyProfile from 'src/containers/MyProfile';
import UsersCards from 'src/containers/UsersCards';
import ModifyProfile from 'src/containers/ModifyProfile';
import LegalsMentions from 'src/components/LegalsMentions';
import SiteMap from 'src/components/SiteMap';
import AboutUs from 'src/components/AboutUs';

import SignIn from 'src/containers/SignIn';
import LogIn from 'src/containers/LogIn';

// == Import Data
import DataTeam from 'src/data/DataTeam';

// == Import Style
import './styles.css';

// == Composant

const App = ({
  loadConnectedUserData, setIsConnected,
}) => {
  // récupération du chemin
  const pathName = useLocation().pathname;
  // console.log(pathName);

  useEffect(() => {
    const userTokenFromLocalStorage = localStorage.getItem('token');
    if (userTokenFromLocalStorage != null) {
      const decodedToken = jwt_decode(userTokenFromLocalStorage);
      // console.log(decodedToken);
      const dateNow = Math.round(Date.now() / 1000);
      // console.log(dateNow);
      if (decodedToken.exp - 600 > dateNow) {
        loadConnectedUserData(decodedToken.id);
        console.log('je suis déjà connecté');
        setIsConnected(true);
      }
      else {
        // console.log('Token expiré');
        localStorage.removeItem('token');
      }
    }
    else {
      console.log('je ne suis pas encore connecté');
    }
  }, []);

  // -- gestion du scroll
  useEffect(
    () => {
      window.scrollTo({ top: 0 });
      // console.log('le pathname a changé');
    },
    [pathName],
  );

  return (
    <div className="app">
      <Header />
      <LogIn />
      <SignIn />
      <Switch>
        <Route path="/" exact>
          <HomePageHeader />
          <HomePageFonctionnalities />
          <HomePageMap />
          <UsersReviews />
        </Route>
        <Route path="/resultats" exact>
          <SearchBar />
          <div className="app__ResultDesktop">
            <MapResults />
            <ProfilesResults />
          </div>
        </Route>
        <Route path="/notre-reseau" exact>
          <UsersCards />
        </Route>
        <Route path="/notre-reseau/utilisateur/:id" exact>
          <Profile />
        </Route>
        <Route path="/mon-profil" exact>
          <MyProfile />
        </Route>
        <Route path="/mon-profil/modifier" exact>
          <ModifyProfile />
        </Route>
        <Route path="/plan-du-site">
          <SiteMap />
        </Route>
        <Route path="/mentions-legales">
          <LegalsMentions />
        </Route>
        <Route path="/a-propos">
          <AboutUs dataTeam={DataTeam} />
        </Route>
        <Route path="/403">
          <Page403 />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
      <ToastContainer autoClose={2000} />
      <Footer />
    </div>
  );
};

App.propTypes = {
  loadConnectedUserData: PropTypes.func.isRequired,
  setIsConnected: PropTypes.func.isRequired,
};

// == Export
export default App;
