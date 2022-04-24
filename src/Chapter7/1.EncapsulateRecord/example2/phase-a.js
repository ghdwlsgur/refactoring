'use strict';

const customerData = require('./data.json');

// 쓰기 example
function addUsage(customerID, year, month, amount) {
  customerData[customerID].usages[year][month] = amount;
  return JSON.stringify(customerData);
}

// 읽기 example
function compareUsage(customerID, laterYear, month) {
  const later = customerData[customerID].usages[laterYear][month];
  const earlier = customerData[customerID].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
}

// console.log(addUsage(1920, 2016, 1, 70));

console.log(compareUsage(38673, 2016, 1)); // 20
