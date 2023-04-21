"use strict";

import Resource from "./resource.js";

export default class Film extends Resource {
  #_title;
  #_director;

  constructor(uid, url, title, director) {
    super(uid, url);

    this.#_title = title;
    this.#_director = director;
  }

  get title() {
    return this.#_title;
  }

  get director() {
    return this.#_director;
  }
}
