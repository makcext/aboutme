// WoltCalculator.tsx
import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import Button from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';



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


interface DeliveryFeeCalculator {
  calculate(cart: Cart, options: DeliveryOptions): number;
}

class DeliveryFeeCalculator implements DeliveryFeeCalculator {
  calculate(cart: Cart, options: DeliveryOptions): number {
    // ... existing implementation ...
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
  }
}

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
  const [deliveryFeeCalculator] = useState<DeliveryFeeCalculator>(new DeliveryFeeCalculator());
  useEffect(() => {
    if (cart.cartValue === '') {
      setFee(0);
      return;
    }
    const newFee = deliveryFeeCalculator.calculate(cart, deliveryOptions);
    setFee(newFee);
  }, [cart, deliveryOptions, deliveryFeeCalculator]);

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

  const [open, setOpen] = useState(false);

  // Modify your existing handleClick function
  const handleClickOptions = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  // Add this state variable at the top of your component
  const [infoDialogOpen, setInfoDialogOpen] = useState(false);

  // Add this function to handle the click event of the InfoOutlinedIcon
  const handleInfoIconClick = () => {
    setInfoDialogOpen(prevState => !prevState);
  };

  return (
    <Box paddingBottom={0} justifyContent="space-around">
      <Paper variant="outlined" sx={{ borderColor: 'gray', padding: 1 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Typography variant="h5">Wolt Calc Fee</Typography>
          <InfoOutlinedIcon color='success' onClick={handleInfoIconClick} />
        </Grid>

        <Dialog
          open={infoDialogOpen}
          onClose={handleInfoIconClick}
        >
          <DialogTitle>{"Wolt Calculator Information"}</DialogTitle>
          <DialogContent>
              <Typography variant='subtitle2'>
                This is a TypeScript React component named WoltCalculator. It's a calculator for delivery fees, presumably for a service like Wolt.
                The component uses Material UI for its UI components and state management is done using React's useState and useEffect hooks.
                The calculator takes into account various factors such as cart value, number of items, delivery distance, and order time to calculate the delivery fee.
                The DeliveryFeeCalculator class is used to encapsulate the logic for calculating the delivery fee based on a Cart and DeliveryOptions objects.
                The component also includes a dialog box that displays the current delivery options when a button is clicked.
              </Typography>
          </DialogContent>
          <DialogActions>
          <Button  size={'small'} color="success" variant='outlined' onClick={handleInfoIconClick}>Close</Button>

          </DialogActions>
        </Dialog>





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
              <Button onClick={handleClickOptions}>
                <TuneIcon color="warning" />
              </Button>
            </Grid>
            <Dialog open={open} onClose={handleClickOptions}>
              <DialogTitle>
                Delivery Options
                <Button onClick={handleClickOptions} aria-label="close">
                  <CloseIcon color="action" />
                </Button>
              </DialogTitle>
              <DialogContent>
                {Object.keys(deliveryOptions).map((key) => (
                  <Typography key={key} variant="subtitle1" gutterBottom style={{ whiteSpace: 'nowrap' }}>
                    {key}: {typeof deliveryOptions[key as keyof DeliveryOptions] === 'object'
                      ? <Typography color="orange" display="inline">{formatTime(new Date(deliveryOptions[key as keyof DeliveryOptions])).toString()}</Typography>
                      : <Typography color="orange" display="inline">{deliveryOptions[key as keyof DeliveryOptions].toString()}</Typography>}
                  </Typography>
                ))}
              </DialogContent>
            </Dialog>
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
