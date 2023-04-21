"use strict";

import Resource from "./resource.js";

export default class Person extends Resource {
  #_name;

  constructor(uid, url, name) {
    super(uid, url);

    this.#_name = name;
  }

  get name() {
    return this.#_name;
  }
}
