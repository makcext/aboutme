import React, { Suspense } from 'react';

import { Box, Typography, CardContent } from "@mui/material";

const LoadSkeleton = React.lazy(() => import('../Skeleton/index'));

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
            <Suspense fallback={<div>Loading...</div>}>
      <LoadSkeleton />
    </Suspense>
            </CardContent>
						</Box>
				
			</div>
	);
}

export default Footer;