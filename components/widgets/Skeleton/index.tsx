"use client"
import React from "react";
import { Container } from "@mui/material";
import { Skeleton } from "@mui/material";


// import ReactJson from "react-json-view";

const LoadSkeleton = () => {



	return (
		<>
			<Container maxWidth="lg" sx={{ minWidth: 300 }}>

				<Skeleton />
				<Skeleton animation="wave" />
				<Skeleton animation={false} />
			</Container>
		</>

	);
}





export default LoadSkeleton;
