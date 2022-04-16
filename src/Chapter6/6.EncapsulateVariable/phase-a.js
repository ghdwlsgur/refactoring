'use strict';

let defaultOwnerData = { firstName: 'Martin', lastName: 'Fowler' };

/*
  데이터의 복제본을 반환하면 클라이언트는 게터로 얻은 데이터를 변경할 수 있지만 원본에는 아무 영향을 주지 못한다.
  공유 데이터(원본)를 변경하기를 원하는 클라이언트가 있을 수 있다는 점에 주의한다.  
*/
export function defaultOwner() {
  return Object.assign({}, defaultOwnerData);
}

export function setDefaultOwner(arg) {
  defaultOwnerData = arg;
}
