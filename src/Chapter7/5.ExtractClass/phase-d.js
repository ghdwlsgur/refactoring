'use strict';

class Person {
  constructor(data) {
    this._telephoneNumber = new TelephoneNumber(data);
  }

  get name() {
    return this._name;
  }

  set name(arg) {
    this._name = arg;
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }

  set officeAreaCode(arg) {
    this._telephoneNumber.areaCode = arg;
  }

  get officeNumber() {
    return this._telephoneNumber.number;
  }

  set officeNumber(arg) {
    this._telephoneNumber.number = arg;
  }

  get telephoneNumber() {
    return this._telephoneNumber.toString();
  }
}

// 함수 이름 바꾸기
class TelephoneNumber {
  constructor(data) {
    this._areaCode = data.officeAreaCode;
    this._number = data.officeNumber;
  }

  get telephoneNumber() {
    return `(${this.areaCode}) ${this.number}`;
  }

  get number() {
    return this._number;
  }

  set number(arg) {
    console.log('전화번호 변경');
    this._number = arg;
  }

  get areaCode() {
    return this._areaCode;
  }

  set areaCode(arg) {
    this._areaCode = arg;
  }

  toString() {
    return `(${this.areaCode} ${this.number})`;
  }
}

const person = new Person({
  officeAreaCode: '111',
  officeNumber: '010-1111-1111',
});

console.log(person.officeNumber);
person.officeNumber = '010-2222-2222';
console.log(person.officeNumber);
