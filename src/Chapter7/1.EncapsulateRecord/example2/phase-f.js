'use strict';
/**
 * ! @description 이 방법이 간단하지만 문제가 있다. 바로 눈에 띄는 문제는 데이터 구조가 클수록 복제 비용이 커져서 성능이 느려질 수 있다는 것이다.
 * ! 하지만, 다른 경우와 마찬가지로 성능 비용을 감당할 수 있는 상황일 수도 있다. 막연히 걱정만 하지 말고 얼마나 영향을 주는지 실제로 측정하라.
 *
 * 또 다른 문제는 클라이언트가 원본을 수정한다고 착각할 수 있다는 것이다.
 * Todo: 이럴 때는 읽기 전용 프록시를 제공하거나 복제본을 동결시켜서 데이터를 수정하려고 할 때 에러를 던지도록 수정할 수 있다.
 */

const customerJSON = require('./data.json');
const _ = require('lodash');

let customerData = '';

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
  const later = getCustomerData().rawData[customerID].usages[laterYear][month];
  const earlier =
    getCustomerData().rawData[customerID].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
}

function setRawDataOfCustomers(arg) {
  customerData = new CustomerData(arg);
}

function getCustomerData() {
  return customerData;
}

setRawDataOfCustomers(customerJSON);
console.log(compareUsage(1920, 2016, 1));
