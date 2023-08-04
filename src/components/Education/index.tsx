import { Box, Paper, Typography} from "@mui/material";
import React from "react";
import Grid from '@mui/material/Grid';


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

function Education() {

  return (
    <>
      <Box display="block" justifyContent="Left" textAlign={'left'} >
        <Paper elevation={4}>
          <Paper variant="outlined">
            <Typography variant='h3' > Education </Typography>
            <Typography variant='h5' > Bachelor of Computer Science </Typography>

            <Grid container spacing={0} justifyItems={"center"} alignItems={"center"} sx={{ height: '100%' }}>
              {images.map(image => (
                <Grid item key={image.id} xs={6} sm={6} p={1} height={"100%"}>
                  <Paper variant={"outlined"} elevation={0} sx={{ display: 'flex', justifyContent: 'center', padding: '8px' }}>
                    {image.src ? (
                      <img src={image.src} alt='aueb logo' style={{ height: '100%', width: '100%' }} />
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