// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import style
//import 'semantic-ui-css/semantic.min.css';

// == Import Locaux
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import HomePageHeader from 'src/components/HomePageHeader';
import SearchBar from 'src/components/SearchBar';
import HomePageFonctionnalities from 'src/components/HomePageFonctionnalities';
import HomePageMap from 'src/components/HomePageMap';
import UsersReviews from 'src/components/UsersReviews';
import ProfilesResults from 'src/components/ProfilesResults';
import MapResults from 'src/containers/MapResults';
import Profile from 'src/components/Profile';
import Page404 from 'src/components/Page404';
import ProfilesCards from 'src/components/ProfilesCards';
import MapTest from 'src/containers/MapTest';
import TestSearchBar from 'src/containers/TestSearchBar';
import MapResults from 'src/components/MapResults';
import Profile from 'src/containers/Profile';
import Page404 from 'src/components/Page404';
import UsersCards from 'src/containers/UsersCards';
import ModifyProfile from 'src/components/ModifyProfile';
import LegalsMentions from 'src/components/LegalsMentions';
import SiteMap from 'src/components/SiteMap';
import AboutUs from 'src/components/AboutUs';


import SignIn from 'src/containers/SignIn';
import LogIn from 'src/containers/LogIn';

// == Import Data
import DataFile from 'src/data/ProfileList';
import DataProfile from 'src/data/DataProfile';
import DataHobbies from 'src/data/DataHobbies';
import DataServices from 'src/data/DataServices';
import users from 'src/data/users';
import DataTeam from 'src/data/DataTeam';


// == Import Style
import './styles.css';


// == Composant
const App = () => (
  <div className="app">
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
        <Footer />
      </Route>
      <Route path="/resultats" exact>
        <SearchBar />
        <div className="app__ResultDesktop">
          <MapResults />
          <ProfilesResults data={DataFile} />
          <Footer />
        </div>
      </Route>
      <Route path="/notre-reseau" exact>
        <SearchBar />
        <UsersCards networkProfiles={DataProfile} />
      </Route>
      <Route path="/notre-reseau/utilisateur/:id" exact>
        <Profile isMyProfile={false} />
        <Footer />
      </Route>
      <Route path="/mon-profil" exact>
        <Profile isMyProfile />
        <Footer />
      </Route>
      <Route path="/mon-profil/modifier" exact>
        <ModifyProfile dataHobbies={DataHobbies} dataServices={DataServices}/>
        <Footer />
      </Route>
      <Route path="/notre-reseau" exact>
        <SearchBar />
        <ProfilesCards networkProfiles={DataProfile} />
      </Route>
      <Route path="/map" exact>
        <MapTest />
      </Route>
      <Route path="/search" exact>
        <TestSearchBar />
        <Footer />
      </Route>
      <Route path="/plan-du-site">
        <SiteMap />
        <Footer />
        </Route>
      <Route path="/mentions-legales">
        <LegalsMentions />
        <Footer />
      </Route>
      <Route path="/a-propos">
        <AboutUs dataTeam={DataTeam}/>
        <Footer />
      </Route>
      <Route>
        <Page404 />
      </Route>
    </Switch>

  </div>
  
      </Switch>
     </div>
);

// == Export
export default App;
