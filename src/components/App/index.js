/* eslint-disable no-console */
// == Import npm
import React, { useEffect } from 'react';
import {
  Route, Switch, Redirect, useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import jwt_decode from 'jwt-decode';

// == Import Locaux
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import HomePageHeader from 'src/components/HomePageHeader';
// import SearchBar from 'src/components/SearchBar';
import HomePageFonctionnalities from 'src/components/HomePageFonctionnalities';
import HomePageMap from 'src/components/HomePageMap';
import UsersReviews from 'src/components/UsersReviews';
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
import Loading from 'src/components/Loading';

import SignIn from 'src/containers/SignIn';
import LogIn from 'src/containers/LogIn';

// == Import Data
import DataFile from 'src/data/ProfileList';
import DataTeam from 'src/data/DataTeam';
import users from 'src/data/users';

// == Import Style
import './styles.css';

// == Composant

const App = ({
  saveConnectedUserData, setIsConnected, isConnected, loadHobbiesList, loadServicesList, tokenFromState, saveTokenInState
}) => {
  // récupération du chemin
  const pathName = useLocation().pathname;
  console.log(pathName);

  // useEffect(() => {
  //   // if no token in the state
  //   if (!jwtFromState) {
  //     // check the cookie
  //     const jwtFromCookie = cookies.jwt;
  //     // if token in the cookie, save it in the state
  //     if (jwtFromCookie) {
  //       saveJWT(jwtFromCookie);
  //     }
  //   }
  //   // if token in the state
  //   else {
  //     // save it in the cookie
  //     setCookie('jwt', jwtFromState);
  //     // load user data
  //     loadUserData();
  //   }
  // }, [jwtFromState]);

  // useEffect(() => {
  //   if (userToken != null) {
  //     const decodedToken = jwt_decode(userToken);
  //     console.log(decodedToken);
  //     const dateNow = Math.round(Date.now() / 1000);
  //     console.log(dateNow);

  //     if (decodedToken.exp - 600 > dateNow) {
  //       saveConnectedUserData(decodedToken);
  //       console.log('je suis déjà connecté');
  //       setIsConnected(true);
  //     }
  //     else {
  //       console.log('Token expiré');
  //       localStorage.removeItem('token');
  //       setIsConnected(false);
  //     }
  //   }
  //   else {
  //     console.log('je ne suis pas encore connecté');
  //   }
  //   console.log('on set le loading à false');
  // }, []);

  useEffect(() => {
    const userTokenFromLocalStorage = localStorage.getItem('token');
    const decodedToken = jwt_decode(userTokenFromLocalStorage);
    // if no token in the state
    if (!tokenFromState) {
      // check LocalStorage
      // const userTokenFromLocalStorage = localStorage.getItem('token');
      // if token in LocalStorage
      if (userTokenFromLocalStorage) {
        // check if not outdated
        console.log(decodedToken);
        const dateNow = Math.round(Date.now() / 1000);
        console.log(dateNow);
        // if not outdated
        if (decodedToken.exp - 600 > dateNow) {
          saveTokenInState(userTokenFromLocalStorage);
          saveConnectedUserData(decodedToken);
          console.log('je suis déjà connecté');
          // setIsConnected(true);
        }
        else {
          console.log('Token expiré');
          localStorage.removeItem('token');
          // setIsConnected(false);
        }
      }
    }
    // if token in the state
    else {
      // save it in the localStorage
      localStorage.setItem('token', (tokenFromState));
    }
  }, [tokenFromState]);

  // -- gestion du scroll
  const location = useLocation();
  useEffect(
    () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      console.log('le pathname a changé');
    },
    [pathName],
  );

  return (
    <div className="app">
      <Footer />
      <Header />
      <LogIn />
      <SignIn />
      <Switch>
        <Route path="/" exact>
          <HomePageHeader />
          <HomePageFonctionnalities />
          <HomePageMap />
          <UsersReviews users={users} />
          <LogIn />
        </Route>
        <Route path="/resultats" exact>
          <SearchBar />
          <div className="app__ResultDesktop">
            <MapResults />
            <ProfilesResults data={DataFile} />
          </div>
        </Route>
        <Route path="/notre-reseau" exact>
          <UsersCards />
        </Route>
        <Route path="/notre-reseau/utilisateur/:id" exact>
          <Profile isLoading />
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
    </div>
  );
};

App.propTypes = {
  saveConnectedUserData: PropTypes.func.isRequired,
  // isConnected: PropTypes.bool.isRequired,
  // loading: PropTypes.bool,
  loadHobbiesList: PropTypes.func.isRequired,
  loadServicesList: PropTypes.func.isRequired,
};

// App.defaultProps = {
//   loading: false,
// };

// == Export
export default App;
