"use client";
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';

import Link from 'next/link';


import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import AirIcon from '@mui/icons-material/Air';

import fetchForecastWeatherData from "./forecast";

interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: [
    {
      icon: string;
      description: string;
    }
  ];
  dt: number;
}





const Page = () => {
  const [data, setData] = useState<WeatherData[] | null>(null);
  const [city, setCity] = useState(null);

  useEffect(() => {
    fetchForecastWeatherData().then((fetchedData: any) => {
      setData(fetchedData.list);
      setCity(fetchedData.city.name);
    }, (error: any) => {
      console.log(error);
    });
  }, []);

  const handleBackClick = () => {
    //use Link from next/link to navigate to the home page

    <Link
      href="/"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Typography variant="h4" fontSize={14} sx={{ textAlign: 'left' }} gutterBottom>
        'Loading weather data...'
      </Typography>
    </Link>

  };


  const handleGPSClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetchForecastWeatherData(latitude, longitude)
        .then((fetchedData: any) => {
          if (fetchedData && fetchedData.list && fetchedData.city) {
            setData(fetchedData.list);
            setCity(fetchedData.city.name);
          } else {
            console.error('Invalid data format:', fetchedData);
          }
        })
        .catch((error: any) => {
          console.error('Failed to fetch weather data:', error);
        });
    }, (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.error("User denied the request for Geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          console.error("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          console.error("The request to get user location timed out.");
          break;
        default:
          console.error("An unknown error occurred.");
          break;
      }
    });
  };






  return (
    <>
      <Box>
        <Link href="/">
          <Button startIcon={<ArrowBackIcon />}>
            Back
          </Button>
        </Link>
        <Button startIcon={<LocationOnIcon />} onClick={handleGPSClick}>
          Use GPS
        </Button>
        {data && data.map((item: any, index: number) => (
          <Card key={index} sx={{ margin: 2 }}>
            <CardHeader
              avatar={
                <Avatar>
                  <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt={item.weather[0].description} />
                </Avatar>
              }
              title={`Weather in ${city} on ${new Date(item.dt * 1000).toLocaleDateString()} at ${new Date(item.dt * 1000).toLocaleTimeString()}`}
              subheader={item.weather[0].description}
            />
            <CardContent>
              <Box display="flex" alignItems="center">
                <ThermostatIcon />
                <Typography variant="h6">
                  {item.main.temp}°C
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <ThermostatIcon />
                <Typography variant="body2">
                  Feels like: {item.main.feels_like}°C
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <OpacityIcon />
                <Typography variant="body2">
                  {item.main.humidity}%
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <AirIcon />
                <Typography variant="body2">
                  {item.wind.speed} m/s
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default Page;