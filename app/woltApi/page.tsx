// import dynamic from "next/dynamic";
import React, { Suspense } from 'react';
import Image from 'next/image';

import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';




async function getData() {
	const res = await fetch('https://restaurant-api.wolt.com/v1/pages/restaurants?lat=60.170187&lon=24.930599')
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

interface Filter {
	name: string;
	// add other properties here as needed
}


export default async function Page() {
	const data = await getData()

	// console.log(data.sections[0].end_of_section)
	// console.log(data.sections[0].items)

	// console.log(data.sections[1].title)

	// data.sections[0].items.forEach(item => {
	// 	console.log(item);
	// });

	// Function to handle chip click









	return (
		<Suspense fallback={<div>Loading...</div>}>

			<div>
				<Box m={1}>
					<h1>Wolt API restaurants</h1>


					<h4>filter by €</h4>
					<Suspense fallback={<div>Loading2...</div>}>

						{
							data.filtering.filters[1].values.map((filter: Filter, index: number) => (
								<Box key={index} m={1} display="inline-block" >
									<Chip variant="outlined" color="success" label={filter.name} />
								</Box>
							))
						}

					</Suspense>


					<h4>filter Wolt+</h4>
					{
						data.filtering.filters[2].values.map((filter: Filter, index: number) => (
							<Box key={index} m={1} display="inline-block" >
								<Chip variant="outlined" color="success" label={filter.name} />
								<Switch
									edge="end"
									inputProps={{
										'aria-labelledby': 'switch-list-label-bluetooth',
									}}
								/>
							</Box>
						))
					}

					<h4>Categories</h4>

					<Paper style={{
						display: 'grid',
						gridAutoFlow: 'column',
						overflowX: 'scroll',
					}}>
						{data.sections[0].items.map((item: any) => (
							<Grid p={1} item key={item.content_id} style={{ flexShrink: 0, width: '150px' }}>
								<Card elevation={3}>
									<CardMedia
										component="img"
										alt={item.title}
										height="140"
										image={item.image.url}
									/>
									<CardContent>
										<Typography variant="body1" component="div">
											{item.title}
										</Typography>
										<Typography variant="body2" color="text.secondary">
											{item.quantity_str}
										</Typography>
										<a href={item.link.target}>{item.link.title}</a>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Paper>



					<h4>filter multi select</h4>
					{
						data.filtering.filters[0].values.map((filter: Filter, index: number) => (
							<Box key={index} m={1} display="inline-block" >
								<Chip variant="outlined" color="success" label={filter.name} />
							</Box>
						))
					}

					<h4>Browse categories</h4>
					{
						data.sections[0].items.map((items: any, index: number) => (
							<Box key={index} m={1} display="inline-block" >
								<Chip variant="outlined" color="success" label={items.title} />
							</Box>
						))
					}

					<h4>Categories</h4>








				</Box>
			</div>
		</Suspense>

	);
} 