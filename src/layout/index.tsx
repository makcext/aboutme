import React from "react";
import { gql } from '@apollo/client';


import { Box } from "@mui/material";
import { Grid } from "@mui/material";

import ApplBar from "./AppBar";
import HelloBlock from "../components/HelloBlock";
import WoltView from "../components/Wolt/WoltView";
import WoltCalc from "../components/Woltt/WoltView";
import TaskView from "../components/ToDo/TaskView";
import TechStack from "../components/TechStack";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Avatar from "../components/Avatars";
import Books from "../components/BooksGql"
import AddBook from "../components/BookGqlMutation"


import CameraComponent from "../components/VideoSharing";
// import CameraComponentM  from "../components/VideoSharing/mobileIndex"; 

// async function getStream() {
//   try {
//     const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
//     const tracks = stream.getTracks();
//     tracks.forEach(track => {
//       console.log(track.kind); // "video" for screen, window, or tab; "videoinput" for camera
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// console.log(getStream());

const Layout = () => {

  return (
    <>
      <ApplBar />

      <Box maxWidth="md" padding={1} sx={{ overflowX: "hidden" }}>
        <HelloBlock />
        <Grid container spacing={1} alignItems="start" paddingBottom={1}>
          <Grid item xs={12} sm={6}>
            <WoltCalc />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TaskView />
          </Grid>
        </Grid>
        <Avatar />
        <CameraComponent />

        <TechStack />
        {/* <Books /> */}

        <Education  />
        <AddBook />
        <Footer />
      </Box>
    </>
  );
};

export default Layout;