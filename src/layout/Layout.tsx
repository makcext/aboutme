// React import
import React from "react";

// import dynamic from 'next/dynamic';

// Material UI imports
import { Box, Grid } from "@mui/material";

// Component imports
import ApplBar from "./AppBar";
import HelloBlock from "../components/HelloBlock/HelleBlock";
import WoltCalc from "../components/WoltFee/WoltView";
import TaskView from "../components/ToDo/TaskView";
import TechStack from "../components/TechStack";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Avatar from "../components/Avatars";
import AddBook from "../components/BookCollection/BookCollection";
import ScreenShareIdentification from "../components/ScreenShareIdentification/ScreenShareIdentification";
// import AuthBooks from "../components/BookCollection/AuthBooks";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// const AddBook = dynamic(() => import('../components/BookCollection/BookCollection'), { ssr: false });


const Layout = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <ApplBar />
      <Box maxWidth="lg" padding={1} sx={{ overflowX: "hidden" }}>
        <HelloBlock />
        <Grid container spacing={isMobile ? 1 : isTablet ? 2 : 4} alignItems="stretch" paddingBottom={1}>
          <Grid item xs={12} sm={12} md={6}>
            <AddBook />
          </Grid>
          <Grid item xs={12} sm={12} md={6}> 
            <TaskView />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <WoltCalc />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Avatar />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <ScreenShareIdentification />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <TechStack />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Education />
          </Grid>

        </Grid>





        <Footer />
      </Box>
    </>
  );
};

export default Layout;