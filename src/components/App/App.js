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
import SideBar from "../SideBar/SideBar";
import Modal from "../generic/Modal/Modal";
import useMediaQuery from "../../hooks/useMediaQuery";
import { headerPathes, footerPathes } from "./data";
import { moviesApi } from "../../utils/MoviesApi";
import { handleMoviesData } from "../../utils/utils";
import { useState, useEffect } from "react";
import { useLocation, useHistory, Switch, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [apiError, setApiError] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const history = useHistory();
  let isTablet = useMediaQuery("max-width: 950px");
  let location = useLocation();

  const handleSearchMovies = (value) => {
    setIsSearch(true);
    moviesApi
      .getMovies()
      .then((res) => {
        handleMoviesData(res);
      })
      .catch((err) => setApiError([err.name, err.message]))
      .finally(() => setIsSearch(false));
  };

  const handleBurgerClick = () => {
    setIsSideBarOpen(true);
  };

  const handleCloseSideBar = () => {
    setIsSideBarOpen(false);
  };

  const handleCloseModal = () => {
    setApiError({});
  };

  useEffect(() => {
    if (!isSideBarOpen) return;

    if (!isTablet) {
      setIsSideBarOpen(false);
    }
  }, [isTablet, isSideBarOpen]);

  // Для ревью -------------------------
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    history.push("/movies");
  };

  const handleRegister = (e) => {
    e.preventDefault();
  };

  const handleExitProfile = () => {
    setIsLoggedIn(false);
    history.push("/signin");
  };

  const handleBack = () => {
    history.goBack();
  };

  const handleOpenModal = () => {
    setApiError({ err: "Ошибка" });
  };
  console.log(location);
  //------------------------------------

  return (
    <div className="app">
      {headerPathes.includes(location.pathname) && (
        <Header
          location={location}
          history={history}
          isLoggedIn={isLoggedIn}
          onClick={handleBurgerClick}
          isTablet={isTablet}
        />
      )}

      <Switch>
        <Route exact path="/">
          <MainLending />
        </Route>
        <Route path="/movies">
          <MainMovies isSearch={isSearch} onSubmit={handleSearchMovies} />
        </Route>
        <Route path="/saved-movies">
          <MainSavedMovies />
        </Route>
        <Route path="/profile">
          <Profile onClick={handleExitProfile} />
        </Route>
        <Route path="/signup">
          <Register onSubmit={handleRegister} />
        </Route>
        <Route path="/signin">
          <Login onSubmit={handleLogin} />
        </Route>
        <Route path="*">
          <NotFound onClick={handleBack} />
        </Route>
      </Switch>

      {footerPathes.includes(location.pathname) && <Footer />}

      <SideBar
        history={history}
        close={handleCloseSideBar}
        isOpen={isSideBarOpen}
      />

      <Modal apiError={apiError} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
