
import React, { useEffect, useState, Suspense } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import WoltApiFetch from './ApiCall';

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
}

function MyComponent({ data }: { data: Filter }) {
	console.log(data)
  // Render your data here
  return (
		<Suspense fallback={<div>LoadingFilterPrise...</div>}>

		{
			data.filtering.filters[1].values.map((filter: FilterValue, index: number) => (
				<Box key={filter.id} m={1} display="inline-block" >
					<Chip variant="outlined" color="success" label={filter.name} />
				</Box>
			))
		}




	</Suspense>
  );
}

export async function getServerSideProps() {
  const data = await WoltApiFetch();

  return {
    props: {
      data,
    },
  };
}

export default MyComponent;