/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof floors !== 'number') {
      return ('floors must be a number');
    }
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    super(sqft);
    this._floors = floors;
    this._sqft = sqft;
  }

  get floors() {
    return this._floors;
  }

  set floors(data) {
    if (typeof data !== 'number') {
      throw new TypeError('data must be a number');
    }
    this._floors = data;
  }

  evacuationWarningMessage() {
    const nbFloors = this._floors;
    return (`Evacuate slowly the ${nbFloors} floors`);
  }
}

export default SkyHighBuilding;
