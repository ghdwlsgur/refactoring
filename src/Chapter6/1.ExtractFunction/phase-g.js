'use strict';

const invoice = require('./data/invoices.json');

const Clock = {
  today: (() => {
    return new Date();
  })(),
};

function printOwing(invoice) {
  printBanner();

  // ! let outstanding => const outstanding
  const outstanding = calculateOutStanding(invoice);

  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

// ! 변수 이름 변경
function calculateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}

function recordDueDate(invoice) {
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30,
  );
}

function printDetails(invoice, outstanding) {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}

function printBanner() {
  console.log('******************');
  console.log('***** 고객채무 *****');
  console.log('******************');
}

printOwing(invoice);
