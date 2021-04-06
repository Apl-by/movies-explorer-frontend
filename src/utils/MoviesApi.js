const options = {
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: { "Content-Type": "application/json" },
};
const errMoviesApi =
  "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";

class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getMovies() {
    return fetch(this._baseUrl, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject({
        name: res.status,
        message: errMoviesApi,
      });
    });
  }
}

export const moviesApi = new MoviesApi(options);
