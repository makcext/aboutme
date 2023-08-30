// WoltController.ts
import {calculateDeliveryFee} from './WoltModel';




const Fee = () => {
  
  const deliveryFee = calculateDeliveryFee;
  return { deliveryFee };
};













export  { Fee };