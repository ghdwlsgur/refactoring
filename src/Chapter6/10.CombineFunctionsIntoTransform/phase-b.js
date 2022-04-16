'use strict';
const _ = require('lodash');

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
      return reading1;
    case 'jinhyeok':
      return reading2;
    case 'chris':
      return reading3;
    default:
      break;
  }
}

// Clinet 1
const aReading1 = acquireReading('ivan');
const baseCharge =
  baseRate(aReading1.month, aReading1.year) * aReading1.quantity;

// Client 2
const aReading2 = acquireReading('jinhyeok');
const base = baseRate(aReading2.month, aReading2.year) * aReading2.quantity;
const texableCharge = Math.max(0, base - taxThreshold(aReading2.year));

// Client 3
const rawReading3 = acquireReading('chris');
const aReading3 = enrichReading(rawReading3);
// const basicChargeAmount = calculateBaseCharge(rawReading);
const basicChargeAmount = aReading3.baseCharge;

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result); // 부가 정보 추가
  return result;
}
