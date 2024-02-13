/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
class HolbertonCourse {
  constructor(name, length, students) {
    const nameMsg = 'Name must be a string';
    const stdMsg = 'Students must be an array of string';
    const lenMsg = 'Length must be a number';

    if (name.constructor !== String) {
      throw new TypeError(nameMsg);
    }

    if (length.constructor !== Number) {
      throw new TypeError(lenMsg);
    }

    if (!Array.isArray(students)) {
      throw new TypeError(stdMsg);
    }

    students.map((elem) => {
      if (elem.constructor !== String) {
        throw new TypeError(stdMsg);
      }
    });
    this._name = name;
    this._length = length;
    this._students = students;
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

  get length() {
    return this._length;
  }

  set length(data) {
    if (data.constructor !== Number) {
      throw new TypeError('Lenght must be a Number');
    }
    this._length = data;
  }

  get students() {
    return this._students;
  }

  set students(data) {
    if (!Array.isArray(data)) {
      throw new TypeError('Students must be an array of string');
    }
    data.map((elem) => {
      if (elem.constructor !== String) {
        throw new TypeError('Students must be an array of string');
      }
    });
    this._students = data;
  }
}

export default HolbertonCourse;
