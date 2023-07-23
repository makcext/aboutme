import { Container } from "@mui/material";
import { Skeleton } from "@mui/material";
import React from "react";

function LoadSkeleton() {

return (
	<div>
		<Container maxWidth="lg" sx={{ minWidth: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
		</Container>
</div>

);
}

export default LoadSkeleton;
