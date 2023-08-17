import React from 'react';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment from 'moment';

import { useState, useEffect } from 'react';

interface WoltProps {
	id: string;
	paddingBottom: number;
}

interface WoltData {
  cartValue: number;
  deliveryDistance: number;
  amountOfItems: number;
  timeAndDate: string;
	deliveryFee: number;
}

const data = {
  title: 'Wolt Calc Fee',
	cartLabel: 'Cart value',
	distanceLabel: 'Delivery distance',
	amountLabel: 'Amount of items',
	timeLabel: 'Time & Date',
  buttonLabel: 'calc',
  resultLabel: 'Delivery price: 5$'
};




function Wolt({ paddingBottom }: WoltProps)  {
  const [submitedData, setSubmitedData] = useState<WoltData>({
    cartValue: 0,
    deliveryDistance: 0,
    amountOfItems: 0,
    timeAndDate: '',
		deliveryFee: 0,
	
  });

// fetch data from cart value, delivery distance, amount of items, time and date and put it in const submitedData
const calcLogic = (data: WoltData) => {
  const { cartValue, deliveryDistance, amountOfItems, timeAndDate } = data;

  // Calculate small order surcharge
  const smallOrderSurcharge = cartValue < 10 ? 10 - cartValue : 0;
	console.log(smallOrderSurcharge);
  // Calculate delivery fee based on distance
  const baseFee = 2;
  const additionalFee = Math.ceil((deliveryDistance - 1000) / 500) * 1;
  const distanceFee = Math.max(baseFee + additionalFee, 1);
	console.log(distanceFee);

  // Calculate item surcharge
  const itemSurcharge = amountOfItems >= 5 ? (amountOfItems - 4) * 0.5 : 0;
  const bulkFee = amountOfItems > 12 ? 1.2 : 1;
  const totalItemSurcharge = itemSurcharge * bulkFee;

  // Calculate rush hour surcharge
  const isRushHour = moment(timeAndDate).utc().hour() >= 15 && moment(timeAndDate).utc().hour() <= 19;
  const rushHourMultiplier = isRushHour ? 1.2 : 1;

  // Calculate total delivery fee
  let totalFee = distanceFee + totalItemSurcharge + smallOrderSurcharge;
	console.log(cartValue, distanceFee, totalItemSurcharge, smallOrderSurcharge)
  totalFee = Math.min(totalFee, 100); // Cap the fee at 100€
  totalFee = Math.min(totalFee * rushHourMultiplier, 15); // Apply rush hour multiplier and cap the fee at 15€
	// console.log(totalFee);

  // Return the calculated delivery fee
  return totalFee;

};




	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setSubmitedData(prevState => ({ ...prevState, [name]: parseFloat(value) }));
	};

	const handleDataChange = (value: Date | null) => {
		if (value) {
			const formattedDate = moment.utc(value).local().format('YYYY-MM-DD HH:mm');
			setSubmitedData(prevState => ({ ...prevState, timeAndDate: formattedDate }));
		}
	};

	const handleButtonClick = () => {
		const deliveryFee = calcLogic(submitedData);
		setSubmitedData(prevState => ({ ...prevState, deliveryFee }));
	};




// console.log(submitedData);

	return (




		<Box  paddingBottom={paddingBottom} justifyContent="Left" textAlign={'left'} >
			<Paper elevation={4}>
				<Paper variant="outlined" sx={{ borderColor: 'gray', padding: 1 }}  >
          <Typography variant="h3" >
            {data.title}
          </Typography>
  
	<TextField
    sx={{ display: 'block', padding: 0 }}
    label={data.cartLabel}
		name="cartValue"
		// value={submitedData.cartValue}
		onChange={handleInputChange}
  />

<TextField
    sx={{ display: 'block', padding: 0 }}
    label={data.distanceLabel}
		name='deliveryDistance'
		// value={submitedData.deliveryDistance}
		onChange={handleInputChange}
  />

<TextField
    sx={{ display: 'block', padding: 0 }}
    label={data.amountLabel}
		name='amountOfItems'
		// value={submitedData.amountOfItems}
		onChange={handleInputChange}
  />



					<LocalizationProvider dateAdapter={AdapterMoment}>
						<DateTimePicker
              sx={{ display: 'block', padding: 0 }}
              label={data.timeLabel}
							onChange={handleDataChange}
            />
					</LocalizationProvider>
                        

					
          <Typography variant="h6">{`Delivery price: ${submitedData.deliveryFee }€`}</Typography>
					<Button size='large' onClick={handleButtonClick}>{data.buttonLabel}</Button>


				</Paper>
			</Paper>
		</Box>
		);

	
}

export default Wolt;