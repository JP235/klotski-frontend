import React from "react";
import { Grid, Button, ButtonGroup, Typography } from "@mui/material";

const Navbar = () => {
	return (
		<nav className="Navbar">
			<Grid container spacing={2}>
				<Grid item xs={12} align="center">
					<Typography variant="h3" compact="h3">
						KLOTSKI!!
					</Typography>
				</Grid>
				<Grid item xs={12} align="center">
					<ButtonGroup
						disableElevation
						variant="contained"
						color="secondary"
						size="small"
						fullWidth={true}
					>
						{/* <Button color="primary" href="/">
							Home
						</Button> */}
						<Button color="secondary" href="/custom">
							Custom Game
						</Button>
						{/* <Button color="primary" href="/listgames">
							Saved Games
						</Button> */}
						<Button color="primary" href="/opengames">
							Open Games
						</Button>
						{/* <Button color="primary" href="/game/classic">
							Classic Game
						</Button> */}
						<Button color="secondary" href="/random">
							Random Game
						</Button>
					</ButtonGroup>
				</Grid>
			</Grid>
		</nav>
	);
};

export default Navbar;
