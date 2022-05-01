'use strict';

class Account {
  constructor(daysOverdrawn, type = {}) {
    this._daysOverdrawn = daysOverdrawn;
    this.type = type;
  }

  // 은행 이자 계산
  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  // 초과 인출 이자 계산
  get overdraftCharge() {
    if (this.type.isPremium) {
      const baseCharge = 10;
      if (this._daysOverdrawn <= 7) return baseCharge;
      else return baseCharge + (this._daysOverdrawn - 7) * 0.05;
    } else return this._daysOverdrawn * 1.75;
  }
}
