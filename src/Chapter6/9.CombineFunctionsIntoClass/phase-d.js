'use strict';

// data
const reading1 = {
  customer: 'ivan',
  quantity: 10,
  month: 5,
  year: 2017,
};

const reading2 = {
  customer: 'jinhyeok',
  quantity: 12,
  month: 10,
  year: 2018,
};

const reading3 = {
  customer: 'chris',
  quantity: 13,
  month: 3,
  year: 2018,
};

// customize function month가 5미만일 경우 basic, 그렇지 않을 경우 pro라고 가정합니다.
function baseRate(month, year) {
  let type = '';

  if (month < 4) type = 'basic';
  else type = 'pro';

  const baseType = [
    {
      year: 2017,
      basic: 3000,
      pro: 4000,
    },
    {
      year: 2018,
      basic: 4000,
      pro: 5000,
    },
  ];

  const result = baseType.filter(baseObj => baseObj.year === year)[0];
  return result[type] || '해당없음';
}

// customize function tax 2017년도 2000, 2018년도 2500의 고정값이라고 가정합니다.
function taxThreshold(year) {
  const taxType = [
    {
      year: 2017,
      tax: 2000,
    },
    {
      year: 2018,
      tax: 2500,
    },
  ];

  const result = taxType.filter(taxObj => taxObj.year === year)[0];
  return result['tax'] || '해당없음';
}

// 이름별로 다른 각기 다른 객체를 복사합니다.
function acquireReading(name) {
  switch (name) {
    case 'ivan':
      return Object.assign({}, reading1);
    case 'jinhyeok':
      return Object.assign({}, reading2);
    case 'chris':
      return Object.assign({}, reading3);
    default:
      break;
  }
}

// function calculateBaseCharge(aReading) {
//   return baseRate(aReading.month, aReading.year) * aReading.quantity;
// }

class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }

  get customer() {
    return this._customer;
  }

  get quantity() {
    return this._quantity;
  }

  get month() {
    return this._month;
  }

  get year() {
    return this._year;
  }

  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }
}

// Clinet 1)
const aReading1 = new Reading(acquireReading('ivan'));
const baseCharge = aReading1.baseCharge;

// Client 2
const aReading2 = new Reading(acquireReading('jinhyeok'));
const taxableCharge = taxableChargeFn(aReading2);

function taxableChargeFn(aReading) {
  return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
}

// Clinet 3
const rawReading = acquireReading('chris');
const aReading3 = new Reading(rawReading);
const basicChargeAmount = aReading3.baseCharge;
