// WoltModel.ts
import moment from 'moment';

interface WoltData{
	cartValue: number;
	deliveryDistance: number;
	amountOfItems: number;
	timeAndDate: string;
	deliveryFee: number;
}


export interface Model {
	data: WoltData;
	calculateDeliveryFee: (data: WoltData) => number;
}

const initialData: WoltData = {
	cartValue: 0,
	deliveryDistance: 0,
	amountOfItems: 0,
	timeAndDate: moment().format('YYYY-MM-DD HH:mm:ss'),
	deliveryFee: 0,
};

const WoltModel: Model = {
	data: initialData,
	calculateDeliveryFee,
};


export function calculateDeliveryFee(data: WoltData): number{
	
	
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

	console.log('smallOrderSurcharge',  smallOrderSurcharge, 'distanceFee',  distanceFee, 'totalItem',  totalItemSurcharge, )

	console.log('totalFee', totalFee);

	// Return the calculated delivery fee
	return totalFee;

}



export default WoltModel;