// WoltModel.ts
export interface Cart {
  cartValue: number;
  numItems: number;
  deliveryDistance: number;
  orderTime: number; // Hours in UTC
}

export interface DeliveryOptions {
  baseFee: number;
  maxFee: number;
  smallOrderSurchargeThreshold: number;
  distanceThreshold: number;
  additionalDistanceFee: number;
  itemSurchargeThreshold: number;
  itemSurcharge: number;
  bulkItemFee: number;
  freeDeliveryThreshold: number;
  rushHourMultiplier: number;
  rushHourStart: number;
  rushHourEnd: number;
}

export const calculateDeliveryFee = (cart: Cart, options: DeliveryOptions): number => {
  const {
    cartValue,
    numItems,
    deliveryDistance,
    orderTime
  } = cart;

  const {
    baseFee,
    maxFee,
    smallOrderSurchargeThreshold,
    distanceThreshold,
    additionalDistanceFee,
    itemSurchargeThreshold,
    itemSurcharge,
    bulkItemFee,
    freeDeliveryThreshold,
    rushHourMultiplier,
    rushHourStart,
    rushHourEnd
  } = options;

  let deliveryFee = baseFee;

  if (cartValue < smallOrderSurchargeThreshold) {
    deliveryFee += smallOrderSurchargeThreshold - cartValue;
  }
  const additionalDistance = Math.max(deliveryDistance - distanceThreshold, 0);
  console.log("additional distance is", additionalDistance);
  
  console.log(Math.ceil(additionalDistance / 500) * additionalDistanceFee);

  const distanceFee = Math.ceil(additionalDistance / 500) * additionalDistanceFee;

  deliveryFee += Math.max(distanceFee, additionalDistanceFee);

  if (numItems >= itemSurchargeThreshold && numItems < 12) {
    deliveryFee += (numItems - itemSurchargeThreshold + 1) * itemSurcharge;
  } else if (numItems >= 12) {
    deliveryFee *= bulkItemFee;
  }

  if (cartValue >= freeDeliveryThreshold) {
    return 0;
  }

  if (orderTime >= rushHourStart && orderTime <= rushHourEnd) {
    deliveryFee *= rushHourMultiplier;
  }

  const deliveryFee1 = Math.min(deliveryFee, maxFee);
  console.log("delivery fee is", deliveryFee1);
  const roundedFee = Number(deliveryFee1.toFixed(2)); // round to two decimal places
  // console.log("delivery rounder fee is", roundedFee);
  return roundedFee;


  // return Math.min(deliveryFee, maxFee);
  
};
