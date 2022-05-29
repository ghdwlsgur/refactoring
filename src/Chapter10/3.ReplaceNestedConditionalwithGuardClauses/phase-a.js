'use strict';

function payAmount(employee) {
  let result;
  // 퇴사한 직원인가 ?
  if (employee.isSeparated) {
    result = { amount: 0, reasonCode: 'SEP' };
    // 은퇴한 직원인가 ?
  } else {
    if (employee.isRetired) {
      result = { amount: 0, reasonCode: 'RET' };
    } else {
      // 급여 계산 로직
      lorem.ipsum(dolor.sitAmet);
      consectetur(adipiscing).elit();
      sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
      ut.enim.ad(minim.veniam);
      result = someFinalComputation();
    }
  }
  return result;
}
