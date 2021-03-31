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

  const fakeArr = Array.from({ length: 3 }, (i) => {
    return { img: null };
  });
  //--------------------------------------------------

  return (
    <main className="main-saved-movies">
      {isSearch && <Preloader />}
      <SearchForm onSubmit={handleSearch} />
      <MoviesCardList movies={fakeArr} />
    </main>
  );
}

export default MainSavedMovies;
