'use strict';

class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  // amountFor() 함수의 코드를 계산기 클래스로 복사
  get amount() {
    let result = 0;
    // amountFor 함수가 매개변수로 받던 정보를 계산기 필드에서 바로 얻음
    switch (this.play.type) {
      case 'tragedy':
        result = 40000;
        if (this.performance.audience > 30) {
          result += 1000 * (this.performance.audience - 30);
        }
        break;
      case 'comedy':
        result = 30000;
        if (this.performance.audience > 20) {
          result += 1000 + 500 * (this.performance.audience - 20);
        }
        result += 300 * this.performance.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${this.play.type}`);
    }
    return result;
  }
}

function createStatementData(invoice, plays) {
  const result = {};
  result.customer = invoice[0].customer;
  result.performances = invoice[0].performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;

  function enrichPerformance(aPerformance) {
    const calculator = new PerformanceCalculator(
      aPerformance,
      playFor(aPerformance),
    );
    const result = Object.assign({}, aPerformance);
    result.play = calculator.play;
    result.amount = amountFor(result);
    result.volumeCredits = volumeCreditsFor(result);
    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function amountFor(aPerformance) {
    // 계산기 클래스로 이동
    // let result = 0;
    // switch (aPerformance.play.type) {
    //   case 'tragedy':
    //     result = 40000;
    //     if (aPerformance.audience > 30) {
    //       result += 1000 * (aPerformance.audience - 30);
    //     }
    //     break;
    //   case 'comedy':
    //     result = 30000;
    //     if (aPerformance.audience > 20) {
    //       result += 1000 + 500 * (aPerformance.audience - 20);
    //     }
    //     result += 300 * aPerformance.audience;
    //     break;
    //   default:
    //     throw new Error(`알 수 없는 장르: ${aPerformance.play.type}`);
    // }
    // return result;

    return new PerformanceCalculator(aPerformance, playFor(aPerformance))
      .amount;
  }

  function volumeCreditsFor(aPerformance) {
    let result = 0;
    result += Math.max(aPerformance.audience - 30, 0);
    if ('comedy' === aPerformance.play.type)
      result += Math.floor(aPerformance.audience / 5);
    return result;
  }

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }
}
module.exports = { createStatementData };
