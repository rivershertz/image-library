const BASE_URL =
  'https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q';
class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  }

  async getInitialImages() {
    return fetch(`${this._baseUrl}={landscape}`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: BASE_URL,
});

export default api;
