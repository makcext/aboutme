import React from 'react';
import { Box, Grid, Paper, TextField, Typography } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';

import { useWoltController } from './WoltController';

interface WoltViewProps {
  paddingBottom?: number;
}

const WoltView = (props: WoltViewProps) => {
  // const { paddingBottom = 1 } = props;
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
                // value={cart.cartValue}
                onChange={(event) => handleCartValueChange(event.target.value.toString())}
                type='text'
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
                type="time"
                value={cart.orderTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                onChange={(event) => {
                  const [hour, minute] = event.target.value.split(':');
                  handleOrderTimeChange(Number(hour), Number(minute));
                }}
              />
            </Grid>

          </Grid>


          <Grid container spacing={2} padding={1} alignContent={'center'}>
            <Grid item xs={6} sm={6} >
              <TuneIcon />
            </Grid>
            <Grid item xs={6} sm={6}>
              <Typography variant="subtitle2" align="right">
                Delivery fee: {fee}€
              </Typography>
            </Grid>
          </Grid>




        </Box>
      </Paper>
    </Box>
  );
};

export default WoltView;