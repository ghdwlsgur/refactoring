'use strict';

/** 절차
 * 1. 아직 컬렉션을 캡슐화하지 않았다면 변수 캡슐화하기부터 한다.
 * 2. 컬렉션에 원소를 추가/제거하는 함수를 추가한다.
 * 3. 정적 검사를 수행한다.
 * 4. 컬렉션을 참조하는 부분을 모두 찾는다. 컬렉션의 변경자를 호출하는 코드가 모두 앞에서 추가한 추가/제거 함수를 호출하도록 수정한다.
 * 하나씩 수정할 때마다 테스트한다.
 * 5. 컬렉션 게터를 수정해서 원본 내용을 수정할 수 없는 일기전용 프락시나 복제본을 반환하게 한다.
 * 6. 테스트한다.
 */

class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }

  get name() {
    return this._name;
  }

  get courses() {
    return this._courses;
  }

  set courses(aList) {
    this._courses = aList;
  }
}

class Course {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }

  get name() {
    return this._name;
  }

  get isAdvanced() {
    return this._isAdvanced;
  }
}
