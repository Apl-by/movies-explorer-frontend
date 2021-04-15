import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import useMediaQuery from "../../hooks/useMediaQuery";
import { headerPathes, footerPathes } from "./data";
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import {
  handleMoviesData,
  getSearchResult,
  handleSaveStatus,
  deleteCard,
  changeCardStatus,
  handleFirstRender,
  addMovies,
} from "../../utils/utils";
import { ERR_API, RENDER_CONFIG } from "../../utils/config";
import { useState, useEffect, useCallback } from "react";
import { useLocation, useHistory, Switch, Route } from "react-router-dom";

function App() {
  const history = useHistory();
  let location = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [allMovies, setAllMovies] = useState(
    JSON.parse(localStorage.getItem("movies"))
  );
  const [savedMovies, setSavedMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [cardsForRender, setCardsForRender] = useState({
    forRender: [],
    rest: [],
  });
  const [wasUpdateCard, setWasUpdateCard] = useState(false);
  const [cardsScrollY, setCardsScrollY] = useState(0);
  const [foundSavedMovies, setFoundSavedMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNeedRequest, setIsNeedRequest] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [modalError, setModalError] = useState([]);
  const [mainApiError, setMainApiError] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [wasSearch, setWasSearch] = useState(false);
  const [locationBarPath, setLocationBarPath] = useState(location.pathname);
  let isTablet = useMediaQuery("max-width: 768px");
  let isMobile = useMediaQuery("max-width: 480px");

  const handleRegister = (values) => {
    const { email, password } = values;
    mainApi
      .register(values)
      .then(() =>
        mainApi.login({ email, password }).then(() => {
          setIsNeedRequest(true);
        })
      )
      .catch((err) => setMainApiError(err.message));
  };

  const handleLogin = (values) => {
    mainApi
      .login(values)
      .then(() => {
        setIsNeedRequest(true);
      })
      .catch((err) => setMainApiError(err.message));
  };

  useEffect(() => {
    Promise.all([mainApi.getUser(), mainApi.getMovies()])
      .then(([user, movies]) => {
        setCurrentUser(user);
        setSavedMovies(movies);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err.name, err.message);
      });
  }, []);

  useEffect(() => {
    if (!isNeedRequest) return;
    Promise.all([mainApi.getUser(), mainApi.getMovies()])
      .then(([user, movies]) => {
        setCurrentUser(user);
        setSavedMovies(movies);
        setIsLoggedIn(true);
        setLocationBarPath("/movies");
      })
      .catch((err) => {
        setModalError([err.name, err.message]);
      })
      .finally(() => {
        setIsNeedRequest(false);
      });
  }, [isNeedRequest, history]);

  useEffect(() => {
    if (!isLoggedIn) return;
    history.push(locationBarPath);
  }, [isLoggedIn, locationBarPath, history]);

  // ---------Поиск фильмов -----------------
  const handleSearchMovies = useCallback(
    (inputValue, checkbox) => {
      setIsSearch(true);
      setWasUpdateCard(false);
      if (!allMovies) {
        moviesApi
          .getMovies()
          .then((res) => {
            const movies = handleMoviesData(res);
            const foundMovies = getSearchResult(movies, inputValue, checkbox);
            handleSaveStatus(foundMovies, savedMovies);
            localStorage.setItem("movies", JSON.stringify(movies));
            setAllMovies(movies);
            setFoundMovies(foundMovies);
            setWasSearch(true);
          })
          .catch((err) => {
            setModalError([err.name, ERR_API]);
            setWasSearch(false);
          })
          .finally(() => setIsSearch(false));
        return;
      }
      const foundMovies = getSearchResult(allMovies, inputValue, checkbox);
      handleSaveStatus(foundMovies, savedMovies);
      setFoundMovies(foundMovies);
      setWasSearch(true);
      setIsSearch(false);
    },
    [allMovies, savedMovies]
  );

  const handleSearchSavedMovies = useCallback(
    (inputValue, checkbox) => {
      setFoundSavedMovies(getSearchResult(savedMovies, inputValue, checkbox));
    },
    [savedMovies]
  );

  // ------- Отрисовка заданного количества карточек --------
  const renderConfig = isMobile
    ? RENDER_CONFIG.mobile
    : isTablet
    ? RENDER_CONFIG.tablet
    : RENDER_CONFIG.desktop;

  const handleAddingCards = (scrollY) => {
    setCardsForRender(addMovies(cardsForRender, renderConfig));
    setCardsScrollY(scrollY);
  };

  useEffect(() => {
    if (wasUpdateCard) return;
    setCardsForRender(handleFirstRender(foundMovies, renderConfig));
  }, [wasUpdateCard, foundMovies, renderConfig]);

  //-----------------------------------------------------

  const deleteMovie = (movie) => {
    setWasUpdateCard(true);
    mainApi
      .deleteMovies(movie._id)
      .then(() => {
        setFoundMovies(changeCardStatus(foundMovies, movie.movieId, movie._id));
        setSavedMovies(deleteCard(savedMovies, movie._id));
        setFoundSavedMovies(deleteCard(foundSavedMovies, movie._id));
      })
      .catch((err) => setModalError([err.name, err.message]));
    return;
  };

  const saveMovie = (movie) => {
    const cloneMovie = { ...movie };
    delete cloneMovie._id;
    setWasUpdateCard(true);
    mainApi
      .createMovies(cloneMovie)
      .then((card) => {
        setFoundMovies(changeCardStatus(foundMovies, movie.movieId, card._id));
        setSavedMovies([...savedMovies, card]);
      })
      .catch((err) => setModalError([err.name, err.message]));
  };

  useEffect(() => {
    setMainApiError("");
    setModalError([]);
    setCardsScrollY(0);
    setWasUpdateCard(false);
    setFoundMovies([]);
    setWasSearch(false);
  }, [location.pathname]);

  const patchUserData = (user) => {
    mainApi
      .updateUser(user)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => setMainApiError(err.message));
  };

  const signout = () => {
    mainApi
      .signout()
      .then(() => {
        setCurrentUser({});
        setSavedMovies([]);

        setIsLoggedIn(false);
        history.push("/");
      })
      .catch((err) => setModalError([err.name, err.message]));
  };

  const handleBurgerClick = () => {
    setIsSideBarOpen(true);
  };

  const handleCloseSideBar = () => {
    setIsSideBarOpen(false);
  };

  const handleCloseModal = () => {
    setModalError({});
  };

  useEffect(() => {
    if (!isSideBarOpen) return;

    if (!isTablet) {
      setIsSideBarOpen(false);
    }
  }, [isTablet, isSideBarOpen]);

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
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
          <Route path="/signup">
            <Register onSubmit={handleRegister} apiError={mainApiError} />
          </Route>
          <Route path="/signin">
            <Login onSubmit={handleLogin} apiError={mainApiError} />
          </Route>
          <ProtectedRoute
            component={Profile}
            path="/profile"
            isLoggedIn={isLoggedIn}
            onSignout={signout}
            onSubmit={patchUserData}
            apiError={mainApiError}
          ></ProtectedRoute>
          <Route exact path="/">
            <MainLending />
          </Route>
          <ProtectedRoute
            component={MainMovies}
            path="/movies"
            isLoggedIn={isLoggedIn}
            isSearch={isSearch}
            wasSearch={wasSearch}
            movies={cardsForRender}
            onSubmit={handleSearchMovies}
            deleteMovie={deleteMovie}
            saveMovie={saveMovie}
            addCards={handleAddingCards}
            scrollY={cardsScrollY}
          ></ProtectedRoute>
          <ProtectedRoute
            component={MainSavedMovies}
            path="/saved-movies"
            isLoggedIn={isLoggedIn}
            movies={savedMovies}
            foundMovies={foundSavedMovies}
            deleteMovie={deleteMovie}
            onSubmit={handleSearchSavedMovies}
          ></ProtectedRoute>
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

        <Modal modalError={modalError} onClose={handleCloseModal} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
