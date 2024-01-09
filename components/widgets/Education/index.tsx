"use client";
import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import auebPng from './aueb.png';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface MyImage {
  id: number;
  src?: StaticImageData;
  text?: string;
}

const images: MyImage[] = [
  { id: 1, text: 'Athens Univercity of Economics and Business' },
  { id: 2, src: auebPng },
];

const Education = () => {
  const [shuffledImages, setShuffledImages] = useState(images);

  const swapImages = () => {
    const index1 = Math.floor(Math.random() * shuffledImages.length);
    let index2 = Math.floor(Math.random() * shuffledImages.length);
    while (index2 === index1) {
      index2 = Math.floor(Math.random() * shuffledImages.length);
    }
    const newImages = [...shuffledImages];
    [newImages[index1], newImages[index2]] = [newImages[index2], newImages[index1]];
    setShuffledImages(newImages);
  };

  useEffect(() => {
    swapImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box justifyContent="Left" textAlign={'left'} >
        <Paper elevation={4}>
          <Paper variant="outlined" sx={{ borderColor: 'gray', height: 'auto' }}  >
            <Button sx={{ width: '100%', justifyContent: 'flex-start', flex: 1, typography: 'h4', textTransform: 'capitalize', }} variant='text' color='inherit' onClick={swapImages}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Typography variant="h5">Education</Typography>
                <InfoOutlinedIcon color="success" />
              </Grid>
            </Button>
            <Grid container spacing={0} justifyItems={"center"} alignItems={"center"} >
              {shuffledImages.map(image => (
                <Grid item key={image.id} xs={6} sm={6} p={1} height={"10%"}>
                  <Paper elevation={1} sx={{ display: 'flex', justifyContent: 'center', padding: '8px' }}>
                  {image.src ? (
  <Image src={image.src} alt='aueb logo' width={50} height={50} />
) : (
  <Typography variant="body2" align="center">{image.text}</Typography>
)}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Paper>
      </Box>
    </>
  );
}

export default Education;