import React from 'react';
import { Box, Button, Grid, Grow, Paper, Typography } from '@mui/material';
import { useTechStack } from './TechController';
import { TechText } from  './TechModel';



const TechStack: React.FC = () => {
  const { selectedTech, shuffledTech, shuffleTech } = useTechStack();
  const warningColor = '#ff9800'; // Extract this from your theme or define it

  return (
    <Box paddingBottom={3} justifyContent="space-around" textAlign="left">
      <Paper elevation={4}>
        <Paper variant="outlined" sx={{ borderColor: 'gray' }}>
          <Button
            sx={{
              width: '100%',
              justifyContent: 'flex-start',
              flex: 1,
              typography: 'h3',
              textTransform: 'capitalize',
            }}
            variant="text"
            color="warning"
            onClick={shuffleTech}
          >
            Tech stack
          </Button>
          <Grow in={true} style={{ transformOrigin: '0 1 0' }} {...(true ? { timeout: 2000 } : {})} >
            <Typography variant='h6' sx={{ display:'flex', padding: '8px' }} > Developer who wants to explore {selectedTech?.toString()} tech </Typography>
            </Grow>
          <Grid
            container
            spacing={0}
            justifyItems="center"
            alignItems="center"
            sx={{ height: '100%' }}
          >
            {TechText.map((tech) => (
              <Grid
                item
                key={tech.id}
                xs={3}
                sm={3}
                p={1}
                height="50%"
              >
                <Paper elevation={8} sx={{ display: 'flex', justifyContent: 'center', padding: '8px' }}>
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
      </Paper>
    </Box>
  );
};

export default TechStack;
