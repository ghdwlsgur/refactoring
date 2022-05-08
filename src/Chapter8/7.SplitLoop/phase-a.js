'use strict';

/** 반복문 쪼개기
 * 리팩터링과 최적화를 구분하자.
 *
 * 최적화는 코드를 깔끔히 정리한 이후에 수행하자.
 * 반복문을 두 번 실행하는 게 병목이라 밝혀지면 그때 다시 하나로 합치기는 식은 죽 먹기다.
 */

function totalSalaryOfYoungest() {
  let youngest = people[0] ? people[0].age : Infinity;
  let totalSalary = 0;
  for (const p of people) {
    if (p.age < youngest) youngest = p.age;
    totalSalary += p.salary;
  }
  return `최연소: ${youngest}, 총 급여: ${totalSalary}`;
}
