import "./MainSavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState } from "react";

function MainSavedMovies({ movies, foundMovies, deleteMovie, onSubmit }) {
  const [wasSearch, setWasSearch] = useState(false);

  const handleSubmit = (inputValue, isChecked) => {
    setWasSearch(true);
    onSubmit(inputValue, isChecked);
  };

  return (
    <main className="main-saved-movies">
      <SearchForm onSubmit={handleSubmit} parent="saved-movies" />
      {!foundMovies.length && wasSearch && (
        <p className="main-movies__not-found">Ничего не найдено :(</p>
      )}
      <MoviesCardList
        movies={wasSearch ? foundMovies : movies}
        deleteMovie={deleteMovie}
      />
    </main>
  );
}

export default MainSavedMovies;
