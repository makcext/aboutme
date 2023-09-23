import React, { useState } from 'react';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-avataaars-sprites';
import { Button, Grid, Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';

const Avatar = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((index - 1 + 5) % 5);
  };

  const handleNext = () => {
    setIndex((index + 1) % 5);
  };

  const avatars = Array.from({ length: 5 }, (_, i) => createAvatar(style, { seed: i.toString() }));

  return (


    <Box paddingBottom={1} justifyContent="space-around" >
      <Paper variant="outlined" sx={{ borderColor: 'gray', padding: 1 }}>
        <Typography variant="h4" >Avatars</Typography>


    {/* <div style={{ flexGrow: 1, padding: 16, display: 'flex', justifyContent: 'center', alignItems: 'center' }}> */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/* <Typography variant="h4" align="center">
            Avatars Slideshow
          </Typography> */}
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ padding: 16, textAlign: 'center', color: 'text.secondary' }}>
            <div style={{ width: '250px', height: '250px', margin: '0 auto' }} dangerouslySetInnerHTML={{ __html: avatars[index] }} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Button  variant="outlined" color="warning" onClick={handlePrev}>
            Prev
          </Button>
          <Button variant="outlined" color="warning" onClick={handleNext}>
            Next
          </Button>
        </Grid>
      </Grid>
    {/* </div> */}


		</Paper>
		</Box>
      
 




  );
};

export default Avatar;