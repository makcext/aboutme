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

// import FetchData from './ApiCall'
import FetchData from './ApiCallNext'
import FilterPrice from './filterPrice';

interface Filter {
	name: string;
	// add other properties here as needed
}


export default async function Page() {
	const data = await FetchData()

	return (
		<Suspense fallback={<div>Loading...</div>}>

			<div>
				<Box m={1}>
					<h1>Wolt API restaurants</h1>



					<h4>filter by €</h4>
					<FilterPrice data={data} />


					

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



			

				</Box>
			</div>
		</Suspense>

	);
} 