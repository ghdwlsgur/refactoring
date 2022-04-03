'use strict';

// ! Sample Data
const anOrder = {
  basePrice: 2000,
};

// Before
function beforeRefactoring(anOrder) {
  let basePrice = anOrder.basePrice;
  return basePrice > 1000;
}

// After
const afterRefactoring = anOrder => {
  return anOrder.basePrice > 1000;
};

// ! Execute
console.log(beforeRefactoring(anOrder));
console.log(afterRefactoring(anOrder));
