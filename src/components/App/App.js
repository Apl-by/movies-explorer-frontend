import "./App.css";
import Header from "../Header/Header";
import MainLending from "../MainLending/MainLending";
import MainMovies from "../MainMovies/MainMovies";
import MainSavedMovies from "../MainSavedMovies/MainSavedMovies";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import { headerPathes, footerPathes } from "./data";
import { useState } from "react";
import { useLocation, useHistory, Switch, Route } from "react-router-dom";

function App() {
  let location = useLocation();
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  console.log(location);
  return (
    <div className="app">
      {headerPathes.includes(location.pathname) && (
        <Header location={location} history={history} isLoggedIn={isLoggedIn} />
      )}

      <Switch>
        <Route exact path="/">
          <MainLending />
        </Route>
        <Route path="/movies">
          <MainMovies />
        </Route>
        <Route path="/saved-movies">
          <MainSavedMovies />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>

      {footerPathes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
