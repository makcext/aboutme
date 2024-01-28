import React, { Suspense } from 'react';

import Box from '@mui/material/Box';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

export default function Categories({ data }: any) {

	return (
		<Suspense fallback={<div>Loading Categories...</div>}>

			<Typography variant='h4' p={2}>{data.sections[0].title}</Typography>
			<Grid style={{ display: 'flex', overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', padding: 8 }}>
				{data.sections[0].items.map((item: any, index: any) => (
					<Card elevation={2} key={index} style={{ flex: '0 0 auto', marginRight: '8px', width: '128px', borderRadius: '8px' }}>
						<CardMedia
							component="img"
							alt={item.title}
							height="128"
							image={item.image.url}
						/>
						<CardContent>
							<Typography variant="body2" >
								{item.title}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{item.quantity_str}
							</Typography>
						</CardContent>
					</Card>
				))}
			</Grid>
		</Suspense>

	)
}
