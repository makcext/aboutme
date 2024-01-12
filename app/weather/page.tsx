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
import Chip from '@mui/material/Chip';

import Link from 'next/link';


import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import AirIcon from '@mui/icons-material/Air';

import fetchForecastWeatherData from "./forecast";
import fetchWeatherData from "@/components/widgets/Weather/WeatherController";

import { Grid } from "@mui/material";

interface ForecastWeatherData {
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
  const [data, setData] = useState<ForecastWeatherData[] | null>(null);
  const [city, setCity] = useState(null);

  const [weatherData, setWeatherData] = useState(null);

  console.log(weatherData);


  useEffect(() => {
    fetchForecastWeatherData().then((fetchedData: any) => {
      setData(fetchedData.list);
      setCity(fetchedData.city.name);
    }, (error: any) => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    fetchWeatherData().then((fetchedData: any) => {
      setWeatherData(fetchedData);
    }, (error: any) => {
      console.log(error);
    });
  }, []);

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
      console.error('Failed to get location:', error);
    }
    );
  };

  return (
    <>



      {weatherData && (

        <Card sx={{ margin: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs={6} container >
              <Typography variant="h4" fontSize={14} sx={{ textAlign: 'left' }} gutterBottom>
                {weatherData.name}
              </Typography>
            </Grid>


            <Grid item xs={6} container >
              <Box>
                <Avatar>
                  <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].description} />
                </Avatar>

                <Box>
                  <Typography variant="h4" fontSize={14} sx={{ textAlign: 'left' }} gutterBottom>
                    temperature:{weatherData.main.temp}°C
                  </Typography>
                </Box>
              </Box>



              <Typography variant="h4" fontSize={14} sx={{ textAlign: 'left' }} gutterBottom>
                description: {weatherData.weather[0].description} <br />
                feels like: {weatherData.main.feels_like}°C <br />
                min/max: {weatherData.main.temp_min} - {weatherData.main.temp_max}°C <br />
                pressure: {weatherData?.main.pressure} hPa <br />
                humidity: {weatherData?.main.humidity} % <br />
              </Typography>
            </Grid>

          </Grid>
        </Card>



      )
      }









      <Box>
        <Grid container spacing={4}>
          <Grid item xs={6} container >
            <Link href="/">
              <Button>
                <Chip icon={<ArrowBackIcon />} label="Back" clickable color="warning" variant="outlined" />
              </Button>
            </Link>
          </Grid>

          <Grid item xs={6} container >
            <Button onClick={handleGPSClick}>
              <Chip icon={<LocationOnIcon />} label="Use GPS" clickable color="success" variant="outlined" />
            </Button>
          </Grid>

        </Grid>
















        {data && data.map((item: any, index: number) => (
          <Card key={index} sx={{ margin: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
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
              </Grid>
              <Grid item xs={6}>
                <CardHeader
                  avatar={
                    <Avatar>
                      <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt={item.weather[0].description} />
                    </Avatar>
                  }
                  title={`Weather in ${city} on ${new Date(item.dt * 1000).toLocaleDateString()} at ${new Date(item.dt * 1000).toLocaleTimeString()}`}
                  subheader={item.weather[0].description}
                />
              </Grid>
            </Grid>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default Page;