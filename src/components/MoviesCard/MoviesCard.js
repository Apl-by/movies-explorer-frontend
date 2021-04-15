import "./MoviesCard.css";
import Button from "../generic/Button/Button";
import { useLocation } from "react-router-dom";

function MoviesCard({ movie, deleteMovie, saveMovie }) {
  let location = useLocation();
  const { pathname: path } = location;
  const isSaved = movie._id;

  const btnConfig =
    path === "/saved-movies"
      ? { value: "", modType: "delete" }
      : isSaved
      ? { value: "", modType: "saved-movie" }
      : { value: "Сохранить", modType: "save-movie" };

  const declension = String(movie.duration).match(/(?<!1)1$/)
    ? "минутa"
    : String(movie.duration).match(/(?<!1)[234]$/)
    ? "минуты"
    : "минут";

  const handleClick = () => {
    if (movie._id) {
      deleteMovie(movie);
      return;
    }
    saveMovie(movie);
  };

  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <p className="movies-card__title">{movie.nameRU}</p>
        <p className="movies-card__time">{`${movie.duration} ${declension}`}</p>
      </div>
      <a
        href={movie.trailer}
        target="_blank"
        rel="noreferrer"
        className="movies-card__link"
      >
        <span className="movies-card__stretch"></span>
        <img
          src={movie.image}
          alt={movie.nameEN}
          className="movies-card__poster"
        />
      </a>
      <div className="movies-card__btn">
        <Button
          type="submit"
          value={btnConfig.value}
          modType={btnConfig.modType}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default MoviesCard;
