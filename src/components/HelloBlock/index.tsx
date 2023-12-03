import React, { useEffect, useState } from "react";
import { Avatar, Box, Chip, Divider, Grid, Grow, Typography } from "@mui/material";
import QRsvg from '../svg/qrsvg';
import PlaceIcon from '@mui/icons-material/Place';
import TwitterIcon from '@mui/icons-material/Twitter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import '@fontsource/roboto/400.css';
import WeatherData from '../Weather/WeatherModel';
import fetchWeatherData from "../Weather/WeatherController";
import WeatherDialog from '../Weather/WeatherDialog'
import Avatars from "../Avatars";
// import avatarImage from './avatar.png';
import Join from "../Join";







const avatarImage = require('./avatar.png');

type InfoBlockProps = {
  icon: React.ReactNode;
  text: string;
};

const InfoBlock: React.FC<InfoBlockProps> = ({ icon, text }) => (
  <Box display="flex" alignItems="center">
    <Box sx={{ marginRight: 1 }}>{icon}</Box>
    <Typography variant="h4" fontSize={14} sx={{ textAlign: 'left' }}>{text}</Typography>
  </Box>
);

const HelloBlock = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetchWeatherData()
      .then((data) => setWeather(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Box paddingBottom={1}>
        <Grid container justifyContent={"space-evenly"}>
          <Grid item xs={6} md={6} paddingTop={0}>
            <Avatar alt="ext - route" src={avatarImage} sx={{ width: 96, height: 96 }} />
            <InfoBlock icon={<PlaceIcon />} text="ath, att, gr" />
            <InfoBlock icon={<AccessTimeIcon />} text="UTC +03:00" />
            <InfoBlock icon={<TwitterIcon />} text="@makcext" />
            <Box>
              <WeatherDialog weather={weather} />
            </Box>
          </Grid>
          <Grid item xs={6} md={6}>
            <Grow in={true} style={{ transformOrigin: '0 1 0' }} {...(true ? { timeout: 1000 } : {})}>
              <Typography variant="body1" fontSize={16} sx={{ textAlign: 'center' }}>
                frontend developer
              </Typography>
            </Grow>
            <Box display="flex" justifyContent="center">
              <Chip sx={{ fontSize: 12 }} label="react | ts | mobx | graphql" variant="outlined" color="warning" />
              
            </Box>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              let's go!
            </Typography >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              
            <Join />
            </div>

            {/* <QRsvg /> */}
            {/* <Avatars /> */}

          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default HelloBlock;