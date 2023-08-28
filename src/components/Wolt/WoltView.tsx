import React from 'react';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useWoltController } from './WoltController';

interface WoltProps {
  paddingBottom: number;
}

const data = {
  title: 'Wolt Calc Fee',
  cartLabel: 'Cart value',
  distanceLabel: 'Delivery distance',
  amountLabel: 'Amount of items',
  timeLabel: 'Time & Date',
  buttonLabel: 'calc',
};

function Wolt({ paddingBottom }: WoltProps) {
  const [submitedData, handleDataChange, handleButtonClick] = useWoltController();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    handleDataChange({ ...submitedData, [name]: value });
  };

  return (
    <Box paddingBottom={paddingBottom} justifyContent="Left" textAlign={'left'}>
      <Paper elevation={4}>
        <Paper variant="outlined" sx={{ borderColor: 'gray', padding: 1 }}>
          <Typography variant="h3">
            {data.title}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    sx={{ display: 'block', padding: 0 }}
                    label={data.cartLabel}
                    name="cartValue"
                    size='small'
                    value={submitedData.cartValue}
                    onChange={(event) => handleInputChange(event)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ display: 'block', padding: 0 }}
                    label={data.distanceLabel}
                    name='deliveryDistance'
                    size='small'
                    value={submitedData.deliveryDistance}
                    onChange={(event) => handleInputChange(event)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ display: 'block', padding: 0 }}
                    label={data.amountLabel}
                    name='amountOfItems'
                    size='small'
                    value={submitedData.amountOfItems}
                    onChange={(event) => handleInputChange(event)}
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DateTimePicker
                      sx={{ display: 'block', padding: 0 }}
                      label={data.timeLabel}
                      value={submitedData.timeAndDate}
                      onChange={(date) => handleDataChange({ ...submitedData, timeAndDate: date })}
                    />
                  </LocalizationProvider>
                </Grid> */}
              </Grid>
            </Grid>
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <Button variant="contained" color="primary" onClick={handleButtonClick}>
              {data.buttonLabel}
            </Button>
						<Grid item xs={12}>
          <Typography variant="body2">{`Delivery price: ${submitedData.deliveryFee} €`}</Typography>
          </Grid>
          </Box>
        </Paper>
      </Paper>
    </Box>
  );
}

export default Wolt;
