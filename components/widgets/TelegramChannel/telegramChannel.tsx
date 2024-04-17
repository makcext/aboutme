"use client";
import React, { useEffect, ChangeEvent } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { Avatar, Alert, Box, Card, CardMedia, Chip, Paper, TextField, Typography, IconButton, Grid } from "@mui/material";
import Script from 'next/script';
import Link from 'next/link';

import logo from './logo.png';

const imageData = [
	{ id: 0, src: logo },
];

const TelegramWidget = () => {


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

							<Image src={imageData[0].src} alt='aueb logo' width={50} height={50} />

							<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 4 }}>
								<Avatar alt="ext - route" sx={{ width: 96, height: 96, padding: '8' }} >
									<Image
										placeholder="blur"
										blurDataURL="data:image/gif;base64,..."
										src={'/aboutme/telegram/logo.png'}
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