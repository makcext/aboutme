'use client';
import React, { useEffect, ChangeEvent } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { Alert, Box, Card, CardMedia, Paper, TextField, Typography, IconButton, Grid } from '@mui/material';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

const projects = [
  {
    id: 0,
    images: ['01', '02', '03', '04', '05', '06'],
    title: 'omex',
    by: 1,
    street: 'build',
    description: 'This is a description',
  },
];

const OmexWidget = () => {
  const [currentImage, setCurrentImage] = useState(Array(projects.length).fill(0));

  const handleScroll = (index: any) => (event: any) => {
    const element = event.target;
    const visibleImageIndex = Math.ceil(element.scrollLeft / element.clientWidth);
    setCurrentImage((prev) => prev.map((item, i) => (i === index ? visibleImageIndex : item)));
  };

  return (
    <>
      <Box maxWidth="xs" paddingTop={0} justifyContent="space-around" textAlign="left">
        <Paper variant="outlined" sx={{ borderColor: 'gray', paddingTop: 0, paddingBottom: 0 }}>
          <Box component="article" sx={{ width: '100%', height: '100%', p: 0 }}>
            
            <Grid container spacing={0} alignItems="center" justifyContent="space-between">
              <Typography variant="body1" color="info.main" sx={{ paddingLeft: 1 }}>
                Omex Build Project: [ feb 2024 - apr 2024 ]
              </Typography>

              <IconButton disabled >
                  <SyncAltIcon  />
                </IconButton>
            </Grid>

            {projects.map((project, index) => (
              <>
                <Card elevation={4} sx={{ backgroundColor: 'transparent', minHeight: 500 }}>
                  <Box p={1} justifyContent={'space-between'}>
                    <Typography variant="body2">Functional Requirements: contact form, customer review, scanning qr code notification to mail </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', overflowY: 'auto', scrollSnapType: 'x mandatory', scrollbarWidth: '-moz-initial', '&::-webkit-scrollbar': { display: 'none' } }} onScroll={handleScroll(index)}>
                    {project.images.map((image, imageIndex) => (
                      <CardMedia key={imageIndex} component="img" height="400px" image={`aboutme/omex/${image}.webp`} alt={project.title} sx={{ flex: 'none', scrollSnapAlign: 'start', objectFit: 'contain' }} />
                    ))}
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 0 }}>
                    {project.images.map((_, dotIndex) => (
                      <Box key={dotIndex} sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: dotIndex === currentImage[index] ? 'primary.main' : 'grey.500', mx: 0.5 }} />
                    ))}
                  </Box>

                  <Box p={1} display={'flex'} justifyContent={'space-between'}>
                    <Typography component="h3" variant="body2" style={{ fontSize: '0.8rem' }} fontWeight={300} alignContent="center">
                      {project.title} {project.street}
                    </Typography>
                  </Box>
                </Card>
              </>
            ))}
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default OmexWidget;
