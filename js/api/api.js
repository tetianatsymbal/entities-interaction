"use strict";

import Person from "./dto/person.js";
import Planet from "./dto/planet.js";
import Film from "./dto/film.js";
import Error from "./error.js";

class Api {
  API_URL = "https://www.swapi.tech/api";

  async getPeople() {
    return fetch(this.API_URL + "/people")
      .then((res) => res.json())
      .then((data) => {
        return data.results.map(
          (item) => new Person(item.uid, item.url, item.name)
        );
      })
      .catch((err) => Error.showError(err));
  }

  async getPlanets() {
    return fetch(this.API_URL + "/planets")
      .then((res) => res.json())
      .then((data) => {
        return data.results.map(
          (item) => new Planet(item.uid, item.url, item.name)
        );
      })
      .catch((err) => Error.showError(err));
  }

  async getFilms() {
    return fetch(this.API_URL + "/films")
      .then((res) => res.json())
      .then((data) => {
        return data.result.map(
          (item) =>
            new Film(
              item.uid,
              item.properties.url,
              item.properties.title,
              item.properties.director
            )
        );
      })
      .catch((err) => Error.showError(err));
  }
}

export default new Api();
