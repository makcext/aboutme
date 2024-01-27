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
import FilterPrice from './filterPrice';
import { Margin } from '@mui/icons-material';

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








					<Typography variant='h3' p={2}>Categories</Typography>
					<Grid style={{ display: 'flex', overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', padding: 8 }}>
						{data.sections[0].items.map((item: any) => (
							<Card elevation={3} key={item.condent_id} style={{ flex: '0 0 auto', marginRight: '8px', width: '128px' }}>
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
						<Grid p={1} item key={item.content_id} style={{ flexShrink: 0, }}>
							<Card elevation={3}>
								{/* <CardHeader
									title={<Typography variant="body2">{item.title}</Typography>}
								/> */}
								<CardMedia
									component="img"
									alt={item.title}
									height="254"
									image={item.image.url}
								/>

								<CardContent style={{ paddingBottom: 0 }}>


									<Grid container spacing={2}>

										<Grid item xs={9}>
											<Typography variant="overline" >
												{item.title}
											</Typography>



											<Typography variant="body2" color="textSecondary" >
												{item.venue.short_description?.substring(0, 64)}
											</Typography>
										</Grid>


										<Grid item alignContent={'center'} xs={3}>

											<Box>
												<Chip color='primary' sx={{
													height: 'auto',
													'& .MuiChip-label': {
														display: 'block',
														whiteSpace: 'normal',

													},
												}}


													label={
														<>
															<Typography align="center">{`${item.venue.estimate_range}`}</Typography>
															<Typography align="center">{`${item.venue.estimate_box.subtitle}`}</Typography>
														</>
													} />


											</Box>

										</Grid>


									</Grid>
									<br />
									{/* <Divider variant="fullWidth"  /> */}

									<Box display="flex" alignItems="left" justifyContent="left">
										<MopedOutlinedIcon />
										<Typography variant='body1' marginRight={1}>
											{item.venue.delivery_price}
										</Typography>

										<Typography variant="body1" color="textSecondary" align='center' >
											{item.venue.rating ? item.venue.rating.score : 'No rating'}
										</Typography>
									</Box>


								</CardContent>
							</Card>
						</Grid>
					))}







					<h4>filter by €</h4>
					<FilterPrice data={data} />


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