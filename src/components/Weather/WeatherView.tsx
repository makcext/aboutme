// WeatherView.tsx
import React from 'react';
import WeatherData from './WeatherModel';

interface WeatherViewProps {
  weather: WeatherData | null;
}

const WeatherView: React.FC<WeatherViewProps> = ({ weather }) => {
  return (
    <div>
      {weather ? (
        <div>
          <h2>Weather in Athens, Greece</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherView;
