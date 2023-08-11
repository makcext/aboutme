import React from 'react';
import { Box, Button, Grid, Paper, Typography } from "@mui/material";


import { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	palette: {
    mode: 'dark',
    //TODO: add custom colors
    warning: {
      main: '#ff9800',
    },
  },
});


interface Tech {
  id: number;
	text: string;
}

interface TechProps {
  id: string;
  paddingBottom: number;
}

const tech: Tech[] = [
	{ id: 1, text: 'React' },
  { id: 2, text: 'Mobx' },
	{ id: 3, text: 'MUI' },
	{ id: 4, text: 'Typescript' },
	{ id: 5, text: 'Javascript' },
	{ id: 6, text: 'CSS' },
	{ id: 7, text: 'HTML' },
	{ id: 8, text: 'Graphql' },

];

function TechStack ({ id, paddingBottom }: TechProps) {
	const [selectedTech, setSelectedTech] = useState('');
	const [shuffledTech, setShuffledTech] = useState<string[]>([]);
	
	function shuffleTech() {
		const shuffled = [...tech].sort(() => Math.random() - 0.5);
		const shuffledText = shuffled.map((tech) => tech.text);
		setShuffledTech(shuffledText);
		setSelectedTech(shuffledText[0]);
	}

  useEffect(() => {
    shuffleTech();
  }, []);

  function handleClick() {
    shuffleTech();
  }

	const warningColor = theme.palette.warning.main;

	return (
		<>
		<ThemeProvider theme={theme}>
		<Box paddingBottom={paddingBottom} display="inline" justifyContent="space-around" textAlign={'left'} >
      
      <Paper elevation={4}>
      <Paper variant="outlined" sx={{ borderColor: 'gray' }}  >
				<Button  sx={{ width: '100%', justifyContent: 'flex-start', flex: 1, typography: 'h3', textTransform: 'capitalize', }} variant='text' color='warning' onClick={handleClick}>Tech stack</Button>
			<Typography variant='h5' sx={{ display:'flex', padding: '8px' }} >  Developer who wants to explore {selectedTech?.toString()} tech  </Typography>
      <Grid container spacing={0}  justifyItems={"center"} alignItems={"center"} sx={{ height: '100%' }}>

				{tech.map(tech => (
					<Grid item key={tech.id}  xs={3} sm={3} p={1} height={"50%"}>
						<Paper  elevation={8}  sx={{ display: 'flex', justifyContent: 'center', padding:'8px' }}>
						{tech.text && (
  						<Typography variant="body2"  align="center" style={{ color: shuffledTech[0] === tech.text ? warningColor : 'inherit' }}>{tech.text}</Typography>
						)}
						</Paper>
					</Grid>
				))}
         
      </Grid>
      </Paper>
      </Paper>
      
		</Box>
		</ThemeProvider>
		</>
  );
}

export default TechStack;