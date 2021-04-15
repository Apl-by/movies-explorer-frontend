import { BASE_URL_MOVIES_API, ERR_API } from "./config";

const options = {
  baseUrl: BASE_URL_MOVIES_API,
  headers: { "Content-Type": "application/json" },
};
class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject({
        name: res.status,
        message: ERR_API,
      });
    });
  }
}

export const moviesApi = new MoviesApi(options);
