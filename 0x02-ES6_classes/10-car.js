/* eslint-disable no-underscore-dangle */
class Car {
  constructor(brand, motor, color) {
    // if (typeof brand !== 'string') {
    //   throw new TypeError('Brand must be a string');
    // }
    // if (typeof motor !== 'string') {
    //   throw new TypeError('Motor must be a string');
    // }
    // if (typeof color !== 'string') {
    //   throw new TypeError('Color must be a string');
    // }

    // no need for the error handling because we intend to implement shallow copy
    // with the cloneCar method

    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor();
  }
}

export default Car;
