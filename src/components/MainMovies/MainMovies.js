import "./MainMovies.css";
import Preloader from "../generic/Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Button from "../generic/Button/Button";
import { useEffect } from "react";
import { BTN_MARGIN } from "./data";

function MainMovies({
  isSearch,
  wasSearch,
  onSubmit,
  movies,
  deleteMovie,
  saveMovie,
  addCards,
  scrollY,
}) {
  useEffect(() => {
    window.scrollTo({
      top: scrollY,
      behavior: "smooth",
    });
  }, [scrollY]);

  const handleClickBtn = (e) => {
    const scrollY =
      window.pageYOffset + e.target.getBoundingClientRect().top - BTN_MARGIN;
    addCards(scrollY);
  };

  return (
    <main className="main-movies">
      <SearchForm onSubmit={onSubmit} />
      {isSearch && <Preloader />}
      {!movies.forRender.length && wasSearch && (
        <p className="main-movies__not-found">Ничего не найдено :(</p>
      )}
      {wasSearch && (
        <MoviesCardList
          movies={movies.forRender}
          deleteMovie={deleteMovie}
          saveMovie={saveMovie}
        >
          {!!movies.rest.length && (
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
