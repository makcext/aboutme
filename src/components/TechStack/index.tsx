import React from 'react';
import { Box, Grid, Paper, Typography } from "@mui/material";


import { useState, useEffect } from 'react';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { AlignHorizontalRight } from '@mui/icons-material';


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
	
		useEffect(() => {
			function shuffleTech() {
				const shuffledTech = [...tech].sort(() => Math.random() - 0.5);
				setSelectedTech(shuffledTech[0].text);
				// console.log('from-useEffect', shuffledTech);
			}
	
			shuffleTech();
		}, []);
	
		function handleClick() {
			const shuffledTech = [...tech].sort(() => Math.random() - 0.5);
			setSelectedTech(shuffledTech[0].text);
			// console.log('from-handleClick', shuffledTech);

		}



	return (
		<>
		<Box paddingBottom={paddingBottom} display="inline" justifyContent="space-around" textAlign={'left'} >
      
      <Paper elevation={4}>
      <Paper variant="outlined" sx={{ borderColor: 'gray' }} >
				<Typography style={{ flex: 1 }} variant='h3' sx={{ padding: '8px' }} onClick={handleClick} > Tech stack </Typography>
			<Typography variant='h5' sx={{ padding: '8px' }} >  Developer who wants to explore {selectedTech?.toString()} tech  </Typography>

      <Grid container spacing={0}  justifyItems={"center"} alignItems={"center"} sx={{ height: '100%' }}>

				{tech.map(tech => (
					<Grid item key={tech.id}  xs={3} sm={3} p={1} height={"50%"}>
						<Paper  elevation={8}  sx={{ display: 'flex', justifyContent: 'center', padding:'8px' }}>
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