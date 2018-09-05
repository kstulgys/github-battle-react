import React from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import { Typography } from "@material-ui/core"

export default ({ name, where }) => (
	<Typography variant="title" type="title">
		<NavLink
			exact
			to={where}
			style={{
				color: "#ffffff",
				textDecoration: "none"
			}}
			activeStyle={{ fontSize: 30 }}>
			{name}
		</NavLink>
	</Typography>
)
