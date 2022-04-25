'use script';

// Before
function foundPerson(people) {
  for (let i = 0; i < people.length; i++) {
    if (people[i] === 'Don') return 'Don';
    if (people[i] === 'John') return 'John';
    if (people[i] === 'Kent') return 'Kent';
  }

  return '';
}
// Change =========================================

// After
function foundPersonAfter(people) {
  const candidates = ['Don', 'John', 'Kent'];
  return people.find(p => candidates.includes(p) || '');
}

/**
 * 반드시 메서드를 가능한 한 잘게 나눴는지 확인해야 한다.
 * 거대하고 복잡한 알고리즘을 교체하기란 상당히 어려우니 알고리즘을 간소화하는 작업부터 해 교체가 쉬워진다.
 */
