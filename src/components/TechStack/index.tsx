import React from 'react';
import { Box, Grid, Paper, Typography } from "@mui/material";

// import { useTheme } from '@mui/material/styles';
// import { useMediaQuery } from '@mui/material';
interface Tech {
  id: number;
  src?: string;
	text?: string;
	paddingBottom?: number;
}

interface TechProps {
  id: string;
  paddingBottom?: number;
}
// const auebPng = require('./aueb.png');

const tech: Tech[] = [
	{ id: 1, text: 'React' },
  { id: 2, text: 'Mobx' },
	{ id: 3, text: 'Material UI' },
	{ id: 4, text: 'Typescript' },
	{ id: 5, text: 'Javascript' },
	{ id: 6, text: 'HTML' },
	{ id: 7, text: 'CSS' },
	{ id: 8, text: 'Graphql' },

];

const TechStack = ({ paddingBottom }: TechProps) => {
  // const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  // const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  // const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));


	// const typographyColor = isSmallScreen ? 'red' : isMediumScreen ? 'blue' : isLargeScreen ? 'green' : '';


	return (
		<>
		<Box paddingBottom={paddingBottom} display="block" justifyContent="Left" textAlign={'left'} >
      
      <Paper elevation={4}>
      <Paper variant="outlined">
			<Typography variant='h3' > Tech stack </Typography>
			<Typography variant='h5' >  Developer who wants to explore every tech  </Typography>

      <Grid container spacing={0}  justifyItems={"center"} alignItems={"center"} sx={{ height: '100%' }}>

				{tech.map(tech => (
					<Grid item key={tech.id}  xs={4} sm={3} p={1} height={"50%"}>
						<Paper variant={"outlined"} elevation={0}  sx={{ display: 'flex', justifyContent: 'center', padding:'8px' }}>
						{tech.text && (
  						<Typography variant="body2"  align="center">{tech.text}</Typography>
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

export default TechStack;