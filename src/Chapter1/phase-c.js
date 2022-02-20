'use strict';

const invoice = require('./invoices.json');
const plays = require('./plays.json');

/**====================================================
 * 변수 인라인하기
 * @param {object[]} invoice
 * @param {object} plays
 * @returns {string}
 * @description
 * 다양한 연극을 외주로 받아서 공연하는 극단이 있다고 생각해보자.
 * 공연 요청이 들어오면 연극의 장르와 관객 규모를 기초로 비용을 책정한다.
 * 현재 이 극단은 두 가지 장르, 비극과 희극만 공연한다. 그리고 공연료와
 * 별개로 포인트를 지급해서 다음번 의뢰 시 공연료를 할인받을 수도 있다.
 */
function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내역 (고객명: ${invoice[0].customer})\n`;
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format;

  for (let perf of invoice[0].performances) {
    // const play = playFor(perf); // 우변을 함수로 추출 -> 인라인된 변수는 제거
    let thisAmount = amountFor(perf, playFor(perf)); // 변수 인라인1

    // 포인트를 적립한다.
    volumeCredits += Math.max(perf.audience - 30, 0);
    // 변수 인라인2
    if ('comedy' === playFor(perf).type)
      volumeCredits += Math.floor(perf.audience / 5);

    // 청구내역을 출력한다. 변수 인라인3
    // eslint-disable-next-line prettier/prettier
    result += `  ${playFor(perf).name}: ${format(thisAmount / 100)} (${perf.audience}석)\n`;
    totalAmount += thisAmount;
  }
  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;
  return result;
}

function amountFor(perf, play) {
  // 값이 바뀌지 않는 변수는 매개변수로 전달
  // let thisAmount = 0; // 변수를 초기화하는 코드
  let result = 0; // 명확한 이름으로 변경
  switch (play.type) {
    case 'tragedy':
      result = 40000;
      if (perf.audience > 30) {
        result += 1000 * (perf.audience - 30);
      }
      break;
    case 'comedy':
      result = 30000;
      if (perf.audience > 20) {
        result += 1000 + 500 * (perf.audience - 20);
      }
      result += 300 * perf.audience;
      break;
    default:
      throw new Error(`알 수 없는 장르: ${play.type}`);
  }
  return result; // 함수 안에서 값이 바뀌는 변수 반환
}

function playFor(aPerformance) {
  return plays[aPerformance.playID];
}

const result = statement(invoice, plays);
console.log(result);
