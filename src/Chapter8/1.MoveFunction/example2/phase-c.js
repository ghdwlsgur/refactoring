'use strict';

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

  get daysOverdrawn() {
    return this._daysOverdrawn;
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.type.overdraftCharge;
    return result;
  }

  get overdraftCharge() {
    return this.type.overdraftCharge(this);
    // 여기서 this는 클래스 인스턴스 자체를 가리킨다.
  }
}

class AccountType {
  constructor(isPremium) {
    this.isPremium = isPremium;
  }

  overdraftCharge(account) {
    if (this.isPremium) {
      const baseCharge = 10;
      if (account.daysOverdrawn <= 7) return baseCharge;
      else return baseCharge * (account.daysOverdrawn - 7) * 0.05;
    }
  }
}

const test = new Account(123, { isPremium: true });
console.log(test.type);
console.log(test.overdraftCharge);
