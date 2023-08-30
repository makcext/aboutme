// WoltController.ts
import {calculateDeliveryFee, updateCartValue} from './WoltModel';




const Fee = () => {
  
  const deliveryFee = calculateDeliveryFee;
  return { deliveryFee };
};

const handleCartValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log('New value:', event.target.value);
  const newValue = Number(event.target.value);
  updateCartValue(newValue);
};











export  { Fee, handleCartValueChange };