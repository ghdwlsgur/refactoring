'use strict';

class Account {
  constructor(number, type) {
    this._number = number;
    this._type = type;
  }

  get interestRate() {
    return this._type.interesRate;
  }
}

class AccountType {
  constructor(nameString, interestRate) {
    this._name = nameString;
    this._interesRate = interestRate;
  }

  get interesRate() {
    return this._interesRate;
  }
}
