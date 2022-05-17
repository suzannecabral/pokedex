import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Pokecard from "./components/Pokecard";

function appBarLabel(label) {
	return (
		<Toolbar>
			<IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
				<MenuIcon />
			</IconButton>
			<Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
				{label}
			</Typography>
		</Toolbar>
	);
}

function App() {
	const [pokeList, setPokeList] = React.useState([]);

	const getPokeList = React.useCallback(
		() => {
			console.log(
				"Please relearn useEffect, what exactly should be inside the callback?"
			);
			// pokeList.map is not a function
			// fetch("https://pokeapi.co/api/v2/pokemon-species/")
			// 	.then((res) => res.json())
			// 	.then(setPokeList)
			// 	.finally(console.log(pokeList));
		},
		[
			/*pokeList, setPokeList*/
		]
	);

	React.useEffect(() => {
		getPokeList();
	}, [pokeList, getPokeList]);

	return (
		<div>
			<AppBar enableColorOnDark>{appBarLabel("Pokedex")}</AppBar>
			{/* Blank toolbar: see MUI docs, bumps page content out from behind app bar. */}
			<Toolbar />
			{pokeList &&
				pokeList.map((pokemon) => {
					<Pokecard pokemon={pokemon} />;
				})}
		</div>
	);
}

export default App;
