// WoltModel.ts
export interface Cart {
  cartValue: string;
  numItems: number;
  deliveryDistance: number;
  orderTime: Date; // Hours in UTC
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
  rushHourStart: Date;
  rushHourEnd: Date;
}

export const calculateDeliveryFee = (cart: Cart, options: DeliveryOptions): number => {
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

  const cartValueNumber = parseFloat(cart.cartValue);

  let deliveryFee = baseFee;

  if (cartValueNumber < smallOrderSurchargeThreshold) {
    deliveryFee += smallOrderSurchargeThreshold - cartValueNumber;
  }
  const additionalDistance = Math.max(cart.deliveryDistance - distanceThreshold, 0);

  const distanceFee = Math.ceil(additionalDistance / 500) * additionalDistanceFee;

  deliveryFee += Math.max(distanceFee, additionalDistanceFee);

  if (cart.numItems >= itemSurchargeThreshold && cart.numItems < 12) {
    deliveryFee += (cart.numItems - itemSurchargeThreshold + 1) * itemSurcharge;
  } else if (cart.numItems >= 12) {
    deliveryFee *= bulkItemFee;
  }

  if (cartValueNumber >= freeDeliveryThreshold) {
    return 0;
  }

  if (cart.orderTime.getTime() >= rushHourStart.getTime() && cart.orderTime.getTime() <= rushHourEnd.getTime()) {
    deliveryFee *= rushHourMultiplier;
  }

  const deliveryFee1 = Math.min(deliveryFee, maxFee);
  const roundedFee = Number(deliveryFee1.toFixed(2)); // round to two decimal places
  return roundedFee;
};