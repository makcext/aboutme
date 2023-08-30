import { useState, useEffect } from 'react';
import { Cart, DeliveryOptions, calculateDeliveryFee } from './WoltModel';

export const useWoltController = () => {
  const [cart, setCart] = useState<Cart>({
    cartValue: 12,
    numItems: 3,
    deliveryDistance: 1523,
    orderTime: 11
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
    rushHourStart: 15,
    rushHourEnd: 19
  });

  const [fee, setFee] = useState<number>(0);

  useEffect(() => {
    const initialFee = calculateDeliveryFee(cart, deliveryOptions);
    setFee(initialFee);
  }, [cart, deliveryOptions]);

  const handleCartValueChange = (newCartValue: number) => {
    const newCart = { ...cart, cartValue: newCartValue };
    setCart(newCart);
    const newFee = calculateDeliveryFee(newCart, deliveryOptions);
    setFee(newFee);
    console.log(newCart)

    
  };

  const handleDeliveryDistanceChange = (newDeliveryDistance: number) => {
    const newCart = { ...cart, deliveryDistance: newDeliveryDistance };
    setCart(newCart);
    const newFee = calculateDeliveryFee(newCart, deliveryOptions);
    setFee(newFee);
  };

  const handleNumItemsChange = (newNumItems: number) => {
    const newCart = { ...cart, numItems: newNumItems };
    setCart(newCart);
    const newFee = calculateDeliveryFee(newCart, deliveryOptions);
    setFee(newFee);
  };

  const handleOrderTimeChange = (newOrderTime: number) => {
    const newCart = { ...cart, orderTime: newOrderTime };
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