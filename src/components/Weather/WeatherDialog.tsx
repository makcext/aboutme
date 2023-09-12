//WeatherDialog.tsx

import React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';

import WeatherData from './WeatherModel';

interface WeatherProps {
  weather: WeatherData | null;
}

const WeatherDialog: React.FC<WeatherProps> = ({ weather }) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

	console.log(weather)

	return (
		<>

<Box onClick={() => setDialogOpen(true)}>
        {weather ? (
          <>
            <Typography variant="h4" fontSize={14} sx={{ textAlign: 'left' }} gutterBottom>
              {weather.main.temp}°C [{weather.weather[0].description}] 
            </Typography>
          </>
        ) : (
          <Typography>Loading weather data...</Typography>
        )}
      </Box>

      <Dialog open={isDialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Weather Details</DialogTitle>
        <DialogContent>
          {weather ? (
            <DialogContentText>
              Temperature: {weather.main.temp}°C <br />
              Description: {weather.weather[0].description} <br />
							{/* TemperatureMax: {weather.main.temp_max}°C <br /> */}
              
            </DialogContentText>
          ) : (
            <DialogContentText>Loading weather data...</DialogContentText>
          )}
        </DialogContent>
        <Button onClick={() => setDialogOpen(false)}>Close</Button>
      </Dialog>




		</>
	);
};

	export default WeatherDialog;