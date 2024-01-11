"use client";
import React, { useState, useEffect } from 'react';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-avataaars-sprites';
import { Grid, Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';

interface AvatarProps {

}

const Avatar: React.FC<AvatarProps> = () => {
  const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0);
  const [avatars, setAvatars] = useState<string[]>([]);

  useEffect(() => {
    setAvatars(Array.from({ length: 5 }, () => createAvatar(style, { seed: Math.random().toString() })));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentAvatarIndex((currentAvatarIndex + 1) % avatars.length);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentAvatarIndex, avatars.length]);

  return (
    <Box paddingBottom={0} justifyContent="space-around">
        <Paper elevation={4}>
      <Paper variant="outlined" sx={{ borderColor: 'gray', padding: 1 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Typography variant="h5">Avatars</Typography>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper style={{ padding: 16, textAlign: 'center', color: 'text.secondary' }}>
              {avatars[currentAvatarIndex] && <div style={{ width: '132px', height: '132px', margin: '0 auto' }} dangerouslySetInnerHTML={{ __html: avatars[currentAvatarIndex] }} />}
            </Paper>
          </Grid>
        </Grid>
      </Paper>
      </Paper>
    </Box>
  );
};

export default Avatar;