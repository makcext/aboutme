// WoltModel.ts
import moment from 'moment';

export interface WoltData {
	cartValue: number;
	deliveryDistance: number;
	amountOfItems: number;
	timeAndDate: string;
	deliveryFee: number;
}


let tasks: WoltData[] = [];

export function calculate(data: WoltData): number {
  const deliveryFee = calculateDeliveryFee(data);
  const newData = { ...data, deliveryFee };
  const index = tasks.findIndex(task => task.timeAndDate === data.timeAndDate);
  if (index !== -1) {
    tasks[index] = newData;
  } else {
    tasks.push(newData);
  }
  console.log('WoltModel.ts calculate', tasks);
  return deliveryFee;
}

// console.log('WoltModel.ts tasks array', tasks);




export interface Model {
	data: WoltData;
	calculate: (data: WoltData) => number;
	calculateDeliveryFee: (data: WoltData) => number;
	deliveryFee: number;
}

const initialData: WoltData = {
	cartValue: 8,
	deliveryDistance: 1234,
	amountOfItems: 5,
	timeAndDate: moment().format('YYYY-MM-DD HH:mm:ss'),
	deliveryFee: 0,
};

const WoltModel: Model = {
	data: initialData,
	calculate,
	calculateDeliveryFee,
	deliveryFee: 0,
};

// console.log(calculate(WoltModel.data));
// console.log('WoltModel.ts WoltModel', WoltModel);

export function calculateDeliveryFee(data: WoltData): number {


	const { cartValue, deliveryDistance, amountOfItems, timeAndDate } = data;

	// Calculate small order surcharge
	const smallOrderSurcharge = Math.max(0, Math.round((10 - cartValue) * 100) / 100);

	// Calculate delivery fee based on distance
	const baseFee = 1;
	const additionalFee = Math.ceil(deliveryDistance / 500) - 1;
	const distanceFee = Math.max(baseFee + additionalFee, 1);
	// console.log(distanceFee);

	// Calculate item surcharge
	const itemSurcharge = amountOfItems >= 5 ? (amountOfItems - 4) * 0.5 : 0;
	const bulkFee = amountOfItems > 12 ? 1.2 : 0;
	const totalItemSurcharge = itemSurcharge + bulkFee;

	// Calculate rush hour surcharge
	const isRushHour = moment(timeAndDate).hour() >= 15 && moment(timeAndDate).hour() <= 19;
	const rushHourMultiplier = isRushHour ? 1.2 : 1;

	// Calculate total delivery fee
	let totalFee = distanceFee + totalItemSurcharge + smallOrderSurcharge;
	if (cartValue >= 100) {
		totalFee = 0; // Free delivery for cart value >= 100€
	} else {
		totalFee = Math.min(totalFee * rushHourMultiplier, 15);
		// totalFee = Math.min(totalFee, 100); // Cap the fee at 100€
	}


	// console.log('alculateDeliveryFee', data);

	// Return the calculated delivery fee
	return totalFee;

}


















interface Cart {
  cartValue: number;
  numItems: number;
  deliveryDistance: number;
  orderTime: number; // Hours in UTC
}

interface DeliveryOptions {
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

const calculateDeliveryFee1 = (cart: Cart, options: DeliveryOptions): number => {
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
const cart: Cart = {
  cartValue: 10,
  numItems: 4,
  deliveryDistance: 1,
  orderTime: 1
};



const deliveryOptions: DeliveryOptions = {
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
// console.log('calculateDeliveryFee1', cart, deliveryOptions);


const fee = calculateDeliveryFee1(cart, deliveryOptions);
// console.log(`Delivery fee: ${fee}€`);
















export default WoltModel;