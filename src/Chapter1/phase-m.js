'use strict';

const invoice = require('./invoices.json');
const plays = require('./plays.json');

/**====================================================
 * 변수 인라인 후 함수 이름 바꾸기
 * @param {object[]} invoice
 * @param {object} plays
 * @returns {string}
 * @description
 * volumeCredits 변수를 제거하는 작업의 단계
 * 1. 반복문 쪼개기로 변수 값을 누적시키는 부분을 분리한다.
 * 2. 문장 슬라이드하기로 변수 초기화 문장을 변수 값 누적 코드 바로 앞으로 옮긴다.
 * 3. 함수 추출하기로 적립 포인트 계산 부분을 별도 함수로 추출한다.
 * 4. 변수 인라인하기로 volumeCredits 변수를 제거한다.
 */
function statement(invoice, plays) {
  let result = `청구 내역 (고객명: ${invoice[0].customer})\n`;

  for (let perf of invoice[0].performances) {
    // eslint-disable-next-line prettier/prettier
    result += `  ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience}석)\n`;
  }
  // let totalAmount = totalAmount(); // 인라인 된 변수 제거

  result += `총액: ${usd(totalAmount())}\n`; // 변수 인라인 후 함수 이름 바꾸기
  result += `적립 포인트: ${totalVolumeCredits()}점\n`;
  return result;
}

function amountFor(aPerformance) {
  let result = 0;
  switch (playFor(aPerformance).type) {
    case 'tragedy':
      result = 40000;
      if (aPerformance.audience > 30) {
        result += 1000 * (aPerformance.audience - 30);
      }
      break;
    case 'comedy':
      result = 30000;
      if (aPerformance.audience > 20) {
        result += 1000 + 500 * (aPerformance.audience - 20);
      }
      result += 300 * aPerformance.audience;
      break;
    default:
      throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
  }
  return result;
}

function playFor(aPerformance) {
  return plays[aPerformance.playID];
}

function volumeCreditsFor(aPerformance) {
  let result = 0;
  result += Math.max(aPerformance.audience - 30, 0);
  if ('comedy' === playFor(aPerformance).type)
    result += Math.floor(aPerformance.audience / 5);
  return result;
}

function usd(aNumber) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
}

function totalVolumeCredits() {
  let volumeCredits = 0;
  for (let perf of invoice[0].performances) {
    volumeCredits += volumeCreditsFor(perf);
  }
  return volumeCredits;
}

function totalAmount() {
  let result = 0; // totalAmount -> result 변수 이름 바꾸기
  for (let perf of invoice[0].performances) {
    result += amountFor(perf);
  }
  return result;
}
const result = statement(invoice, plays);
console.log(result);
