"use client";
import React, { useEffect, ChangeEvent } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { Avatar, Alert, Box, Card, CardMedia, Chip, Paper, TextField, Typography, IconButton, Grid } from "@mui/material";
import Script from 'next/script';
import Link from 'next/link';


const imageData = [
	{
		id: 0,
		src: '/omex/01.png',
		alt: 'Omex Build',
	},
	{
		id: 1,
		src: '/omex/02.png',
		alt: 'Omex Build',
	},
	{
		id: 2,
		src: '/omex/03.png',
		alt: 'Omex Build',
	},
	{
		id: 3,
		src: '/omex/04.png',
		alt: 'Omex Build',
	},
	{
		id: 4,
		src: '/omex/05.png',
		alt: 'Omex Build',
	},
];



const projects = [
	{
		id: 0,
		images: [
			'01',
			'02',
			'03',
			'04',
			'05',
			'06',
		],
		title: 'omex',
		by: 1,
		street: 'build',
		description: 'This is a description'
	},

];








const TelegramWidget = () => {
	const [currentImage, setCurrentImage] = useState(Array(projects.length).fill(0));

	const handleScroll = (index: any) => (event: any) => {
		const element = event.target;
		const visibleImageIndex = Math.ceil(element.scrollLeft / element.clientWidth);
		setCurrentImage((prev) =>
			prev.map((item, i) => i === index ? visibleImageIndex : item)
		);
	};

	return (
		<>

			<Box maxWidth="xs" paddingTop={0} justifyContent="space-around" textAlign="left" minHeight={360}>
				{/* <Paper elevation={3} > */}
				<Paper variant="outlined" sx={{ borderColor: 'gray', padding: 0 }}>
					<Card elevation={4} sx={{ backgroundColor: 'transparent' }}>
						<Box textAlign="left" minHeight={380}>
							<Box p={1} justifyContent={'space-between'}>

								<Typography variant="body1">Nov 3, 2023 Finished News Bot [oct 23 - nov 23]</Typography>

							</Box>

							<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 4 }}>
								<Avatar alt="ext - route" sx={{ width: 96, height: 96, padding: '8' }} >
									<Image
										placeholder="blur"
										blurDataURL="data:image/gif;base64,..."
										src={'/aboutme/telegramChannel/telegram-channel-logo.png'}
										alt="Avatar"

										width={96}
										height={96}
									/>
								</Avatar>
							</div>

							<Typography variant="body1" fontSize={24} sx={{ textAlign: 'center' }}>
								ola kala 🇬🇷
							</Typography>
							<Typography variant='subtitle1' fontSize={16} sx={{ textAlign: 'center', color: 'gray' }}>
								129 subscribers
							</Typography>

							<Box pr={4} pl={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Typography variant="body1" fontSize={16} sx={{ textAlign: 'center' }}>
									Το κανάλι αυτό είναι αφιερωμένο σε όλη την Ελλάδα και στα παιδιά που είναι στη πατρίδα και στο εξωτερικό.
								</Typography>
							</Box>

							<Box padding={0} pt={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Link href="tg://resolve?domain=ola_kala">
									<Chip
										color='info'
										label="VIEW IN TELEGRAM"
										variant="outlined"
										clickable
									/>
								</Link>
							</Box>

							<Box padding={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Link href="https://t.me/s/ola_kala">
									<Chip
										color='info'
										label="Preview channel"
										variant="outlined"
										clickable
									/>
								</Link>
							</Box>







						</Box>


					</Card>




				</Paper>
				{/* </Paper> */}
			</Box>





		</>
	);
}

export default TelegramWidget;