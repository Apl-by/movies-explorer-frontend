import { BASE_URL_MOVIES_API } from "./config";

export const handleMoviesData = (data) => {
  return data
    .map((i) => {
      if (
        !(
          i.image?.url &&
          i.trailerLink &&
          i.image?.formats?.thumbnail?.url &&
          (i.nameRU ? !i.nameRU.match(/[a-z]/i) : i.nameRU) &&
          (i.nameEN ? !i.nameEN.match(/[а-яё]/i) : i.nameEn)
        )
      ) {
        return null;
      }

      return {
        movieId: i.id,
        country: i.country || "Unknown",
        director: i.director || "Unknown",
        duration: i.duration,
        year: i.year,
        description: i.description,
        image: BASE_URL_MOVIES_API + i.image.url,
        trailer: i.trailerLink,
        thumbnail: BASE_URL_MOVIES_API + i.image.formats.thumbnail.url,
        nameRU: i.nameRU,
        nameEN: i.nameEN,
      };
    })
    .filter((i) => i);
};

export const handleKeyword = (movies, inputValue) => {
  const keywords = inputValue
    .split(" ")
    .map((i) => i.replace(/[.?+*!-]/g, "\\$&"))
    .filter((i) => i);
  const regexpStr = keywords.join("|");

  const regexp = new RegExp(regexpStr, "i");

  return movies.filter((i) => {
    const match =
      i.nameRU.match(regexp) ||
      i.nameEN.match(regexp) ||
      i.country.match(regexp) ||
      i.director.match(regexp) ||
      i.year.match(regexp);
    return match;
  });
};

export const handleFirstRender = (movies, { n }) => {
  const cloneMovies = [...movies];
  const moviesForRender = cloneMovies.splice(0, n);
  return {
    forRender: moviesForRender,
    rest: cloneMovies,
  };
};

export const addMovies = ({ forRender, rest }, { add }) => {
  const cloneRest = [...rest];
  const addedMovies = cloneRest.splice(0, add);
  return {
    forRender: [...forRender, ...addedMovies],
    rest: cloneRest,
  };
};
