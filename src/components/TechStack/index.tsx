import React from 'react';
import { Box, Button, Grid, Grow, Paper, Typography } from '@mui/material';
import { useTechStack } from './TechController';
import { TechText } from './TechModel';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const TechStack: React.FC = () => {
  const { selectedTech, shuffledTech, shuffleTech } = useTechStack();
  const warningColor = '#ff9800'; // Extract this from your theme or define it

  return (
    <Box paddingBottom={0} justifyContent="space-around" textAlign="left">
      {/* <Paper sx={{ height: 222 }}> */}
        <Paper elevation={4}  variant="outlined" sx={{ borderColor: 'gray', height: 'auto' }}>
          <Button
            sx={{
              width: '100%',
              justifyContent: 'flex-start',
              flex: 1,
              typography: 'h4',
              textTransform: 'capitalize',
            }}
            variant="text"
            color='inherit'
            onClick={shuffleTech}
          >
            <Grid container alignItems="center" justifyContent="space-between">
              <Typography variant="h5">Tech stack</Typography>
              <InfoOutlinedIcon color="success" />
            </Grid>
          </Button>



          <Grow in={true} style={{ transformOrigin: '0 1 0' }} {...(true ? { timeout: 2000 } : {})} >
            <Typography variant='subtitle1' sx={{ display: 'flex', padding: '8px' }} > Developer who wants to explore {selectedTech?.toString()} tech </Typography>
          </Grow>
          <Grid
            container
            spacing={0}
            justifyItems="center"
            alignItems="center"
            // sx={{ height: '100%' }}
          >
            {TechText.map((tech) => (
              <Grid
                item
                key={tech.id}
                xs={3}
                sm={3}
                p={1}

              >
                <Paper elevation={4} sx={{ display: 'flex', justifyContent: 'center', padding: '8px' }}>
                  {tech.text && (
                    <Typography
                      variant="body2"
                      align="center"
                      style={{
                        color: shuffledTech[0] === tech.text ? warningColor : 'inherit',
                      }}
                    >
                      {tech.text}
                    </Typography>
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      {/* </Paper> */}
    </Box>
  );
};

export default TechStack;
