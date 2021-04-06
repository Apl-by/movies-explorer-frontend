const options = {
  // baseUrl: "https://api.aplby.students.nomoredomains.icu",
  baseUrl: "http://localhost:3000",
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
      headers: this._headers,
      body: JSON.stringify(data),
    })
      .then(this._handleResToJson)
      .then(this._handleResponse);
  }

  signout() {
    return fetch(`${this._baseUrl}/signout`, {
      method: "POST",
      headers: this._headers,
    })
      .then(this._handleResToJson)
      .then(this._handleResponse);
  }

  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: { ...this._headers, credentials: "include" },
    })
      .then(this._handleResToJson)
      .then(this._handleResponse);
  }

  updateUser(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: { ...this._headers, credentials: "include" },
      body: JSON.stringify(data),
    })
      .then(this._handleResToJson)
      .then(this._handleResponse);
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: { ...this._headers, credentials: "include" },
    })
      .then(this._handleResToJson)
      .then(this._handleResponse);
  }

  createMovies(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: { ...this._headers, credentials: "include" },
      body: JSON.stringify(data),
    })
      .then(this._handleResToJson)
      .then(this._handleResponse);
  }

  deleteMovies(data) {
    return fetch(`${this._baseUrl}/movies/movieId`, {
      method: "DELETE",
      headers: { ...this._headers, credentials: "include" },
      body: JSON.stringify(data),
    })
      .then(this._handleResToJson)
      .then(this._handleResponse);
  }
}

export const mainApi = new MainApi(options);
