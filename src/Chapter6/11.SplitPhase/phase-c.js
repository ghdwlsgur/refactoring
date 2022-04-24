'use strict';

function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  const priceData = {}; // 중간 데이터 구조 추가
  const price = applyShipping(
    priceData,
    basePrice,
    shippingMethod,
    quantity,
    discount,
  );
  return price;
}

// 중간 데이터 구조 매개변수 전달
function applyShipping(
  priceData,
  basePrice,
  shippingMethod,
  quantity,
  discount,
) {
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;

  const shippingCost = quantity * shippingPerCase;
  const price = basePrice - discount + shippingCost;
  return price;
}
