class Character {
  /**
   * @property private
   *
   */
  #numbers = ["5", "1", "6", "7", "4", "2", "9", "3", "8"];
  #string = [
    "a",
    "b",
    "n",
    "f",
    "s",
    "f",
    "h",
    "j",
    "h",
    "g",
    "k",
    "m",
    "n",
    "c",
    "c",
    "r",
    "q",
    "l",
    "n",
    "t",
    "z",
    "v",
    "x",
    "p",
    "o",
    "i",
  ];
  #symbols = [
    "!",
    "@",
    "#",
    "$",
    "^",
    "%",
    "&",
    "*",
    "(",
    "-",
    ")",
    "+",
    "=",
    "?",
    ">",
    "]",
    "}",
    "<",
    "{",
    "[",
    "~",
    "_",
  ];
  /**
   *
   * @param {number} max
   * @returns numero aleatorio entre el 0 hasta el max
   */
  #random(max) {
    return Math.floor(Math.random() * max);
  }

  genPass(length) {
    let passArr = this.#symbols + this.#string + this.#numbers + this.#symbols;
    let pass = "";

    for (let i = length; i < passArr.length; i++) {
      if (i < length) {
        pass += passArr[this.#random(length) - i + this.#random(length)];
      } else if (i >= length) {
        pass += passArr[i - this.#random(length)];
      } else {
        pass += passArr[i + this.random(length)];
      }
    }

    if (pass.includes(",")) {
      return pass.split(",").join("");
    }
  }
}

module.exports = {
  Character,
};
