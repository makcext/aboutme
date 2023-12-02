// WeatherView.tsx
import React from 'react';
import WeatherData from './WeatherModel';
import { Typography } from '@mui/material';

interface WeatherViewProps {
  weather: WeatherData | null;
}

const WeatherView: React.FC<WeatherViewProps> = ({ weather }) => {
  return (
    <div>
      {weather ? (
        <div>
          <Typography variant='h2'>Weather in Athens, Greece</Typography>
          <Typography variant='subtitle2'>Temperature: {weather.main.temp}°C</Typography>
          <Typography variant='subtitle2'>Weather: {weather.weather[0].description}</Typography>
          <Typography variant='subtitle2'>Weather: {weather.weather[0].id}</Typography>
          <Typography variant='subtitle2'>Weather: {weather.weather[0].description}</Typography>

        </div>
      ) : (
        <Typography>Loading weather data...</Typography>
      )}
    </div>
  );
};

export default WeatherView;
