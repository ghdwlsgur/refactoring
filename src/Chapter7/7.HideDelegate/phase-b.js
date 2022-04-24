'use strict';

/** 절차
 * 1. 위임 객체의 각 메서드에 해당하는 위임 메서드를 서버에 생성한다.
 * 2. 클라이언트가 위임 객체 대신 서버를 호출하도록 수정한다. 하나씩 바꿀 때마다 테스트한다.
 * 3. 모두 수정했다면, 서버로부터 위임 객체를 얻는 접근자를 제거한다.
 * 4. 테스트한다.
 */

class Person {
  constructor(name, manager, chargeCode) {
    this._name = name;
    this._department = new Department(manager, chargeCode);
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }

  set department(arg) {
    this._department = arg;
  }

  get manager() {
    return this._department.manager;
  }
}
// 클라이언트
// manager = aPerson.department.manager; => manager = aPerson.manager

class Department {
  constructor(manager, chargeCode) {
    this._manager = manager;
    this._chargeCode = chargeCode;
  }

  get chargeCode() {
    return this._chargeCode;
  }

  set chargeCode(arg) {
    this._chargeCode = arg;
  }

  get manager() {
    return this._manager;
  }

  set manager(arg) {
    this._manager = arg;
  }
}
