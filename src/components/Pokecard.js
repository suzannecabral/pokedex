import React from "react";
import { Typography } from "@mui/material";

function Pokecard(pokemon) {
	return (
		<div>
			<Typography variant="h4">{pokemon.name}</Typography>
			<Typography variant="h5">Type:</Typography>
		</div>
	);
}

export default Pokecard;
