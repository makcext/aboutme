import React, { useState, useEffect } from 'react';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-avataaars-sprites';
import { Grid, Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// Type annotations
interface AvatarProps {


}

const Avatar: React.FC<AvatarProps> = () => {
  // Extract the createAvatars function
  const createAvatars = () => {
    return Array.from({ length: 5 }, () => createAvatar(style, { seed: Math.random().toString() }));
  };

  // Use a more descriptive variable name for the index state variable
  const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0);

  // Use the createAvatars function to create the initial avatars
  const avatars = createAvatars();

  // Cycle through the avatars every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentAvatarIndex((currentAvatarIndex + 1) % avatars.length);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentAvatarIndex, avatars.length]);

  // Render the current avatar
  return (
    <Box paddingBottom={0} justifyContent="space-around">
      <Paper variant="outlined" sx={{ borderColor: 'gray', padding: 1 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Typography variant="h5">Avatars</Typography>
          {/* <InfoOutlinedIcon color='success' /> */}
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper style={{ padding: 16, textAlign: 'center', color: 'text.secondary' }}>
              <div style={{ width: '132px', height: '132px', margin: '0 auto' }} dangerouslySetInnerHTML={{ __html: avatars[currentAvatarIndex] }} />
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

// Add documentation
Avatar.propTypes = {};

export default Avatar;
