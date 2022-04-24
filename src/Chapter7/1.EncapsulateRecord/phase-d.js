'use strict';

class Organization {
  constructor(data) {
    /**
     * @description 이렇게 하면 데이터 레코드와의 연결을 끊어준다는 이점이 생긴다.
     * 특히 이 레코드를 참조하여 캡슐화를 깰 우려가 있는 코드가 많을 때 좋다.
     * 데이터를 개별 필드로 펼치지 않았다면 _data를 대입할 때 복제하는 식으로 처리했을 것이다.
     */
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

  set country(aCountryCode) {
    this._country = aCountryCode;
  }
}

const organization = new Organization({
  name: '애크미 구스베리',
  country: 'GB',
});

result += `<h1>${getOrganization().name}</h1>`;
getOrganization().name = newName;

function getOrganization() {
  return organization;
}
