'use strict';
class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._contract = new CustomerContract(dateToday());
    this._setDiscountRate(discountRate);
  }

  get name() {
    return this._name;
  }

  set name(aString) {
    this._name = aString;
  }

  // CustomerContract 클래스의 메서드를 호출
  get discountRate() {
    return this._contract.discountRate;
  }

  set discountRate(aNumber) {
    this._discountRate = aNumber;
  }

  // CustomerContract 클래스의 필드를 설정
  _setDiscountRate(aNumber) {
    this._contract.discountRate = aNumber;
  }

  becomePreferred() {
    this._discountRate += 0.03;
    this._setDiscountRate(this.discountRate) + 0.03;
  }

  applyDiscount(amount) {
    return amount.substract(amount.multiply(this.discountRate));
  }
}

class CustomerContract {
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }

  get discountRate() {
    return this._discountRate;
  }

  set discountRate(arg) {
    this._discountRate = arg;
  }
}

/**
 * 이 리팩터링은 대체로 객체를 활용할 때가 더 수월하다. 캡슐화 덕에 데이터 접근을 메서드로
 * 자연스럽게 감싸주기 때문이다. 반면, 여러 함수가 날 레코드를 직접 사용하는 경우라면
 * 이 리팩터링은 (여전히 수행할 가치는 있지만) 훨씬 까다롭다.
 *
 * 이럴 때는 접근자 함수들을 만들고, 날 레코드를 읽고 쓰는 모든 함수가 접근자를 거치도록
 * 거치면 된다. 옮길 필드가 불변이라면 값을 처음 설정할 때 소스와 타깃 필드를 한꺼번에
 * 갱신하게 하고, 읽기 함수들은 점진적으로 마이그레이션하자.
 *
 * 나라면 가장 먼저 레코드를 캡슐화하여 클래스로 바꿀 것이다. 물론 가능할 때의 얘기지만
 * 이렇게 하면 필드 옮기기 리팩터링이 수월해진다.
 */
