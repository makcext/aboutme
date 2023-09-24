import React, { useState, useEffect } from 'react';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-avataaars-sprites';
import { Button, Grid, Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';

const Avatar = () => {
  const [index, setIndex] = useState(0);
  const [avatars, setAvatars] = useState(Array.from({ length: 5 }, () => createAvatar(style, { seed: Math.random().toString() })));

  const handlePrev = () => {
    setIndex((index - 1 + avatars.length) % avatars.length);
  };

  const handleNext = () => {
    setIndex((index + 1) % avatars.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % avatars.length);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [index, avatars.length]);

  return (
    <Box paddingBottom={1} justifyContent="space-around">
      <Paper variant="outlined" sx={{ borderColor: 'gray', padding: 1 }}>
        <Typography variant="h4">Avatars</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper style={{ padding: 16, textAlign: 'center', color: 'text.secondary' }}>
              <div style={{ width: '150px', height: '150px', margin: '0 auto' }} dangerouslySetInnerHTML={{ __html: avatars[index] }} />
            </Paper>
          </Grid>
          {/* <Grid item xs={12}>
            <Button variant="outlined" color="warning" onClick={handlePrev}>
              Prev
            </Button>
            <Button variant="outlined" color="warning" onClick={handleNext}>
              Next
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" color="error" onClick={() => {
              const newAvatars = [...avatars];
              newAvatars.splice(index, 1);
              setAvatars(newAvatars);
              setIndex(Math.min(index, newAvatars.length - 1));
            }}>
              Delete
            </Button>
            <Button variant="outlined" color="success" onClick={() => {
              const newAvatar = createAvatar(style, { seed: Math.random().toString() });
              setAvatars([...avatars, newAvatar]);
              setIndex(avatars.length);
            }}>
              Add
            </Button>
          </Grid> */}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Avatar;