import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import cn from "classnames";

function MoviesCardList({ movies, children, modType }) {
  const classNames = cn("movies-card-list", {
    [`movies-card-list_type_${modType}`]: modType,
  });

  return (
    <section className={classNames}>
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
