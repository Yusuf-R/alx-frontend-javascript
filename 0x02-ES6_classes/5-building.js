/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
class Building {
  constructor(sqrt) {
    if (typeof sqrt !== 'number') {
      return ('sqrt must be a number');
    }
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqrt = sqrt;
  }

  get sqrt() {
    return this._sqrt;
  }

  set sqrt(data) {
    if (typeof data !== 'number') {
      throw new TypeError('data must be a number');
    }
    this._amount = data;
  }
}

export default Building;
