'use strict';

const invoice = require('./invoices.json');
const plays = require('./plays.json');

/**====================================================
 * 반복문을 파이프라인으로 바꾸기, 단계 분리하기
 * @param {object[]} invoice
 * @param {object} plays
 * @returns {string}
 * @description
 */

// 별도 파일 저장 statement.js
function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}

// 별도 파일 저장 createStatementData.js
function createStatementData(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice[0].customer;
  statementData.performances = invoice[0].performances.map(enrichPerformance);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);

  return statementData;

  function enrichPerformance(aPerformance) {
    const result = Object.assign({}, aPerformance);
    result.play = playFor(result);
    result.amount = amountFor(result);
    result.volumeCredits = volumeCreditsFor(result);
    return result;
  }
  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }
  function amountFor(aPerformance) {
    let result = 0;
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
        throw new Error(`알 수 없는 장르: ${aPerformance.play.type}`);
    }
    return result;
  }
  function volumeCreditsFor(aPerformance) {
    let result = 0;
    result += Math.max(aPerformance.audience - 30, 0);
    if ('comedy' === aPerformance.play.type)
      result += Math.floor(aPerformance.audience / 5);
    return result;
  }

  // for 반복문을 파이프라인으로 변경
  function totalAmount(data) {
    // let result = 0;
    // for (let perf of data.performances) {
    //   result += perf.amount;
    // }
    // return result;
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  // for 반복문을 파이프라인으로 변경
  function totalVolumeCredits(data) {
    // let result = 0;
    // for (let perf of data.performances) {
    //   result += perf.volumeCredits;
    // }
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }
}

function renderPlainText(data, plays) {
  let result = `청구 내역 (고객명: ${data.customer})\n`;
  for (let perf of data.performances) {
    // eslint-disable-next-line prettier/prettier
    result += `  ${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석)\n`;
  }
  result += `총액: ${usd(data.totalAmount)}\n`;
  result += `적립 포인트: ${data.totalVolumeCredits}점\n`;
  return result;

  function usd(aNumber) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }
}

const result = statement(invoice, plays);
console.log(result);
