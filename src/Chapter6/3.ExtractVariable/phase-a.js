'use strict';

// ! Sample Data ===================================
const order = {
  quantity: 8,
  itemPrice: 1000,
};

// Example 1 ========================================
function price(order) {
  return (
    order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  );
}

// ! Execute
console.log(price(order));
