import React from "react";

import { Box } from "@mui/material";
import { Grid } from "@mui/material";

import ApplBar from "./AppBar";
import HelloBlock from "../components/HelloBlock";
import WoltView from "../components/Wolt/WoltView";
import TaskView from "../components/ToDo/TaskView";
import TechStack from "../components/TechStack";
import Education from "../components/Education";
import Footer from "../components/Footer";

const Layout = () => {

  return (
    <>
      <ApplBar />

      <Box maxWidth="md" padding={1} sx={{ overflowX: "hidden" }}>
        <HelloBlock />

<Grid container spacing={1} alignItems="start" paddingBottom={1}>
  <Grid item xs={12} sm={6}>
    <WoltView />
  </Grid>
  <Grid item xs={12} sm={6}>
    <TaskView />
  </Grid>
</Grid>

        <TechStack />
        <Education id="Education" paddingBottom={2} />
        <Footer />
      </Box>
    </>
  );
};

export default Layout;