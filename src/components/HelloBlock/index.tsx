import React, { useEffect, useState } from "react";

import { Avatar, Box, Chip, Grid, Grow, Typography } from "@mui/material";
import QRsvg from '../svg/qrsvg';

import PlaceIcon from '@mui/icons-material/Place';
import TwitterIcon from '@mui/icons-material/Twitter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import '@fontsource/roboto/400.css';

import WeatherData from '../Weather/WeatherModel';
import fetchWeatherData from "../Weather/WeatherController";
import WeatherDialog from '../Weather/WeatherDialog'
import BackStatus from "../BackStatus"


// interface WeatherViewProps {
//   weather: WeatherData | null;
// }

const HelloBlock = () => {
	
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetchWeatherData()
      .then((data) => setWeather(data))
      .catch((error) => console.error(error));
  }, []);



  
  return (
      <div  >
        <Box paddingBottom={0} >
        <Grid container justifyContent={"space-evenly"}>    

        <Grid item xs={6} md={6} paddingTop={0} >
        <Avatar  alt="ext Route" src = "" sx={{ width: 96, height: 96, bgcolor: "black" }} >
          <PanoramaFishEyeIcon color="warning" sx={{ fontSize:80 }}/>
        </Avatar>

          <Box display="flex" paddingBottom={0} alignItems="center" >
          <Box sx={{ marginRight: 1 }}>
            <PlaceIcon />
          </Box>
            <Typography variant="h4" fontSize={14} sx={{ textAlign: 'left'  }}>ath, att, gr</Typography>
          </Box>

          <Box display="flex" paddingBottom={0} alignItems="center">
            <Box sx={{ marginRight: 1 }}>
            <AccessTimeIcon />
            </Box>
            <Typography variant="h4" fontSize={14} sx={{ textAlign: 'left' }}>UTC +03:00</Typography>
          </Box>

          <Box paddingTop={0} display="flex" paddingBottom={0} alignItems="center">
            <Box sx={{ marginRight: 1 }}>
            <TwitterIcon />
            </Box>
            <Grow in={true} style={{ transformOrigin: '0 1 0' }} {...(true ? { timeout: 1000 } : {})} >
            <Typography variant="h4" fontSize={14} sx={{ textAlign: 'left' }} gutterBottom>@makcext</Typography>
            </Grow>
          </Box>

          <Box paddingTop={0} display="flex" paddingBottom={0} alignItems="center">

            <Grow in={true} style={{ transformOrigin: '0 1 0' }} {...(true ? { timeout: 1000 } : {})} >
            <Typography variant='inherit' fontSize={14} sx={{ textAlign: 'left' }} gutterBottom>backend is: <BackStatus /> </Typography>
            </Grow>
          </Box>


          <Box>
            <WeatherDialog weather={weather} />
          </Box>

        </Grid>

        <Grid item  xs={6} md={6} >
        <Grow in={true} style={{ transformOrigin: '0 1 0' }} {...(true ? { timeout: 1000 } : {})} >
          <Typography variant="body1" fontSize={16} sx={{ textAlign: 'center' }}>
            front-end developer
          </Typography>
          </Grow>
          <Box display="flex" justifyContent="center">
            <Chip sx={{ fontSize: 12 }} label="react | ts | mobx | graphql" variant="outlined" color="warning" />
          </Box>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
          let's go
          </Typography>
          <QRsvg />
        </Grid>
      </Grid>
        </Box>
      </div>
  );
}

export default HelloBlock;