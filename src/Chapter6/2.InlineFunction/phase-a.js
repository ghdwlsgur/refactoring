'use strict';

// ! Sample Data ==================================
const aDriver = {
  numberOfLateDeliveries: 10,
};

const aCustomer = {
  name: 'HongJinhyeok',
  location: 'Seoul',
};

// Example 1 =======================================

function rating(aDriver) {
  return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(aDriver) {
  return aDriver.numberOfLateDeliveries > 5;
}

// Example 2 =======================================
function reportLines(aCustomer) {
  const lines = [];
  gatherCustomerData(lines, aCustomer);
  return lines;
}

function gatherCustomerData(out, aCustomer) {
  out.push(['name', aCustomer.name]);
  out.push(['location', aCustomer.location]);
}

// ! Execute
console.log(rating(aDriver));
console.log(reportLines(aCustomer));
