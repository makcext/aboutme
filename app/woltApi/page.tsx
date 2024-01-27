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
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import MopedIcon from '@mui/icons-material/Moped';
import MopedOutlinedIcon from '@mui/icons-material/MopedOutlined';

import FetchData from './ApiCall'
// import FetchData from './ApiCallNext'
// import FilterPrice from './filterPrice';


export default async function Page() {
	const data = await FetchData()

	return (
		<Suspense fallback={<div>Loading Restaurants...</div>}>

			<div>
				<Box m={1}>
					<h1>Wolt API restaurants</h1>
					<Typography variant='h4' p={2}>{data.sections[0].title}</Typography>
					<Grid style={{ display: 'flex', overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', padding: 8 }}>
						{data.sections[0].items.map((item: any, index: any) => (
							<Card elevation={3} key={index} style={{ flex: '0 0 auto', marginRight: '8px', width: '128px' }}>
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


					<Typography variant='h4' p={2}>{data.sections[1].title}</Typography>

					{data.sections[1].items.slice(0, 5).map((item: any, index: any) => (
						<Grid p={1} item key={index}>
							<Card elevation={3}>
								<CardMedia
									component="img"
									alt={item.title}
									height="254"
									image={item.image.url}
								/>

								<CardContent style={{ paddingBottom: 0 }}>
								<Typography variant="h6" >
												{item.title}
											</Typography>

									<Grid container alignItems={'space-between'}>

										<Grid item xs={9}>
											<Typography variant="body2" color="textSecondary" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
												{item.venue.short_description}
											</Typography>
										</Grid>
										<Grid item xs={3} style={{ display: 'flex', justifyContent: 'flex-end' }}>
											<Chip style={{ backgroundColor: 'rgba(0, 157, 224, 0.08)' }}  sx={{height: 'auto', '& .MuiChip-label': {display: 'block', whiteSpace: 'normal',},}}
												label={
													<>
														<Typography variant='body2' align="center"> {` ${item.venue.estimate_range} `} </Typography>
														<Typography variant='body2' align="center"> {` ${item.venue.estimate_box.subtitle} `} </Typography>
													</>
												} 
											/>
										</Grid>
									</Grid>

									<Box display="flex" alignItems="left" justifyContent="left">
										<MopedOutlinedIcon />
										<Typography variant='body2' marginRight={1}>
											{item.venue.delivery_price}
										</Typography>

										<Typography variant="body2" color="textSecondary" align='center' >
											{item.venue.rating ? item.venue.rating.score : 'No rating'}
										</Typography>
									</Box>

								</CardContent>
							</Card>
						</Grid>
					))}

					{/* <h4>filter by €</h4>
					<FilterPrice data={data} />


					<h4>filter multi select</h4>
					{
						data.filtering.filters[0].values.map((filter: Filter, index: number) => (
							<Box key={index} m={1} display="inline-block" >
								<Chip variant="outlined" color="success" label={filter.name} />
							</Box>
						))
					} */}





				</Box>
			</div>
		</Suspense>

	);
} 