"use client";
import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, Chip, Grid, Grow, Typography } from "@mui/material";
// import QRsvg from '../svg/qrsvg';
import PlaceIcon from '@mui/icons-material/Place';
import TwitterIcon from '@mui/icons-material/Twitter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import '@fontsource/roboto/400.css';
import WeatherData from '../Weather/WeatherModel';
import fetchWeatherData from "../Weather/WeatherController";
import WeatherDialog from '../Weather/WeatherDialog'
import Join from "../Join/Join";
import Image from 'next/image';
import avatarImage from '../../../public/avatar.png';
import Link from 'next/link';


import DoneIcon from '@mui/icons-material/Done';

// const avatarImage = require('./avatar.png');

type InfoBlockProps = {
	icon: React.ReactNode;
	text: string;
};

const InfoBlock: React.FC<InfoBlockProps> = ({ icon, text }) => (
	<Box display="flex" alignItems="center">
		<Box sx={{ marginRight: 1 }}>{icon}</Box>
		<Typography variant="h4" fontSize={14} sx={{ textAlign: 'left' }}>{text}</Typography>
	</Box>
);

const HelloBlock = () => {
	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [weatherData, setWeatherData] = useState<WeatherData | null>(null);



	useEffect(() => {
		fetchWeatherData()
			.then((data) => setWeather(data))
			.catch((error) => console.error(error));
	}, []);

	// console.log('weatherData', weatherData);





	// const handleGPSClick = () => {
	//   navigator.geolocation.getCurrentPosition((position) => {
	//     const { latitude, longitude } = position.coords;
	// 		console.log('latitude', latitude);
	// 		console.log('longitude', longitude);


	//     fetchWeatherData(latitude, longitude)
	//       .then((fetchedData: any) => {
	//         if (fetchedData && fetchedData.name) {
	//           setWeatherData(fetchedData);
	//         } else {
	//           console.error('Invalid data format:', fetchedData);
	//         }
	//       })
	//       .catch((error: any) => {
	//         console.error('Failed to fetch weather data:', error);
	//       });


	//   }, (error) => {
	//     console.error('Failed to get location:', error);
	//   }
	//   );
	// };








	return (
		<div>
			<Box paddingBottom={1}>
				<Grid container justifyContent={"space-evenly"}>
					<Grid item xs={6} md={6} paddingTop={0}>
						<Avatar alt="ext - route" sx={{ width: 96, height: 96 }}>
							{/* <Image placeholder="blur" src={avatarImage} alt="ext - route" width={128} height={96} /> */}
							{/* <Image placeholder="blur" src="/avatar.png" alt="Avatar" width={128} height={96} /> */}

							<Image
								placeholder="blur"
								blurDataURL="data:image/gif;base64,..."
								src={'/aboutme/avatar.png'}
								alt="Avatar"
								width={128}
								height={96}
							/>



						</Avatar>
						<InfoBlock icon={<PlaceIcon />} text="ath, att, gr" />
						<InfoBlock icon={<AccessTimeIcon />} text="UTC +03:00" />
						<InfoBlock icon={<TwitterIcon />} text="@makcext" />



					</Grid>







					<Grid item xs={6} md={6}>
						<Grow in={true} style={{ transformOrigin: '0 1 0' }} {...(true ? { timeout: 1000 } : {})}>
							<Typography variant="body1" component="h1" fontSize={16} sx={{ textAlign: 'center' }}>
								makcext developer
							</Typography>
						</Grow>
						<Box display="flex" justifyContent="center">
							<Chip sx={{ fontSize: 12 }} label="react | ts | mobx | graphql" variant="outlined" color="warning" />

						</Box>
						<Typography variant="body1" sx={{ textAlign: 'center' }}>
							let's go!
						</Typography >
						<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

							<Join />

						</div>

						{/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

							<Link
								href="/weather"
								style={{ textDecoration: 'none', color: 'inherit' }}
							>
								<Typography variant="h4" fontSize={14} sx={{ textAlign: 'left' }} gutterBottom>
									{weather ? `${weather.main.temp}°C [ ${weather.weather[0].description} ]` : 'Loading weather data...'}

									weather service


								</Typography>
							</Link>

							<Grid item xs={6}>

							</Grid>



						</div> */}

						{/* <QRsvg /> */}
						{/* <Avatars /> */}

					</Grid>

					<Box padding={1} display="inline-block">
						<Link href="https://omexbuild.uk">
							<Chip
								color="success"
								label="Omex Build"
								variant="outlined"
								clickable
							/>
						</Link>
					</Box>
					<Box padding={1} display="inline-block">
						<Link href="/weather">
							<Chip
								color="success"
								label="Weather"
								variant="outlined"
								clickable
							/>
						</Link>
					</Box>
					<Box padding={1} display="inline-block">
						<Link href="/woltApi">
							<Chip
								color="success"
								label="wolt api"
								variant="outlined"
								clickable
							/>
						</Link>
					</Box>




					{/* <Box display="flex" justifyContent="center" alignItems="center" style={{ height: '100%' }}>
              <Button onClick={handleGPSClick}>
                <Chip  label="Use GPS" clickable color="success" variant="outlined" />
              </Button>
<Typography variant="h4" fontSize={14} sx={{ textAlign: 'left' }} gutterBottom>
									{weatherData ? `${weatherData.main.temp}°C [ ${weatherData.weather[0].description} ]` : 'Loading weather data...'}

								</Typography>
            </Box> */}
				</Grid>
			</Box>
		</div>
	);
}

export default HelloBlock;