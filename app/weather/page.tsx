"use client";
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import fetchForecastWeatherData from "./forecast";

//print the data from the fetchForecastWeatherData function
fetchForecastWeatherData().then((data: any) => {
  console.log(data);
}, (error: any) => {
  console.log(error);
});


const Page = () => {


  return (
    <>
      <Box>
        
      </Box>
    </>
  );
}

export default Page;