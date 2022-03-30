'use strict';

const invoice = require('./data/invoices.json');

const Clock = {
  today: (() => {
    return new Date();
  })(),
};

function printOwing(invoice) {
  printBanner();

  let outstanding = 0; // 맨 위에 있던 선언문을 이 위치로 이동
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 마감일 설정 로직을 함수로 추출
  recordDueDate(invoice);

  // 중첩함수에서 함수 밖으로 추출하므로 매개변수 전달
  printDetails(invoice, outstanding);
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
