import { Box, Button, Grow, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


interface Image {
  id: number;
  src?: string;
  text?: string;
}



const auebPng = require('./aueb.png');

const images: Image[] = [
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
          <Paper variant="outlined" sx={{ borderColor: 'gray' }}  >
            <Button sx={{ width: '100%', justifyContent: 'flex-start', flex: 1, typography: 'h4', textTransform: 'capitalize', }} variant='text' color='inherit' onClick={swapImages}>
            <Grid container alignItems="center" justifyContent="space-between">
          <Typography variant="h5">Education</Typography>
          <InfoOutlinedIcon color="success" />
        </Grid>
              </Button>
            <Grow in={true} style={{ transformOrigin: '0 1 0' }} {...(true ? { timeout: 2000 } : {})} >
              <Typography variant='subtitle1' sx={{ display: 'flex', padding: '8px' }} > Bachelor of Computer Science </Typography>
            </Grow>
            <Grid container spacing={0} justifyItems={"center"} alignItems={"center"} sx={{ height: '100%' }}>
              {shuffledImages.map(image => (
                <Grid item key={image.id} xs={6} sm={6} p={1} height={"100%"}>
                  <Paper elevation={1} sx={{ display: 'flex', justifyContent: 'center', padding: '8px' }}>
                    {image.src ? (
                      <img src={image.src} alt='aueb logo' style={{ height: '100px', width: '100px' }} />
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