"use client"
// import dynamic from "next/dynamic";
import React, { Suspense, useState, useEffect } from 'react';
import Image from 'next/image';
import { WoltApiFetch } from './actions';

import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';

export default function Page() {

	interface Data {
		filtering: {
			filters: {
				values: Filter[];
			}[];
		};
		sections: {
			items: {
				content_id: string;
				image: { url: string };
				link: { target: string; title: string };
				quantity_str: string;
				title: string;
			}[];
		}[];
		// add other properties here as needed
	}

	const [data, setData] = useState<Data | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const result = await WoltApiFetch();
			setData(result);
		};

		fetchData();
	}, []);


	interface Filter {
		name: string;
		// add other properties here as needed
	}




	return (
		<Suspense fallback={<div>Loading...</div>}>

			<div>
				<Box m={1}>
					<h1>Wolt API restaurants</h1>

					<h4>Filter by €</h4>





					<Suspense fallback={<div>Loading2...</div>}>

						{
							data && data.filtering.filters[1].values.map((filter: Filter, index: number) => (
								<Box key={index} m={1} display="inline-block" >
									<Chip variant="outlined" color="success" label={filter.name} />
								</Box>
							))
						}

					</Suspense>






					<Suspense fallback={<div>Loading wolt +...</div>}>
						<h4>Filter Wolt+</h4>
						{
							data && data.filtering.filters[2].values.map((filter: Filter, index: number) => (
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
					</Suspense>





					<Suspense fallback={<div>Loading Categories...</div>}>
						<h4>Categories</h4>

						<Paper style={{
							display: 'grid',
							gridAutoFlow: 'column',
							overflowX: 'scroll',
							//no scrollbar
							scrollbarWidth: 'none',
						}}>
							{
								data && Array.isArray(data.sections) && data.sections[0].items.map((item: any) => (<Grid p={1} item key={item.content_id} style={{ flexShrink: 0, width: '150px' }}>
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

					</Suspense>




					<Suspense fallback={<div>Loading MultiSelect...</div>}>
						<h4>filter multi select</h4>
						{
							data && data.filtering.filters[1].values.map((filter: Filter, index: number) => (
								<Box key={index} m={1} display="inline-block" >
									<Chip variant="outlined" color="success" label={filter.name} />
								</Box>
							))
						}

						<h4>Browse categories</h4>
						{
							data && data.sections[0].items.map((items: any, index: number) => (
								<Box key={index} m={1} display="inline-block" >
									<Chip variant="outlined" color="success" label={items.title} />
								</Box>
							))
						}
					</Suspense>
				</Box>
			</div>
		</Suspense>
	);
} 