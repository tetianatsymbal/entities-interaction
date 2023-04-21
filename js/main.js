"use strict";

import Api from "./api/api.js";

class Main {
  HANDLER_MAP = {
    people: this.handleClickPeople,
    planets: this.handleClickPlanets,
    films: this.handleClickFilms,
  };

  constructor() {
    this.api = Api;
  }

  init() {
    for (const item of Object.keys(this.HANDLER_MAP)) {
      document
        .getElementById(item)
        .addEventListener("click", this.HANDLER_MAP[item].bind(this));
    }
  }

  async handleClickPeople() {
    const people = await this.api.getPeople();
    const response = people.map((person) => {
      return `<div class="item">
        <div id="uid">${person.uid}</div>
        <div id="name">${person.name}</div>
        <div id="url">${person.url}</div>
      </div>`;
    });
    this.renderContent(response.join(""));
  }

  async handleClickPlanets() {
    const planets = await this.api.getPlanets();
    const response = planets.map((planet) => {
      return `<div class="item">
        <div id="uid">${planet.uid}</div>
        <div id="name">${planet.name}</div>
        <div id="url">${planet.url}</div>
      </div>`;
    });
    this.renderContent(response.join(""));
  }

  async handleClickFilms() {
    const films = await this.api.getFilms();
    const response = films.map((film) => {
      return `<div class="item">
        <div id="uid">${film.uid}</div>
        <div id="title">${film.director}</div>
        <div id="director">${film.title}</div>
        <div id="url">${film.url}</div>
      </div>`;
    });
    this.renderContent(response.join(""));
  }

  renderContent(data) {
    let content = document.getElementById("content");
    content.innerHTML = data;
    content.classList.add("content");
  }
}

const main = new Main();
main.init();
