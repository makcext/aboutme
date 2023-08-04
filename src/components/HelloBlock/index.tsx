import React from "react";

import { Avatar, Box, Chip, Container, Grid, Typography } from "@mui/material";
import QRsvg from '../svg/qrsvg';

import PlaceIcon from '@mui/icons-material/Place';
import TwitterIcon from '@mui/icons-material/Twitter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import '@fontsource/roboto/300.css';

// const avatarpng = require('./avatar.png');

const HelloBlock = () => {
	return (
      <div  >
        <Box paddingBottom={1} >
        <Grid container justifyContent={"space-evenly"}>    

        <Grid item xs={4} md={6} paddingTop={0} >
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
            <Typography variant="h4" fontSize={14} sx={{ textAlign: 'left' }} gutterBottom>@makcext</Typography>
          </Box>
            
        </Grid>


        <Grid item  xs={7} md={6} >
          <Typography variant="subtitle1" fontSize={16} sx={{ textAlign: 'center' }}>
            front-end developer
          </Typography>
          <Box display="flex" justifyContent="center">
            <Chip label="react | material | mobx | graphql" variant="outlined" color="warning" />
          </Box>
          <Typography  sx={{ textAlign: 'center' }}>
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