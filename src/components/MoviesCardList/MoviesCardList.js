import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, children, modType }) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {movies.map((i, ind) => (
          <li key={ind}>
            <MoviesCard img={i.img} />
          </li>
        ))}
      </ul>
      {children}
    </section>
  );
}

export default MoviesCardList;
