import React from 'react';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';



console.log('Wolt');

interface WoltProps {
	id: string;
	paddingBottom: number;
}

function Wolt({ paddingBottom }: WoltProps)  {
	return (

		<Box  paddingBottom={paddingBottom} justifyContent="Left" textAlign={'left'} >
			<Paper elevation={4}>
				<Paper variant="outlined" sx={{ borderColor: 'gray', padding: 2 }}  >
					<Typography variant="h3" >
						Wolt Calc Fee
					</Typography>

					<TextField sx={{ display: 'block' }} label="Cart value" ></TextField>

					<TextField sx={{ display: 'block' }} label="Delivery distance"></TextField>

					<TextField sx={{ display: 'block' }} label="Amount of items" ></TextField>

					<TextField sx={{ display: 'block' }} label="Time&Date"></TextField>

					<LocalizationProvider dateAdapter={AdapterMoment}>
					<DateTimePicker sx={{display: 'block'}} label="Basic date time picker" />
					</LocalizationProvider>

					<Button>
						calc
					</Button>

					<Typography variant="h5" >
						Delivery price: 5$
					</Typography>

					


				</Paper>
			</Paper>
		</Box>
		);

	
}

export default Wolt;