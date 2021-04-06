import "./MainSavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function MainSavedMovies({ onSubmit }) {
  // Для ревью
  const fakeArr = Array.from({ length: 3 }, (i) => {
    return { img: null };
  });
  //--------------------------------------------------

  return (
    <main className="main-saved-movies">
      <SearchForm onSubmit={onSubmit} />
      <MoviesCardList movies={fakeArr} />
    </main>
  );
}

export default MainSavedMovies;
