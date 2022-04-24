'use strict';

const customerData = require('./data.json');

// 쓰기 example
function addUsage(customerID, year, month, amount) {
  customerData[customerID].usages[year][month] = amount;
  return JSON.stringify(customerData);
}

// 읽기 example
function compareUsage(customerID, laterYear, month) {
  const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
  const earlier =
    getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
}

function getRawDataOfCustomers() {
  return customerData;
}

function setRawDataOfCustomers(arg) {
  customerData = arg;
}
