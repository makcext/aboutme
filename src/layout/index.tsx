import React from "react";


import ApplBar from "./AppBar";
import HelloBlock from "../components/HelloBlock";
import TechStack from "../components/TechStack";
import Education from "../components/Education";

import { Box } from "@mui/material";

const Layout = () => {

  return (
    <>
      <ApplBar />

      <Box maxWidth="sm" padding={1}>
        <HelloBlock />
        <TechStack />
        <Education />
      </Box>
    </>
  );
};

export default Layout;