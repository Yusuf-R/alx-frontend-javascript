/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      return ('sqft must be a number');
    }
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(data) {
    if (typeof data !== 'number') {
      throw new TypeError('data must be a number');
    }
    this._sqft = data;
  }
}

export default Building;
