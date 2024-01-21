// import dynamic from "next/dynamic";

import { values } from "mobx"

import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';


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

	console.log(data)

	return (
		<div>
			<Box m={1}>
			<h1>Wolt API restaurants</h1>

			
			<h4>filter by €</h4>
			{
				data.filtering.filters[1].values.map((filter: Filter, index: number) => (
					<Box key={index} m={1} display="inline-block" >
						<Chip variant="outlined" color="success" label={filter.name} />
					</Box>
				))
			}

			<h4>filter Wolt+</h4>
			{
				data.filtering.filters[2].values.map((filter: Filter, index: number) => (
					<Box key={index} m={1} display="inline-block" >
						<Chip variant="outlined" color="success" label={filter.name} />
					</Box>
				))
			}


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

			
</Box>
		</div>
	);
} 