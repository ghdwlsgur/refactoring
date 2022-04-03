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
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// function moreThanFiveLateDeliveries(dvr) {
//   return dvr.numberOfLateDeliveries > 5;
// }

// Example 2 =======================================
function reportLines(aCustomer) {
  const lines = [];
  lines.push(['name', aCustomer.name]);
  lines.push(['location', aCustomer.location]);
  return lines;
}

// ! Execute
console.log(rating(aDriver));
console.log(reportLines(aCustomer));
