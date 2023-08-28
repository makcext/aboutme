import React from "react";
import { useEffect, useState } from "react";


import ApplBar from "./AppBar";
import HelloBlock from "../components/HelloBlock";
import Wolt from "../components/Wolt";
import TechStack from "../components/TechStack";
import Education from "../components/Education";
import Footer from "../components/Footer";

import WeatherView from "../components/Weather/WeatherView";
import fetchWeatherData from "../components/Weather/WeatherController";
import WeatherData from "../components/Weather/WeatherModel";
import WoltView from "../components/Wolt/WoltView"; 
import TaskView from "../components/ToDo/TaskView";

import { Box } from "@mui/material";

const Layout = () => {

  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetchWeatherData()
      .then((data) => setWeather(data))
      .catch((error) => console.error(error));
  }, []);


  return (
    <>
      <ApplBar />

      <Box maxWidth="md" padding={1}>
        <HelloBlock weather={weather} />
        <TaskView />
        <TechStack />

        <Education id="Education" paddingBottom={2} />
        <Wolt id="wolt" paddingBottom={2} />
        {/* <WeatherView weather={weather} /> */}
        <WoltView paddingBottom={2}  />
        <Footer />
      </Box>
    </>
  );
};

export default Layout;