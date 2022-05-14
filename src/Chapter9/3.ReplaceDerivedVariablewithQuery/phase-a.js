'use strict';

// 파생 변수를 질의 함수로 바꾸기

class Production {
  constructor(data) {
    this._adjustments = [];
    this._production = data.production;
  }

  get production() {
    return this._production;
  }

  /**
   * 이 코드는 조정 값 adjustment를 적용하는 과정에서 직접 관련이 없는
   * 누적 값 production까지 갱신했다. 그런데 이 누적 값은 매번 갱신하지 않고도 계산할 수 있다.
   */
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}
