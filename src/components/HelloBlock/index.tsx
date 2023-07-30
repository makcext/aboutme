import React from "react";

import { Box, Chip, Container, Typography } from "@mui/material";
import QRsvg from '../svg/qrsvg';


const HelloBlock = () => {
	return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px' }}>
        <Box maxWidth="lg" sx={{ minWidth: 300 }}>
          <Container sx={{ textAlign: 'justify', minHeight: 250 }}>
            <Typography variant="subtitle1" fontSize={24} sx={{ textAlign: 'center' }}>
               front-end developer
            </Typography>

            <Box display="flex" justifyContent="center">
              <Chip label="react | material | mobx | graphql" variant="outlined" color="warning" />
            </Box>

            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              scan <code>&amp;</code> go.
            </Typography>
						<QRsvg />

          </Container>
        </Box>
      </div>
  );
}

export default HelloBlock;