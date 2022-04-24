'use strict';

const customerData = require('./data.json');

class CustomerData {
  constructor(data) {
    this._data = data;
  }

  get rawData() {
    return _.cloneDeep(this._data);
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }
  usage(customerID, year, month) {
    return this._data[customerID].usages[year][month];
  }
}

function compareUsage(customerID, laterYear, month) {
  const later = getCustomerData().usage(customerID, laterYear, month);
  const earlier = getCustomerData().usage(customerID, laterYear - 1, month);
  return { laterAmount: later, change: later - earlier };
}

function setRawDataOfCustomers(arg) {
  customerData = new CustomerData(arg);
}

function getCustomerData() {
  return customerData;
}
