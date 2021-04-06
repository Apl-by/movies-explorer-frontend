import "./MainMovies.css";
import Preloader from "../generic/Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Button from "../generic/Button/Button";

function MainMovies({ isSearch, onSubmit }) {
  return (
    <main className="main-movies">
      {isSearch && <Preloader />}
      <SearchForm onSubmit={onSubmit} />
      <MoviesCardList movies={[]}>
        <Button type="button" value="Ещё" modType="more-cards" />
      </MoviesCardList>
    </main>
  );
}

export default MainMovies;
