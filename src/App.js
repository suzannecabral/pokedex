import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Monster from "./components/Monster";

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
	return (
		<div>
			<AppBar enableColorOnDark>{appBarLabel("Pokedex")}</AppBar>
			{/* Blank toolbar: see MUI docs, bumps page content out from behind app bar. */}
			<Toolbar />
			<Monster />
			<Monster />
			<Monster />
		</div>
	);
}

export default App;
