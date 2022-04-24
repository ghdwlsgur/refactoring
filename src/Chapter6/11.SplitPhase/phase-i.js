'use strict';

// 함수 선언식 => 함수 표현식
const calculatePricingData = (product, quantity) => {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;

  return { basePrice, quantity, discount };
};

const applyShipping = (priceData, shippingMethod) => {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  return priceData.basePrice - priceData.discount + shippingCost;
};

const priceOrder = (product, quantity, shippingMethod) => {
  const priceData = calculatePricingData(product, quantity);
  return applyShipping(priceData, shippingMethod);
};
