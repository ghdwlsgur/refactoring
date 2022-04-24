'use strict';

/**
 * @description 자고로 변수는 값을 한 번만 계산하고 그 뒤로는 읽기만 해야 한다.
 * 가장 단순한 예시로, 변수에 값을 한 번 대입한 뒤 더 복잡한 코드 덩어리에서 여러 차례 다시 대입하는 경우는 모두 질의 함수로 추출해야 한다.
 */

/** 절차
 * 1. 변수가 사용되기 전에 값이 확실히 결정되는지, 변수를 사용할 때마다 계산 로직이 매번 다른 결과를 내지는 않는지 확인한다.
 * 2. 읽기전용으로 만들 수 있는 변수는 읽기전용으로 만든다.
 * 3. 테스트한다.
 * 4. 변수 대입문을 함수로 추출한다.
 * => 변수와 함수가 같은 이름을 가질 수 없다면 함수 이름을 임시로 짓는다. 또한, 추출한 함수가 부수효과를 일으키지는 않는지 확인한다.
 * 부수효과가 있다면 질의함수와 변경 함수 분리하기로 대체한다.
 * 5. 테스트한다.
 * 6. 변수 인라인하기로 임시 변수를 제거한다.
 */

class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  // 여기서 임시 변수인 basePrice와 discountFactor를 메서드로 바꿔보자.

  get price() {
    let basePrice = this._quantity * this._item.price;
    let discountFactor = 0.98;
    if (basePrice > 1000) discountFactor -= 0.03;
    return basePrice * discountFactor;
  }
}
