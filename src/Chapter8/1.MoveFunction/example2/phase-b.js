'use strict';

class Account {
  constructor(daysOverdrawn, type = {}) {
    this._daysOverdrawn = daysOverdrawn;
    this._type = new AccountType(type.isPremium);
  }

  get type() {
    return this._type;
  }

  set type(aClass) {
    this._type = aClass;
  }

  // 은행 이자 계산
  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.type.overdraftCharge;
    return result;
  }

  // 위임 메서드
  get overdraftCharge() {
    return this.type.overdraftCharge(this._daysOverdrawn);
  }
}

class AccountType {
  constructor(isPremium) {
    this.isPremium = isPremium;
  }

  overdraftCharge(daysOverdrawn) {
    if (this.isPremium) {
      const baseCharge = 10;
      if (daysOverdrawn <= 7) return baseCharge;
      else return baseCharge * (daysOverdrawn - 7) * 0.05;
    }
  }
}

const test = new Account(123, { isPremium: true });
console.log(test.type);
console.log(test.overdraftCharge);
