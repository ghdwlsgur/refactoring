'use strict';

// organization = { name: '에크미 구스베리', country: 'GB' }
// 레코드를 데이터 클래스로 전환

class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }

  get name() {
    return this._name;
  }

  get country() {
    return this._country;
  }

  set name(aString) {
    this._name = aString;
  }

  set country(aString) {
    this._country = aString;
  }
}
