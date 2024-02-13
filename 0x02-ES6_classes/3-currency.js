/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
class Currency {
  constructor(code, name) {
    if (name.constructor !== String) {
      throw new TypeError('Name must be a string');
    }

    if (code.constructor !== String) {
      throw new TypeError('Code must be a string');
    }
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(data) {
    if (data.constructor !== String) {
      throw new TypeError('Name must be a string');
    }
    this._name = data;
  }

  get code() {
    return this._code;
  }

  set code(data) {
    if (data.constructor !== String) {
      throw new TypeError('Code must be a string');
    }
    this._code = data;
  }

  displayFullCurrency() {
    const ret = `${this._name} (${this._code})`;
    return ret;
  }
}

export default Currency;
