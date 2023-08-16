import React from "react";


import ApplBar from "./AppBar";
import HelloBlock from "../components/HelloBlock";
import Wolt from "../components/Wolt";
import TechStack from "../components/TechStack";
import Education from "../components/Education";
import Footer from "../components/Footer";

import { Box } from "@mui/material";

const Layout = () => {

  return (
    <>
      <ApplBar />

      <Box maxWidth="md" padding={1}>
        <HelloBlock />
        <Wolt id="wolt" paddingBottom={2} />
        <TechStack id="tech-stack" paddingBottom={2} />
        <Education id="Education" paddingBottom={2} />
        <Footer />
      </Box>
    </>
  );
};

export default Layout;