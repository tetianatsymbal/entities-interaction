"use strict";

export default class Resource {
  #_uid;
  #_url;

  constructor(uid, url) {
    this.#_uid = uid;
    this.#_url = url;
  }

  get uid() {
    return this.#_uid;
  }

  get url() {
    return this.#_url;
  }
}
