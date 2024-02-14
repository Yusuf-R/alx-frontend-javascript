/* eslint-disable no-underscore-dangle */
class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const NewModel = this.constructor[Symbol.species];
    return new NewModel();
  }
}

export default Car;
