'use strict';

let defaultOwnerData = { firstName: 'Martin', lastName: 'Fowler' };

// ! 복제본 만들기와 클래스로 감싸는 방식은 레코드 구조에서 깊이가 1인 속성들까지만 효과가 있다.
export function defaultOwner() {
  return new Person(defaultOwnerData);
}

export function setDefaultOwner(arg) {
  defaultOwnerData = arg;
}

class Person {
  constructor(data) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get firstName() {
    return this._firstName;
  }
}
