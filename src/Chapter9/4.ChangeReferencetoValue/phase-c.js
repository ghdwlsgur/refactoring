'use strict';

class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }

  set officeAreaCode(arg) {
    this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber);
  }

  get officeNumber() {
    return this._telephoneNumber.number;
  }

  set officeNumber(arg) {
    this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg);
  }
}

class TelephoneNumber {
  constructor(areaCode, number) {
    this._areaCode = areaCode;
    this._number = number;
  }

  get areaCode() {
    return this._areaCode;
  }

  set areaCode(arg) {
    this._areaCode = arg;
  }

  get number() {
    return this._number;
  }

  set number(arg) {
    this._number = arg;
  }

  /**
   * 대부분의 객체 지향 언어는 값 기반 동치성 비교를 할 수 있도록 오버라이드 가능한 동치성 검사 수단을 기본으로
   * 제공한다. 루비에서는 == 연산자를 오버라이드하면 되고, 자바에서는 Object.equals() 메서드를 오버라이드하면 된다.
   * 그리고 동치성 검사 메서드를 오버라이드할 때는 해시코드 생성 메서드도 함께 오버라이드해야 하는 게 보통이다. (자바에서는 Object.hashCode() 메서드)
   * 그래야 해시 기반으로 동작하는 컬렉션이 새로 만든 값도 문제없이 다룰 수 있다.
   */

  equals(other) {
    if (!(other instanceof TelephoneNumber)) return false;
    return this.areaCode === other.areaCode && this.number === other.number;
  }
}

it('telephone equals', () => {
  console.assert(
    new TelephoneNumber('312', '555-0142').equals(
      new TelephoneNumber('312', '555-0142'),
    ),
  );
});
