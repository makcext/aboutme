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
  const distanceFee = Math.ceil(additionalDistance / 500) * additionalDistanceFee;
  deliveryFee += Math.max(distanceFee, additionalDistanceFee);

  if (numItems >= itemSurchargeThreshold && numItems < 12) {
    deliveryFee += (numItems - itemSurchargeThreshold + 1) * itemSurcharge;
  } else if (numItems >= 12) {
    deliveryFee += bulkItemFee;
  }

  if (cartValue >= freeDeliveryThreshold) {
    return 0;
  }

  if (orderTime >= rushHourStart && orderTime <= rushHourEnd) {
    deliveryFee *= rushHourMultiplier;
  }

  return Math.min(deliveryFee, maxFee);
};

// Example usage
export const cart: Cart = {
  cartValue: 10,
  numItems: 4,
  deliveryDistance: 1234,
  orderTime: 15
};


export const deliveryOptions: DeliveryOptions = {
  baseFee: 3,
  maxFee: 15,
  smallOrderSurchargeThreshold: 10,
  distanceThreshold: 1000,
  additionalDistanceFee: 1,
  itemSurchargeThreshold: 5,
  itemSurcharge: 0.5,
  bulkItemFee: 1.2,
  freeDeliveryThreshold: 100,
  rushHourMultiplier: 1.2,
  rushHourStart: 15,
  rushHourEnd: 19
};

// calculateDeliveryFee1(cart, deliveryOptions);
console.log('calculateDeliveryFee1', cart, deliveryOptions);


export const fee = calculateDeliveryFee(cart, deliveryOptions);
console.log(`Delivery fee: ${fee}€`);
















