import React from 'react';

import { Box, Typography, CardContent } from "@mui/material";
import LoadSkeleton from '../Skeleton/index';

const Footer = () => {
	return (
		<div>
		<Box display="block" justifyContent="Left" textAlign={'justify'} >
            <Typography variant="body1"
              sx={{
                background: 'linear-gradient(to bottom, #555, #999)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                overflow: 'hidden',
              }}>It involves the implementation of designs and interactions that users see and interact with directly in
              their web browsers. Frontend developers use a combination of programming languages, frameworks, and tools
              to build dynamic, responsive, and visually appealing web applications.
            </Typography>

            <CardContent>
              <LoadSkeleton />
            </CardContent>
						</Box>
				
			</div>
	);
}

export default Footer;