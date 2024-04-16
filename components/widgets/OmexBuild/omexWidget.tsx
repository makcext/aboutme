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
			{ id: 0, url: '01' },
			{ id: 1, url: '02' },
			{ id: 2, url: '03' },
			{ id: 3, url: '04' },
			{ id: 4, url: '05' },
			{ id: 5, url: '06' },
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
			prev.map((item, i) => (i === index ? visibleImageIndex : item))
		);
	};

	return (
		<>
			{projects.map((project, index) => (
				<Grid xs={12} md={6} item key={project.id}>
					<Box component='article' sx={{ width: '100%', height: '100%', position: 'relative', p: 2 }}>
						<Card elevation={4} sx={{ backgroundColor: 'transparent' }}>
							<Box sx={{ display: 'flex', overflowY: 'auto', scrollSnapType: 'x mandatory', scrollbarWidth: '-moz-initial', '&::-webkit-scrollbar': { display: 'none' } }} onScroll={handleScroll(index)}>
								{project.images.map((image, imageIndex) => (
									<CardMedia key={imageIndex} component="img" height="320px" image={`aboutme/omex/${project.images[currentImage[index]].url}.png`} alt={project.title} sx={{ flex: 'none', scrollSnapAlign: 'start', objectFit: 'cover' }} />
								))}
							</Box>
							<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }}>
								{project.images.map((_, dotIndex) => (
									<Box key={dotIndex} sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: dotIndex === currentImage[index] ? 'primary.main' : 'grey.500', mx: 0.5 }} />
								))}
							</Box>
							<Box p={2} display={'flex'} justifyContent={'space-between'}>
								<Typography component='h3' variant='h2' style={{ fontSize: '1.4rem' }} fontWeight={300} alignContent='center'>
									{project.title}, {project.street}
								</Typography>
							</Box>
						</Card>
					</Box>
				</Grid>
			))}
		</>
	);
}

export default OmexWidget;