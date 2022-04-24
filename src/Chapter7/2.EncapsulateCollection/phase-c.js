'use strict';
/**
 * @description 컬렉션에 대해서는 어느 정도 강박증을 갖고 불필요한 복제본을 만드는 편이 예상치 못한 수정이 촉발한 오류를 디버깅하는 것보다 낫다.
 * 떄론 명확히 드러나지 않는 수정이 일어날 수 있다. 가령 다른 언어들은 컬렉션을 수정하는 연산들이 기본적으로 복제본을 만들어서 처리하지만,
 * 자바스크립트에서는 배열을 정렬할 때 원본을 수정한다. 컬렉션 관리를 책임지는 클래스라면 항상 복제본을 제공해야 한다. 그리고 나는 컬렉션을 변경할
 * 가능성이 있는 작업을 할 때도 습관적으로 복제본을 만든다.
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
    return this._courses.slice();
  }

  set courses(aList) {
    this._courses = aList.slice();
  }

  addCourse(aCourse) {
    this._courses.push(aCourse);
  }

  removeCourse(
    aCourse,
    fnIfAbsent = () => {
      throw new RangeError();
    },
  ) {
    const index = this._courses.indexOf(aCourse);
    if (index === -1) fnIfAbsent();
    else this._courses.splice(index, 1);
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
