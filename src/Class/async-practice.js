'use strict';

console.log(true === (async () => 1)() instanceof Promise);
true === (async () => 1)() instanceof Promise;

class A {
  async add(a, b) {
    return a + b;
  }
}

const oA = new A();
oA.add(1, 2).then(console.log);

true === oA.add(1, 2) instanceof Promise;

// Object 단축 함수식
const oB = {
  async add(a, b) {
    return a + b;
  },
};

oB.add(1, 2).then(console.log);

// Object Arrow 함수식
const oC = {
  add: async (a, b) => a + b,
};

oC.add(1, 2).then(console.log);
