'use strict';

class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }

  get name() {
    return this._name;
  }

  set name(arg) {
    this._name = arg;
  }

  get officeAreaCode() {
    return this._telephoneNumber._officeAreaCode;
  }

  set officeAreaCode(arg) {
    this._telephoneNumber._officeAreaCode = arg;
  }

  get officeNumber() {
    return this._telephoneNumber._officeNumber;
  }

  set officeNumber(arg) {
    this._telephoneNumber._officeNumber = arg;
  }
}

class TelephoneNumber {
  constructor(officeAreaCode, officeNumber) {
    this._officeAreaCode = officeAreaCode;
    this._officeNumber = officeNumber;
  }

  get officeAreaCode() {
    return this._officeAreaCode;
  }

  set officeAreaCode(arg) {
    this._officeAreaCode = arg;
  }
}
