import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, deleteMovie, saveMovie, children }) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {movies.map((i) => (
          <li key={i.movieId}>
            <MoviesCard
              movie={i}
              deleteMovie={deleteMovie}
              saveMovie={saveMovie}
            />
          </li>
        ))}
      </ul>
      {children}
    </section>
  );
}

export default MoviesCardList;
