'use strict';

const invoice = require('./data/invoices.json');

const Clock = {
  today: (() => {
    return new Date();
  })(),
};

function printOwing(invoice) {
  printBanner();

  let outstanding = 0;
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

// ! 미해결 채무(outstanding)를 계산 로직 함수 생성
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
