'use strict';

function createPerformanceCalculator(aPerformance, aPlay) {
  // return new PerformanceCalculator(aPerformance, aPlay);
  switch (aPlay.type) {
    case 'tragedy':
      return new TragedyCalculator(aPerformance, aPlay);
    case 'comedy':
      return new ComedyCalculator(aPerformance, aPlay);
    default:
      throw new Error(`알 수 없는 장르: ${aPlay.type}`);
  }
}

class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  // 슈퍼 클래스의 amount() 메서드는 호출할 일이 없으니 삭제해도 무방
  get amount() {
    // let result = 0;
    // switch (this.play.type) {
    //   case 'tragedy':
    //     // result = 40000;
    //     // if (this.performance.audience > 30) {
    //     //   result += 1000 * (this.performance.audience - 30);
    //     // }
    //     // break;
    //     throw '오류 발생'; // 비극 공연료는 TragedyCalculator를 이용하도록 유도
    //   case 'comedy':
    //     result = 30000;
    //     if (this.performance.audience > 20) {
    //       result += 1000 + 500 * (this.performance.audience - 20);
    //     }
    //     result += 300 * this.performance.audience;
    //     break;
    //   default:
    //     throw new Error(`알 수 없는 장르: ${this.play.type}`);
    // }
    // return result;
    throw new Error('서브클래스에서 처리하도록 설계되었습니다.');
  }

  get volumeCredits() {
    // let result = 0;
    // result += Math.max(this.performance.audience - 30, 0);
    // if ('comedy' === this.play.type)
    //   result += Math.floor(this.performance.audience / 5);
    // return result;
    return Math.max(this.performance.audience - 30, 0);
  }
}

// 조건부 로직을 다형성으로 바꾸기
class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000;
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }
    return result;
  }
}
class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30000;
    if (this.performance.audience > 20) {
      result += 10000 + 500 * (this.performance.audience - 20);
    }
    result += 300 * this.performance.audience;
    return result;
  }

  get volumeCredits() {
    return super.volumeCredits + Math.floor(this.performance.audience / 5);
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
    const calculator = createPerformanceCalculator(
      aPerformance,
      playFor(aPerformance),
    );
    const result = Object.assign({}, aPerformance);
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function amountFor(aPerformance) {
    return new PerformanceCalculator(aPerformance, playFor(aPerformance))
      .amount;
  }

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }
}
module.exports = { createStatementData };
