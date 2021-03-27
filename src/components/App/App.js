import "./App.css";
import Header from "../Header/Header";
import MainLending from "../MainLending/MainLending";
import MainMovies from "../MainMovies/MainMovies";
import MainSavedMovies from "../MainSavedMovies/MainSavedMovies";
import Footer from "../Footer/Footer";
import { headerPathes, footerPathes } from "./data";
import { useState } from "react";
import { useLocation, Switch, Route } from "react-router-dom";

function App() {
  let location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  console.log(location);
  return (
    <div className="app">
      {headerPathes.includes(location.pathname) && (
        <Header location={location} isLoggedIn={isLoggedIn} />
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
      </Switch>

      {footerPathes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
