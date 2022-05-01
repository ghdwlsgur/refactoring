'use strict';

class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._setDiscountRate(discountRate);
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

  _setDiscountRate(aNumber) {
    this._discountRate = aNumber;
  }

  becomePreferred() {
    this._discountRate += 0.03;
    this._setDiscountRate(this.discountRate) + 0.03;
  }

  applyDiscount(amount) {
    return amount.substract(amount.multiply(this._discountRate));
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
