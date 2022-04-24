'use strict';

/** 배경
 * 앞서 설명한 위임 숨기기에서 위임 객체를 캡슐화하는 이점을 설명했다. 하지만 그 이점이 거저 주어지는 건 아니다.
 * 클라이언트가 위임 객체의 또 다른 기능을 사용하고 싶을 때마다 서버에 위임 메서드를 추가해야 하는데, 이렇게 기능을
 * 추가하다 보면 단순히 전달만 하는 위임 메서드들이 점점 성가셔진다. 그러면 서버 클래스는 그저 중개자 역할로 전락하여
 * 차라리 클라이언트가 위임 객체를 직접 호출하는 게 나을 수 있다.
 *
 * 이 냄새는 데메테르 법칙을 너무 신봉할 때 자주 나타난다.
 * 이 법칙을 이따금 유용한 데메테르의 제안 정도로 부르는 게 훨씬 낫다.
 *
 * 이는 내부 정보를 가능한 한 숨기고 밀첩한 모듈과만 상호작용하여 결합도를 낮추자는 원칙으로, 자칫하면
 * 이 과정에서 위임 혹은 래퍼(wrapper) 메서드가 너무 늘어나느 등의 부작용이 있을 수 있으니 상황에 맞게 응용하는 게 좋다.
 */

/** 절차
 * 1. 위임 객체를 얻는 게터를 만든다.
 * 2. 위임 메서드를 호출하는 클라이언트가 모두 이 게터를 거치도록 수정한다. 하나씩 바꿀 때마다 테스트한다.
 * 3. 모두 수정했다면 위임 메서드를 삭제한다.
 */

'use strict';

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

  // 중개자 메서드 삭제
  // get manager() {
  //   return this._department.manager;
  // }
}
// 클라이언트
// manager = aPerson.manager; => manager = aPerson.department.manager

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
