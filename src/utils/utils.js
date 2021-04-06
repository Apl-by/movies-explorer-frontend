export const handleMoviesData = (data) => {
  const BASE_URL = "https://api.nomoreparties.co";

  return data
    .map((i) => {
      if (
        !(i.image?.url && i.trailerLink && i.image?.formats?.thumbnail?.url)
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
        image: BASE_URL + i.image.url,
        trailer: i.trailerLink,
        thumbnail: BASE_URL + i.image.formats.thumbnail.url,
        nameRU: i.nameRU,
        nameEN: i.nameEN || "Unknown",
      };
    })
    .filter((i) => i);
};
