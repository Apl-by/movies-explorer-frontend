import "./App.css";
import Header from "../Header/Header";
import MainLending from "../MainLending/MainLending";
import MainMovies from "../MainMovies/MainMovies";
import MainSavedMovies from "../MainSavedMovies/MainSavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import { headerPathes, footerPathes } from "./data";
import { useState } from "react";
import { useLocation, useHistory, Switch, Route } from "react-router-dom";

function App() {
  let location = useLocation();
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Для ревью
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    history.push("/movies");
  };

  const handleExitProfile = () => {
    setIsLoggedIn(false);
    history.push("/signin");
  };

  const handleBack = () => {
    history.goBack();
  };
  console.log(location);
  //------------------------------------
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
          <Profile onClick={handleExitProfile} />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login onSubmit={handleLogin} />
        </Route>
        <Route path="*">
          <NotFound onClick={handleBack} />
        </Route>
      </Switch>

      {footerPathes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
