// WoltCalculator.tsx
import React, { useState, useEffect } from 'react';
import { Box, Grid, Paper, TextField, Typography } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';

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
    rushHourEnd,
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

  if (
    cart.orderTime.getTime() >= rushHourStart.getTime() &&
    cart.orderTime.getTime() <= rushHourEnd.getTime()
  ) {
    deliveryFee *= rushHourMultiplier;
  }

  const deliveryFee1 = Math.min(deliveryFee, maxFee);
  const roundedFee = Number(deliveryFee1.toFixed(2)); // round to two decimal places
  return roundedFee;
};

const WoltCalculator = () => {
  const [cart, setCart] = useState<Cart>({
    cartValue: '',
    numItems: 3,
    deliveryDistance: 1499,
    orderTime: new Date(0, 0, 0, 17, 35),
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
    rushHourEnd: new Date(0, 0, 0, 19, 0),
  });

  const [fee, setFee] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (cart.cartValue === '') {
      setFee(0);
      return;
    }
    const newFee = calculateDeliveryFee(cart, deliveryOptions);
    setFee(newFee);
  }, [cart, deliveryOptions]);

  const handleCartValueChange = (value: string) => {
    const newValue = parseFloat(value.replace(',', '.'));
    if (isNaN(newValue) || newValue < 0) {
      setErrorMessage('Invalid cart value');
      return;
    }
    setErrorMessage('');
    const newCart = { ...cart, cartValue: newValue.toString() };
    setCart(newCart);
  };

  const handleDeliveryDistanceChange = (newDeliveryDistance: number) => {
    if (isNaN(newDeliveryDistance) || newDeliveryDistance < 0) {
      console.log('Invalid input');
      return;
    }
    const newCart = { ...cart, deliveryDistance: newDeliveryDistance };
    setCart(newCart);
  };

  const handleNumItemsChange = (newNumItems: number) => {
    if (isNaN(newNumItems) || newNumItems < 0) {
      console.log('Invalid input');
      return;
    }
    const newCart = { ...cart, numItems: newNumItems };
    setCart(newCart);
  };

  const handleOrderTimeChange = (hour: number, minute: number) => {
    if (isNaN(hour) || isNaN(minute) || hour < 0 || hour > 23 || minute < 0 || minute > 59) {
      console.log('Invalid input');
      return;
    }
    const newDate = new Date(cart.orderTime);
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    const newCart = { ...cart, orderTime: newDate };
    setCart(newCart);
  };

  return (
    <Box paddingBottom={0} justifyContent="space-around">
      <Paper variant="outlined" sx={{ borderColor: 'gray', padding: 1 }}>
        <Typography variant="h4">Wolt Calc Fee</Typography>

        <Box padding={1}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="Cart Value €"
                name="cartValue"
                onChange={(event) => handleCartValueChange(event.target.value.toString())}
                type="text"
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="Delivery Distance"
                name="deliveryDistance"
                value={cart.deliveryDistance}
                onChange={(event) => handleDeliveryDistanceChange(Number(event.target.value))}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="Number of Items"
                name="numItems"
                value={cart.numItems}
                onChange={(event) => handleNumItemsChange(Number(event.target.value))}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="Order Time"
                name="orderTime"
                type="time"
                value={cart.orderTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                onChange={(event) => {
                  const [hour, minute] = event.target.value.split(':');
                  handleOrderTimeChange(Number(hour), Number(minute));
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} padding={1}>
            <Grid item xs={6} sm={6}>
              <TuneIcon />
            </Grid>
            <Grid item xs={6} sm={6}>
              {errorMessage ? (
                <Typography variant="subtitle2" color="error">
                  {errorMessage}
                </Typography>
              ) : (
                <Typography variant="subtitle2" align="right">
                  Delivery fee: {fee}€
                </Typography>
              )}
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default WoltCalculator;
