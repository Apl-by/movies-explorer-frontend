import "./MainSavedMovies.css";
import Preloader from "../generic/Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState } from "react";

function MainSavedMovies({ props }) {
  // Для ревью
  const [isSearch, setIsSearch] = useState(false);
  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearch(!isSearch);
  };

  const fakeArr = Array.from({ length: 3 }, (i) => i);
  //--------------------------------------------------

  return (
    <main className="main-saved-movies">
      {isSearch && <Preloader />}
      <SearchForm onSearch={handleSearch} />
      <MoviesCardList movies={fakeArr} modType="saved-movies" />
    </main>
  );
}

export default MainSavedMovies;