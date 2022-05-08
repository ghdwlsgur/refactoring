/** 배경
 * 관련된 코드들이 가까이 모여 있다면 이해하기가 더 쉽다. 예건대 하나의 데이터 구조를 이용하는 문장들은
 * (다른 데이터를 이용하는 코드 사이에 흩어져 있기보다는) 한데 모여 있어야 좋다. 실제로 문장 슬라이드하기
 * 리팩터링으로 이런 코드들을 한데 모아둔다. 가장 흔한 사례는 변수를 선언하고 사용할 때다. 모든 변수 선언을
 * 함수 첫머리에 모아두는 사람도 있는데 나는 변수를 처음 사용할 때 선언하는 것을 선호한다.
 *
 * 관련 코드끼리 모으는 작업은 다른 리팩토링(주로 함수 추출하기)의 준비 단계로 자주 행해진다. 관련 있는
 * 코드들을 명확히 구분되는 함수로 추출하는 게 그저 문장들을 한데로 모으는 것보다 나은 분리법이다.
 */

'use strict';

const pricingPlan = retrievePricingPlan();
const order = retreiveOrder();
const baseCharge = pricingPlan.base;
let charge;
const chargePerUnit = pricingPlan.unit;
const units = order.units;
let discount;
charge = baseCharge + units * chargePerUnit;
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);
discount = discountableUnits * pricingPlan.discountFactor;
if (order.isRepeat) discount += 20;
charge = charge - discount;
chargeOrder(charge);

// 사실 부수효과가 없는 코드끼리는 마음 가는 대로 재배치할 수 있다.
// 현명한 프로그래머들이 되도록 부수효과 없는 코드들로 프로그래밍하는 이유 중 하나다.

/** 조건문이 있을 때의 슬라이드
 * 1. 조건문 밖으로 슬라이드할 때는 중복 로직이 제거
 * 2. 조건문 안으로 슬라이드할 때는 중복 로직이 추가
 */

function branchIn() {
  let result;
  if (availableResources.length === 0) {
    result = createResource();
    allocatdeResources.push(result);
  } else {
    result = availableResources.pop();
    allocatedResources.push(result);
  }
  return result;
}

function branchOut() {
  let result;
  if (availableResources.length === 0) result = createResource();
  else result = availableResources.pop();

  allocatdeResources.push(result);
  return result;
}
