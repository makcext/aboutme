'use client'
import React, { useEffect, useState, Suspense } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// import WoltApiFetch from './ApiCall';

interface FilterValue {
	name: string;
	id: string;
	// add other properties here as needed
}

interface Filter {
	name: string;
	filtering: {
		filters: {
			values: FilterValue[];
		}[];
	};
	sections: {
		items: {
			title: string;
			filtering: {
				filters: {
					id: string;
					values: string[];
				}[];
			};
			image: {
				url: string;
			};
			venue: {
				address: string;
				short_description: string;
				delivery_price: number;
				estimate_range: number;
				rating: {
					rating: number;
					score: number;
				};
			};
		}[];
	}[];
}

function MyComponent({ data }: { data: Filter }) {
	// console.log(data)
	const [selectedFilter, setSelectedFilter] = useState('price-range-3');  // Render your data here
	// console.log(selectedFilter)

	const renderCard = (item: any, index: any) => (
		<Grid p={1} item key={index} style={{ flexShrink: 0, width: '304px' }}>
			<Card elevation={3}>
				<CardHeader
					title={<Typography variant="body2">{item.title}</Typography>}
				/>
				<CardMedia
					component="img"
					alt={item.title}
					height="140"
					image={item.image.url}
				/>
				<CardContent>
					<Typography variant="body2" color="textSecondary" component="p">
						{item.venue.address}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{item.venue.short_description?.substring(0, 32)}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Delivery price: {item.venue.delivery_price}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Estimated delivery time: {item.venue.estimate_range} min
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Rating: {item.venue.rating ? item.venue.rating.rating : 'No rating'}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);




	return (
		<Suspense fallback={<div>LoadingFilterPrice...</div>}>

			{
				data.filtering.filters[1].values.map((filter: FilterValue, index: number) => (
					<Box key={filter.id} m={1} display="inline-block">
						<Chip
							variant="outlined"
							color={filter.id === selectedFilter ? "success" : "default"}
							label={filter.name}
							onClick={() => setSelectedFilter(filter.id)}
						/>
					</Box>
				))
			}






			<Paper style={{
				display: 'grid',
				gridAutoFlow: 'column',
				overflowX: 'scroll',
			}}>
				{
					selectedFilter && data.sections[1].items
						.filter(item => item.filtering.filters[1].values.includes(selectedFilter))
						.map(renderCard)
				}
			</Paper>









		</Suspense>
	);
}

// export async function getServerSideProps() {
// 	const data = await WoltApiFetch();

// 	return {
// 		props: {
// 			data,
// 		},
// 	};
// }

export default MyComponent;