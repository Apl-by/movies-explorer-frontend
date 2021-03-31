import "./MainMovies.css";
import Preloader from "../generic/Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Button from "../generic/Button/Button";
import { useState } from "react";

import TEMPLATE_PIC from "../../images/TEMPLATE_PIC.jpg";

function MainMovies() {
  // Для ревью
  const [isSearch, setIsSearch] = useState(false);
  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearch(!isSearch);
  };

  const fakeArr = Array.from({ length: 12 }, (i, ind) =>
    ind !== 2 ? { img: TEMPLATE_PIC } : { img: null }
  );
  //--------------------------------------------------

  return (
    <main className="main-movies">
      {isSearch && <Preloader />}
      <SearchForm onSubmit={handleSearch} />
      <MoviesCardList movies={fakeArr}>
        <Button type="button" value="Ещё" modType="more-cards" />
      </MoviesCardList>
    </main>
  );
}

export default MainMovies;
