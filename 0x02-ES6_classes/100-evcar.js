/* eslint-disable no-underscore-dangle */
import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }

  cloneCar() {
    const NewModel = this.constructor[Symbol.species];
    return new NewModel();
  }
}

export default EVCar;