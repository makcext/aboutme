import React from 'react';
import { Box, Grid, Paper, TextField, Typography } from '@mui/material';
import { useWoltController } from './WoltController';

interface WoltViewProps {
  paddingBottom?: number;
}

const WoltView = (props: WoltViewProps) => {
  const { paddingBottom = 0 } = props;
  const {
    cart,
    fee,
    // feeRun,
    handleCartValueChange,
    handleDeliveryDistanceChange,
    handleNumItemsChange,
    handleOrderTimeChange
  } = useWoltController();

  return (
    <Box paddingBottom={0} justifyContent="space-around">
        <Paper variant="outlined" sx={{ borderColor: 'gray', padding: 1 }}>
        <Typography variant="h4" >Wolt Calc Fee</Typography>
        <Box padding={1}>

          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
              <TextField
                fullWidth
                size='small'
                label="Cart Value €"
                name="cartValue"
                value={cart.cartValue}
                onChange={(event) => handleCartValueChange(Number(event.target.value))}
                // type='number'
                // inputMode='numeric'
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                fullWidth
                size='small'
                label="Delivery Distance"
                name="deliveryDistance"
                value={cart.deliveryDistance}
                onChange={(event) => handleDeliveryDistanceChange(Number(event.target.value))}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                fullWidth
                size='small'
                label="Number of Items"
                name="numItems"
                value={cart.numItems}
                onChange={(event) => handleNumItemsChange(Number(event.target.value))}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                fullWidth
                size='small'
                label="Order Time"
                name="orderTime"
                // type="datetime-local"
                value={cart.orderTime}
                onChange={(event) => handleOrderTimeChange(Number(event.target.value))}
                // InputLabelProps={{
                //   shrink: true
                // }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" align='right' >
                Delivery fee: {fee} €
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default WoltView;