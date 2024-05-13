'use client';
import React, { useEffect, ChangeEvent } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { Alert, Box, Card, CardMedia, Paper, TextField, Typography, IconButton, Grid, Link } from '@mui/material';
import SyncAltIcon from '@mui/icons-material/SyncAlt';


const projects = [
  {
    id: 0,
    images: ['01', '02', '03', '04', '05', '06'],
    title: 'ath Gr - ',
    by: 1,
    street: 'Qtalents',
    description: 'This is a description',
  },
]

const flip1 = () => {
  return (
    <Card elevation={4} sx={{ backgroundColor: 'transparent', minHeight: 500 }}>
    <Box p={1} justifyContent={'space-between'} sx={{ height: '100%' }}>
      <Typography component="h3" variant="h5">Software Developer</Typography>

      <Link href="https://code.qtalents.co" underline="hover" color="success.main">
        <Typography variant="body2" gutterBottom={true}>
          in code.qtalents.co
        </Typography>
      </Link>

      <Typography component="p" variant="body1" gutterBottom={true} color={'primary.main'}>
        Designed and developed new features to meet user requirements and needs. Researched modern technologies and innovative solutions to optimize development processes.
      </Typography>

      <Typography component="h3" variant="subtitle1">Code Refactoring:</Typography>
      <Typography component="p" variant="body2" gutterBottom={true} color={'primary.main'}>
        Refactored existing code to improve readability, scalability, and maintainability.
      </Typography>

      <Typography component="h3" variant="subtitle1">Debugging and Error Correction:</Typography>
      <Typography component="p" variant="body2" gutterBottom={true} color={'primary.main'}>
        Identified, analyzed, and resolved code errors to ensure system stability and smooth operation.
      </Typography>

      <Typography component="h3" variant="subtitle1">Implementation of New UI Components:</Typography>
      <Typography variant="body2" gutterBottom={true} color={'primary.main'}>
        Developed and integrated a new UI component that significantly enhanced user experience. Conducted testing and optimization of the new UI component.
      </Typography>
      <Typography component="h3" variant="subtitle1">Technical Skills:</Typography>
      <Typography variant="body2" gutterBottom={true} color={'primary.main'}>
        Programming languages: JavaScript Frameworks: Next.js Libraries: React Tools: Git
      </Typography>
    </Box>
  </Card>
  );
};

const Flip2 = (currentImage: any, setCurrentImage: any) => {


  const handleScroll = (index: any) => (event: any) => {
    const element = event.target;
    const visibleImageIndex = Math.ceil(element.scrollLeft / element.clientWidth);
    setCurrentImage((prev:any) => prev.map((item:any, i:any) => (i === index ? visibleImageIndex : item)));
  };

  return (

    <Card sx={{maxHeight: 560}}>
    {projects.map((project, index) => (
      <Grid xs={12} md={12} item key={project.id} >
        <Box
          component="article"
          sx={{
            width: '100%',
            height: '100%',
            position: 'relative',
            p: 0,
          }}>
          <Card elevation={4} sx={{  minHeight: 500 }}>
            <Box p={1} justifyContent={'space-between'}>
              <Typography variant="body2">Functional Requirements: contact form, customer review, scanning qr code notification to mail </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                overflowY: 'auto',
                scrollSnapType: 'x mandatory',
                scrollbarWidth: '-moz-initial',
                '&::-webkit-scrollbar': { display: 'none' },
              }}
              onScroll={handleScroll(index)}>
              {project.images.map((image, imageIndex) => (
                <CardMedia 
                  key={imageIndex}
                  component="img"
                  height="400px"
                  image={`aboutme/qt/${image}.webp`}
                  alt={project.title}
                  sx={{
                    flex: 'none',
                    scrollSnapAlign: 'start',
                    objectFit: 'contain',
                  }}
                />
              ))}
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: 0,
                paddingTop: 0,
              }}>
              
              {project.images.map((_, dotIndex) => (
                <Box
                  key={dotIndex}
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: dotIndex === currentImage[index] ? 'info.main' : 'grey.500',
                    mx: 0.5,
                    
                  }}
                />
              ))}
            </Box>
            <Box p={1} display={'flex'} justifyContent={'space-between'}>
              <Typography component="h3" variant="body2" style={{ fontSize: '0.8rem' }} fontWeight={300} alignContent="center">
                {project.title} {project.street}
              </Typography>
            </Box>
          </Card>
        </Box>
      </Grid>
    ))}
  </Card>
  );
};

const QtWidget = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentImage, setCurrentImage] = useState(Array(projects.length).fill(0)); // Move this line here

  const handleIconButtonPress = () => {
    setIsFlipped((prevIsFlipped) => !prevIsFlipped);
  };
  return (
    <>
      <Box maxWidth="xs" paddingTop={0} justifyContent="space-around" textAlign="left">
        {/* <Paper elevation={3} > */}
        <Paper variant="outlined" sx={{ borderColor: 'gray', padding: 0 }}>
          <Box textAlign="left">
            <Box>
              <Grid container spacing={0} alignItems="center" justifyContent="space-between">
                
                <Typography variant="body1" color="info.main" sx={{paddingLeft: 1}}>
                  Experience [ Apr 2022 - Present ]
                </Typography>




                <IconButton onClick={handleIconButtonPress}>
                  <SyncAltIcon color="success" />
                </IconButton>
              </Grid>

              {isFlipped ? Flip2(currentImage, setCurrentImage) : flip1()} 
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default QtWidget;
