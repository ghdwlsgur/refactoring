'use strict';

class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._discountRate = discountRate;
    this._contract = new CustomerContract(dateToday());
  }

  get name() {
    return this._name;
  }

  set name(aString) {
    this._name = aString;
  }

  get discountRate() {
    return this._discountRate;
  }

  set discountRate(aNumber) {
    this._discountRate = aNumber;
  }

  becomePreferred() {
    this._discountRate += 0.03;
  }

  applyDiscount(amount) {
    return amount.substract(amount.multiply(this._discountRate));
  }
}

class CustomerContract {
  constructor(startDate) {
    this._startDate = startDate;
  }
}
