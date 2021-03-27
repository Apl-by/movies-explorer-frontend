import "./MainMovies.css";
import Preloader from "../generic/Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Button from "../generic/Button/Button";
import { useState } from "react";

function MainMovies() {
  // Для ревью
  const [isSearch, setIsSearch] = useState(false);
  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearch(!isSearch);
  };

  const fakeArr = Array.from({ length: 12 }, (i) => i);
  //--------------------------------------------------

  return (
    <main className="main-movies">
      {isSearch && <Preloader />}
      <SearchForm onSearch={handleSearch} />
      <MoviesCardList movies={fakeArr}>
        <Button type="button" value="Ещё" modType="more-cards" />
      </MoviesCardList>
    </main>
  );
}

export default MainMovies;
