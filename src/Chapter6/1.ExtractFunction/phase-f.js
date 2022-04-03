'use strict';

const invoice = require('./data/invoices.json');

const Clock = {
  today: (() => {
    return new Date();
  })(),
};

function printOwing(invoice) {
  printBanner();

  // ! 함수 추출 완료. 추출한 함수가 반환한 값을 원래 변수에 저장한다.
  let outstanding = calculateOutStanding(invoice);

  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

function calculateOutstanding(invoice) {
  let outstanding = 0;
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }
  return outstanding;
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
