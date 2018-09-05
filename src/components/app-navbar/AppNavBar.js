import React from "react"
import PropTypes from "prop-types"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import NavBarLink from "./NavBarLink"
import { NavLink } from "react-router-dom"

const AppNavBar = () => {
	return (
		<div>
			<AppBar position="static">
				<Toolbar
					style={{
						display: "flex",
						width: 300,
						justifyContent: "space-around"
					}}>
					<NavBarLink name="Home" where="/" />
					<NavBarLink name="Battle" where="/battle" />
					<NavBarLink name="Popular" where="/popular" />
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default AppNavBar
