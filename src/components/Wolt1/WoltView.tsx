import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Fee } from './WoltController';
// import WoltModel from './WoltModel';
import { calculateDeliveryFee, cart, deliveryOptions } from './WoltModel';

interface Props {
  paddingBottom: number;
}

const WoltView: React.FC<Props> = ({ paddingBottom }) => {
  








const label = {
  cartValueLabel: 'Cart value',
  deliveryDistanceLabel: 'Delivery distance',
  amountOfItemsLabel: 'Amount of items',
  timeAndDateLabel: 'Time and date',
  buttonLabel: 'Calculate delivery fee'
};


  return (
    <Box paddingBottom={paddingBottom}>
      <Paper>
        <Box padding={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={label.cartValueLabel}
                name="cartValue"
                value={cart.cartValue}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={label.deliveryDistanceLabel}
                name="deliveryDistance"
                value={cart.deliveryDistance}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={label.amountOfItemsLabel}
                name="numItems"
                value={cart.numItems}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={label.timeAndDateLabel}
                name="timeAndDate"
                // type="datetime-local"
                value={cart.orderTime}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={12}>
            {/* <Button variant="contained" color="primary" >
  {label.buttonLabel}
</Button> */}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">
                Delivery fee: {calculateDeliveryFee(cart, deliveryOptions)} €
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default WoltView;