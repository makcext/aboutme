// React import
import React from "react";

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

const Layout = () => {

  return (
    <>
      <ApplBar />
      <Box maxWidth="lg" padding={1} sx={{ overflowX: "hidden" }}>
        <HelloBlock />
        <Grid container spacing={1} alignItems="stretch" paddingBottom={1}>

          <Grid item xs={12} sm={6}>
            <AddBook />
            {/* <AuthBooks /> */}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TaskView />
          </Grid>


          <Grid item xs={12} sm={6}>
            <WoltCalc />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Avatar />
          </Grid>

        </Grid>



        <ScreenShareIdentification />

        <TechStack />
        {/* <Books /> */}

        <Education />

        <Footer />
      </Box>
    </>
  );
};

export default Layout;