'use strict';

const invoice = require('./data/invoices.json');

const Clock = {
  today: (() => {
    return new Date();
  })(),
};

function printOwing(invoice) {
  let outstanding = 0;

  // 배너 출력 로직을 함수로 추출
  printBanner();

  // 미해결 채무(outstanding)를 계산한다.
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 마감일(dueDate)를 기록한다.
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30,
  );

  // 세부사항을 출력한다.
  printDetails();

  function printDetails() {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
    console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
  }
}

function printBanner() {
  console.log('******************');
  console.log('***** 고객채무 *****');
  console.log('******************');
}

printOwing(invoice);
