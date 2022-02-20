'use strict';

const invoice = require('./data/invoices.json');
const plays = require('./data/plays.json');

/**====================================================
 * 중간 데이터 구조를 인수로 전달
 * @param {object[]} invoice
 * @param {object} plays
 * @returns {string}
 * @description
 * statement()의 로직을 두 단계로 나누기
 * 1. statement()에 필요한 데이터를 처리
 * 2. 앞서 처리한 결과를 텍스트나 HTML로 표현
 */
function statement(invoice, plays) {
  const statementData = {}; // 중간 데이터 객체 1
  statementData.customer = invoice[0].customer; // 고객 데이터를 중간 데이터로 옮김 4
  statementData.performances = invoice[0].performances; // 공연 정보를 중간 데이터로 옮김 6

  // return renderPlainText(statementData, invoice, plays); // 중간 데이터 구조를 인수로 전달 2
  return renderPlainText(statementData, plays); // 필요 없어진 invoice 삭제 7
}

// 중간 데이터 구조를 인수로 전달 3
function renderPlainText(data, plays) {
  // let result = `청구 내역 (고객명: ${invoice[0].customer})\n`;
  let result = `청구 내역 (고객명: ${data.customer})\n`; // 고객 데이터를 중간 데이터로부터 얻음 5
  // 공연 정보를 중간 데이터로부터 얻음 8
  for (let perf of data.performances) {
    // eslint-disable-next-line prettier/prettier
    result += `  ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience}석)\n`;
  }
  result += `총액: ${usd(totalAmount())}\n`;
  result += `적립 포인트: ${totalVolumeCredits()}점\n`;
  return result;

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
    // 필요 없어진 invoice 삭제
    for (let perf of data.performances) {
      volumeCredits += volumeCreditsFor(perf);
    }
    return volumeCredits;
  }

  function totalAmount() {
    let result = 0;
    // 필요 없어진 invoice 삭제
    for (let perf of data.performances) {
      result += amountFor(perf);
    }
    return result;
  }
}

const result = statement(invoice, plays);
console.log(result);
