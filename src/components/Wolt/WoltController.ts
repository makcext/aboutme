import { useState, useEffect } from 'react';
import { Cart, DeliveryOptions, calculateDeliveryFee } from './WoltModel';

export const useWoltController = () => {
  const [cart, setCart] = useState<Cart>({
    cartValue: '',
    numItems: 3,
    deliveryDistance: 1499,
    orderTime: new Date(0, 0, 0, 17, 35)  
  });

  const [deliveryOptions] = useState<DeliveryOptions>({
    baseFee: 2,
    maxFee: 15,
    smallOrderSurchargeThreshold: 10,
    distanceThreshold: 1000,
    additionalDistanceFee: 1,
    itemSurchargeThreshold: 5,
    itemSurcharge: 0.5,
    bulkItemFee: 1.2,
    freeDeliveryThreshold: 100,
    rushHourMultiplier: 1.2,
    rushHourStart: new Date(0, 0, 0, 17, 0),
    rushHourEnd: new Date(0, 0, 0, 19, 0)
  });

  const [fee, setFee] = useState<number>(0);

  useEffect(() => {
    if (cart.cartValue === '') {
      setFee(0);
      return;
    }
    const initialFee = calculateDeliveryFee(cart, deliveryOptions);
    setFee(initialFee);
  }, [cart, deliveryOptions]);


  const handleCartValueChange = (value: string) => {
    const newValue = parseFloat(value.replace(',', '.'));
    if (isNaN(newValue)) {
      console.log(newValue);
    }
    const newCart = { ...cart, cartValue: newValue.toString() };
    setCart(newCart);
    if (value !== '' && newValue !== 0) {
      const newFee = calculateDeliveryFee(newCart, deliveryOptions);
      setFee(newFee);
    }
  };

  const handleDeliveryDistanceChange = (newDeliveryDistance: number) => {
    const newValue = Number(newDeliveryDistance);
    if (isNaN(newValue)) {
      return;
    }
    const newCart = { ...cart, deliveryDistance: newDeliveryDistance };
    setCart(newCart);
    const newFee = calculateDeliveryFee(newCart, deliveryOptions);
    setFee(newFee);
  };

  const handleNumItemsChange = (newNumItems: number) => {
    const newValue = Number(newNumItems);
    if (isNaN(newValue)) {
      return;
    }
    const newCart = { ...cart, numItems: newNumItems };
    setCart(newCart);
    const newFee = calculateDeliveryFee(newCart, deliveryOptions);
    setFee(newFee);
  };

  const handleOrderTimeChange = (hour: number, minute: number) => {
    const newDate = new Date(cart.orderTime);
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    const newCart = { ...cart, orderTime: newDate };
    setCart(newCart);
    const newFee = calculateDeliveryFee(newCart, deliveryOptions);
    setFee(newFee);
  };

  return {
    cart,
    fee,
    // feeRun,
    handleCartValueChange,
    handleDeliveryDistanceChange,
    handleNumItemsChange,
    handleOrderTimeChange
  };
};