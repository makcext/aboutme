import dynamic from "next/dynamic";
import React, { Suspense } from 'react';
import Image from 'next/image';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

import MopedOutlinedIcon from '@mui/icons-material/MopedOutlined';

import FetchData from './ApiCall'
// import FetchData from './ApiCallNext'

// import FilterPrice from './filterPrice';
// import Categories from './categories';
const Categories = dynamic(() => import("./categories"), { ssr: false });


export default async function Page() {
	const data = await FetchData()

	return (
		<Suspense fallback={<div>Loading Restaurants...</div>}>
		{/* <FilterPrice data={data} /> */}

			<div>
				<Box m={1}>
					<Typography variant="h4">Wolt API restaurants </Typography>
				
				<Categories data={data} />

					<Typography variant='h4' p={2}>{data.sections[1].title}</Typography>
					{data.sections[1].items.slice(0, 5).map((item: any, index: any) => (
						<Grid p={1} item key={index}>
							<Card elevation={2} style={{borderRadius: '8px'}} >
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
											<Chip style={{ backgroundColor: 'rgba(0, 157, 224, 0.08)' }} sx={{ height: 'auto', '& .MuiChip-label': { display: 'block', whiteSpace: 'normal', }, }}
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

				</Box>
			</div>
		</Suspense>

	);
} 