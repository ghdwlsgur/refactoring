'use strict';
// 변수 캡슐화하기

const organization = { name: '애크미 구스베리', country: 'GB' };

result += `<h1>${getRawDataOfOrganization().name}</h1>`;
getRawDataOfOrganization().name = newName;

function getRawDataOfOrganization() {
  return organization;
}
