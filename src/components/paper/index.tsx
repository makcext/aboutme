// import { Container } from "@mui/material";
import {  Paper, Typography } from "@mui/material";
import React from "react";

function PaperMid() {

return (
	<div>
		<Paper elevation={3} sx={{ p: 2, margin: 'auto', maxWidth: '500', flexGrow: 1 }}>
			<Typography variant="h2" component="div">OBj</Typography>
		</Paper>
</div>

);
}

export default PaperMid;
