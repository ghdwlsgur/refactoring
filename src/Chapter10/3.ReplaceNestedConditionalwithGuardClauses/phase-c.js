'use strict';

function payAmount(employee) {
  // let result;
  // 퇴사한 직원인가 ?
  if (employee.isSeparated) result = { amount: 0, reasonCode: 'SEP' };
  // 은퇴한 직원인가 ?
  if (employee.isRetired) result = { amount: 0, reasonCode: 'RET' };

  lorem.ipsum(dolor.sitAmet);
  consectetur(adipiscing).elit();
  sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
  ut.enim.ad(minim.veniam);
  // result = someFinalComputation();
  return someFinalComputation();
}
