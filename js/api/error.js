"use strict";

class Error {
  showError(err) {
    console.log(err);
    let errBlock = document.getElementById("error-msg");
    errBlock.classList.add("error");
    errBlock.innerHTML = `<div>Oops! Something went wrong(</div>`;
  }
}

export default new Error();
