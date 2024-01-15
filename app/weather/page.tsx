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




import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import AirIcon from '@mui/icons-material/Air';

import fetchForecastWeatherData from "./forecast";
import fetchWeatherData from "@/components/widgets/Weather/WeatherController";


import { Grid } from "@mui/material";
import { set } from "mobx";

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


interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };

  weather: {
    id: number,
    description: string;
    icon: string;
  }[];


}
const Page = () => {
  const [data, setData] = useState<ForecastWeatherData[] | null>(null);
  const [city, setCity] = useState(null);
  const [gps, setGps] = useState<GeolocationCoordinates | null>(null);

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);


  // console.log(weatherData);
console.log("gps", gps);

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
      setGps(position.coords);

      fetchWeatherData(latitude, longitude)
        .then((fetchedData: any) => {
          if (fetchedData && fetchedData.name) {
            setWeatherData(fetchedData);
          } else {
            console.error('Invalid data format:', fetchedData);
          }
        })
        .catch((error: any) => {
          console.error('Failed to fetch weather data:', error);
        });

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


  const handleBackClick = () => {
    window.history.back();
  };



  return (
    <>


      {weatherData && (

        <Card sx={{ margin: 2 }}>
          <Box padding={1} display="block" >

            <Grid container spacing={1}>
              <Grid item xs={6} container >
                <Typography variant="h4"  >
                  {weatherData.name}
                </Typography>

              </Grid>

              <Grid item xs={6} alignSelf={"center"} >

                <Box display="flex" justifyContent="center">
                  <Avatar>
                    <img src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].description} />
                  </Avatar>
                </Box>

              </Grid>


              <Grid item xs={6} container >
                <Box>


                  <Box>
                    <Typography variant="h3" fontSize={14} sx={{ textAlign: 'left' }} gutterBottom>
                      temperature:{weatherData.main.temp}°C
                    </Typography>
                  </Box>
                  <Box padding={1}>
                  <Typography variant="h4" fontSize={14} sx={{ textAlign: 'left' }} gutterBottom>
                    description: {weatherData.weather[0].description} <br />
                    feels like: {weatherData.main.feels_like}°C <br />
                    min/max: {weatherData.main.temp_min} - {weatherData.main.temp_max}°C <br />
                    pressure: {weatherData?.main.pressure} hPa <br />
                    humidity: {weatherData?.main.humidity} % <br />
                  </Typography>
                </Box>

                </Box>



{/* <Typography>{gps?.latitude}{gps?.longitude}</Typography> */}





                
              </Grid>

            </Grid>
          </Box>
        </Card>



      )
      }








      <Box padding={0} >
        <Grid container spacing={0}>
          <Grid item xs={6}  >
            {/* <Link href="/"> */}
            <Box display="flex" justifyContent="center" alignItems="center" style={{ height: '100%' }}>

            <Button onClick={handleBackClick}>
              <Chip icon={<ArrowBackIcon />} label="Back" clickable color="warning" variant="outlined" />
            </Button>
            </Box>
            {/* </Link> */}
          </Grid>

          <Grid item xs={6}>
            <Box display="flex" justifyContent="center" alignItems="center" style={{ height: '100%' }}>
              <Button onClick={handleGPSClick}>
                <Chip icon={<LocationOnIcon />} label="Use GPS" clickable color="success" variant="outlined" />
              </Button>
            </Box>
          </Grid>

        </Grid>
      </Box>














      <Box margin={2}>
      <Typography variant="h4" sx={{ textAlign: 'left' }} gutterBottom>
        {city} forecast 3 hours
      </Typography>
      </Box>

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
                    <img src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt={item.weather[0].description} />
                  </Avatar>
                }
                title={`Weather in ${city} on ${new Date(item.dt * 1000).toLocaleDateString()} at ${new Date(item.dt * 1000).toLocaleTimeString()}`}
                subheader={item.weather[0].description}
              />
            </Grid>
          </Grid>
        </Card>
      ))}
    </>
  );
}

export default Page;