import { BASE_URL_MAIN_API } from "./config";

const options = {
  baseUrl: BASE_URL_MAIN_API,
  headers: { "Content-Type": "application/json" },
};

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _handleResToJson(res) {
    return res.json().then((result) => {
      return { ok: res.ok, status: res.status, body: result };
    });
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.body;
    }
    return Promise.reject({
      name: res.status,
      message: res.body.message,
    });
  }

  register(data) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    })
      .then(this._handleResToJson)
      .then(this._handleResponse);
  }

  login(data) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(data),
    })
      .then(this._handleResToJson)
      .then(this._handleResponse);
  }

  signout() {
    return fetch(`${this._baseUrl}/signout`, {
      credentials: "include",
      method: "POST",
      headers: this._headers,
    })
      .then(this._handleResToJson)
      .then(this._handleResponse);
  }

  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: "include",
      headers: this._headers,
    })
      .then(this._handleResToJson)
      .then(this._handleResponse);
  }

  updateUser(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(data),
    })
      .then(this._handleResToJson)
      .then(this._handleResponse);
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      credentials: "include",
      headers: this._headers,
    })
      .then(this._handleResToJson)
      .then(this._handleResponse);
  }

  createMovies(movieData) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(movieData),
    })
      .then(this._handleResToJson)
      .then(this._handleResponse);
  }

  deleteMovies(_id) {
    return fetch(`${this._baseUrl}/movies/${_id}`, {
      method: "DELETE",
      credentials: "include",
      headers: this._headers,
    })
      .then(this._handleResToJson)
      .then(this._handleResponse);
  }
}

export const mainApi = new MainApi(options);
