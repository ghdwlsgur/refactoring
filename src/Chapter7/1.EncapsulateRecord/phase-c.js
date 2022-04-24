'use strict';

class Organization {
  constructor(data) {
    this._data = data;
  }

  get name() {
    return this._data.name;
  }

  set name(aString) {
    this._data.name = aString;
  }
}

const organization = new Organization({
  name: '애크미 구스베리',
  country: 'GB',
});

result += `<h1>${getOrganization().name}</h1>`;
getOrganization().name = newName;

// 임시 함수 제거
// function getRawDataOfOrganization() {
//   return organization._data;
// }

function getOrganization() {
  return organization;
}
