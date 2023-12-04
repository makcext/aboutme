import React from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";

import ApplBar from "./AppBar";
import HelloBlock from "../components/HelloBlock";
// import WoltView from "../components/Wolt/WoltView";
import WoltCalc from "../components/WoltFee/WoltView";
import TaskView from "../components/ToDo/TaskView";
import TechStack from "../components/TechStack";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Avatar from "../components/Avatars";
// import Books from "../components/BooksGql"
import AddBook from "../components/BookCollection"

import AuthForm from "../components/authForm";
import Join from "../components/Join";


import ScreenShareIdentification from "../components/Screen-share-identification/ScreenShareIdentification";


const Layout = () => {

  return (
    <>
      <ApplBar />
      <Box maxWidth="lg" padding={1} sx={{ overflowX: "hidden" }}>
        <HelloBlock />
        <Grid container spacing={1} alignItems="stretch" paddingBottom={1}>

          <Grid item xs={12} sm={6}>
            <AddBook />
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