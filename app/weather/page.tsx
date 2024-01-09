"use client";
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import WeatherData from '../../components/widgets/Weather/WeatherModel';
import fetchWeatherData from "../../components/widgets/Weather/WeatherController";

const Page = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetchWeatherData()
      .then((data) => setWeather(data))
      .catch((error) => console.error(error));
  }, []);

  console.log('weather', weather);

  return (
    <>
      <Box>
        {weather ? (
          <>
            <Typography>
              {weather.main.temp}°C [ {weather.weather[0].description} ]
            </Typography>
            <Typography>
              Temperature: {weather.main.temp}°C <br />
              Description: {weather.weather[0].description} <br />
              Feels like: {weather.main.feels_like}°C <br />
              Min/Max: {weather.main.temp_min} - {weather.main.temp_max}°C <br />
              Pressure: {weather.main.pressure} hPa <br />
              Humidity: {weather.main.humidity} % <br />
            </Typography>
          </>
        ) : (
          <Typography>Loading weather data...</Typography>
        )}
      </Box>
    </>
  );
}

export default Page;