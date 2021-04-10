import "./MainMovies.css";
import Preloader from "../generic/Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Button from "../generic/Button/Button";
import { useState, useEffect } from "react";
import { config, BTN_MARGIN } from "./data";
import { handleFirstRender, addMovies } from "../../utils/utils";

function MainMovies({
  isSearch,
  wasSearch,
  onSubmit,
  movies,
  isTablet,
  isMobile,
}) {
  const [cardsForRender, setCardsForRender] = useState({
    forRender: [],
    rest: [],
  });
  const renderConfig = isMobile
    ? config.mobile
    : isTablet
    ? config.tablet
    : config.desktop;
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setCardsForRender(handleFirstRender(movies, renderConfig));
  }, [movies, renderConfig]);

  useEffect(() => {
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  }, [scrollPosition]);

  const handleClickBtn = (e) => {
    setCardsForRender(addMovies(cardsForRender, renderConfig));
    const scrollTopPosition =
      window.pageYOffset + e.target.getBoundingClientRect().top - BTN_MARGIN;
    setScrollPosition(scrollTopPosition);
  };

  return (
    <main className="main-movies">
      <SearchForm onSubmit={onSubmit} />
      {isSearch && <Preloader />}
      {!movies.length && wasSearch && (
        <p className="main-movies__not-found">Ничего не найдено :(</p>
      )}
      {wasSearch && (
        <MoviesCardList movies={cardsForRender.forRender}>
          {!!cardsForRender.rest.length && (
            <Button
              type="button"
              value="Ещё"
              modType="more-cards"
              onClick={handleClickBtn}
            />
          )}
        </MoviesCardList>
      )}
    </main>
  );
}

export default MainMovies;
