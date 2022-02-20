'use strict';

const invoice = require('./data/invoices.json');
const plays = require('./data/plays.json');

/**====================================================
 * 함수 옮기기 1
 * @param {object[]} invoice
 * @param {object} plays
 * @returns {string}
 * @description
 * 함수로 건넨 데이터를 수정하기 싫다.
 * 가변 데이터는 금방 상하기 때문에 데이터를 최대한 불변처럼 취급한다.
 */
function statement(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice[0].customer;
  statementData.performances = invoice[0].performances.map(enrichPerformance);

  return renderPlainText(statementData, plays);

  function enrichPerformance(aPerformance) {
    const result = Object.assign({}, aPerformance);
    result.play = playFor(result); // 중간 데이터에 연극 정보를 저장
    result.amount = amountFor(result); // 중간 데이터에 총합 정보를 저장
    result.volumeCredits = volumeCreditsFor(result);
    return result;
  }
  // 함수 옮기기 1
  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  // 함수 옮기기 2
  function amountFor(aPerformance) {
    let result = 0;
    // switch (playFor(aPerformance).type) {
    switch (aPerformance.play.type) {
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
        // throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
        throw new Error(`알 수 없는 장르: ${aPerformance.play.type}`);
    }
    return result;
  }

  // 함수 옮기기 3
  function volumeCreditsFor(aPerformance) {
    let result = 0;
    result += Math.max(aPerformance.audience - 30, 0);
    // if ('comedy' === playFor(aPerformance).type)
    if ('comedy' === aPerformance.play.type)
      result += Math.floor(aPerformance.audience / 5);
    return result;
  }
}

function renderPlainText(data, plays) {
  let result = `청구 내역 (고객명: ${data.customer})\n`;
  for (let perf of data.performances) {
    // result += `  ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience}석)\n`;
    // eslint-disable-next-line prettier/prettier
    // result += `  ${perf.play.name}: ${usd(amountFor(perf))} (${perf.audience}석)\n`;
    // eslint-disable-next-line prettier/prettier
    result += `  ${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석)\n`;
  }
  result += `총액: ${usd(totalAmount())}\n`;
  result += `적립 포인트: ${totalVolumeCredits()}점\n`;
  return result;

  function usd(aNumber) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }

  function totalVolumeCredits() {
    let result = 0;
    for (let perf of data.performances) {
      // result += volumeCreditsFor(perf);
      result += perf.volumeCredits;
    }
    return result;
  }

  function totalAmount() {
    let result = 0;
    for (let perf of data.performances) {
      // result += amountFor(perf);
      result += perf.amount;
    }
    return result;
  }
}

const result = statement(invoice, plays);
console.log(result);
