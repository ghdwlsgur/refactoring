'use strict';

// 저장소 객체 사용
import { registerCustomer } from './repositoryObject';

class Order {
  constructor(data) {
    this._number = data.number;
    // this._customer = new Customer(data.customer);
    this._customer = registerCustomer(data.customer);
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}

/**
 * 이 예시 코드는 생성자 본문이 전역 저장소와 결합된다는 문제가 있다.
 * 전역 객체는 독한 약처럼 신중히 다뤄야 한다. 소량만 사용하면 이로울
 * 수도 있지만 과용하면 독이 된다. 이 점이 염려된다면 저장소를 생성자
 * 매개변수로 전달하도록 수정하자.
 */
