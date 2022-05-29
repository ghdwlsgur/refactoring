'use strict';

function disabilityAmount(anEmployee) {
  if (isNotEligibleForDisablity()) return 0;
  // 장애 수단 개선

  // 장애 수당 적용 여부 확인
  function isNotEligibleForDisablity() {
    return (
      anEmployee.seniority < 2 ||
      anEmployee.monthsDisabled > 12 ||
      anEmployee.isPartTime
    );
  }
}
