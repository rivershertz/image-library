const env = import.meta.env;
const url = env.IS_PRODUCTION ? env.BASE_URL_PROD : 'http://localhost:3000';

class Api {
  constructor({baseUrl}) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  }

  async getInitialImages() {
    return fetch(`${this._baseUrl}?q=backgrounds&page=1&limit=9`).then(
      this._checkResponse
    );
  }

  async updateCategory(category) {
    return fetch(`${this._baseUrl}?q=${category}&page=1&limit=9`).then(
      this._checkResponse
    );
  }

  async paginateToNext(page, category) {
    return fetch(`${this._baseUrl}?q=${category}&page=${page}&limit=9`).then(
      this._checkResponse
    );
  }
  async paginateToPrev(page, category) {
    return fetch(`${this._baseUrl}?q=${category}&page=${page}&limit=9`).then(
      this._checkResponse
    );
  }
}

const api = new Api({
  baseUrl: url,
});

export default api;
