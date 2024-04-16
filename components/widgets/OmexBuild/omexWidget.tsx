"use client";
import React, { useEffect, ChangeEvent } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { Alert, Box, Card, CardMedia, Paper, TextField, Typography, IconButton, Grid } from "@mui/material";


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
			{ id: 0, url: '/aboutme/omex/01.png' },
			{ id: 1, url: '/aboutme/omex/02.png' },
			{ id: 2, url: '/aboutme/omex/03.png' },
			{ id: 3, url: '/aboutme/omex/04.png' },
			{ id: 4, url: '/aboutme/omex/05.png' },
			{ id: 5, url: '/aboutme/omex/06.png' },
		],
		title: 'omex',
		by: 1,
		street: 'build',
		description: 'This is a description'
	},

];








const OmexWidget = () => {


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

			<Box maxWidth="xs" paddingTop={0} justifyContent="space-around" textAlign="left" minHeight={460}>
				<Paper elevation={3} >
					<Paper variant="outlined" sx={{ borderColor: 'gray', padding: 1 }}>
						<Box textAlign="left" minHeight={460}>
							<Typography variant="body1">15 Apr 2024 Finished Omex Build Project: [ feb 2024 - apr 2024 ]</Typography>
							{/* <Typography variant="body2">Description: This is a project to build a web app for Omex Build ltd</Typography> */}
							{/* <Typography variant="body2">Stack: nextjs reactjs </Typography> */}
							<Typography variant="body2">Functional Requirements: contact form, customer review, scanning qr code notification to mail </Typography>



							{projects.map((project, index) => (
								<Grid xs={12} md={6} item key={project.id}>
									<Box component='article' sx={{ width: '100%', height: '100%', position: 'relative', p: 1 }}>
										<Card elevation={4} sx={{ backgroundColor: 'transparent' }}>
											<Box sx={{ display: 'flex', overflowY: 'auto', scrollSnapType: 'x mandatory', scrollbarWidth: '-moz-initial', '&::-webkit-scrollbar': { display: 'none' } }} onScroll={handleScroll(index)}>
												{projects[0].images.map((image, index) => (
													<Card key={index} sx={{width: '280', height: '360'}}>
														<Image src={`${image.url}`} alt={project.title} width={280} height={360} />
														
													</Card>
												))}


                     {/* <Image src={`/aboutme/weatherIcons/${item?.weather[0]?.icon || 'unknown'}.png`} alt={weatherData?.weather[0]?.description || ''} width={48} height={48} /> */}




											</Box>
											<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 0 }}>
												{project.images.map((_, dotIndex) => (
													<Box key={dotIndex} sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: dotIndex === currentImage[index] ? 'primary.main' : 'grey.500', mx: 0.5 }} />
												))}
											</Box>
											<Box p={1} display={'flex'} justifyContent={'space-between'}>
												<Typography component='h3' variant='h2' style={{ fontSize: '0.8rem' }} fontWeight={300} alignContent='center'>
													{project.title} {project.street}
												</Typography>
											</Box>
										</Card>
									</Box>

								</Grid>

							))}









						</Box>




					</Paper>
				</Paper>
			</Box>

		</>
	);
}


export default OmexWidget;