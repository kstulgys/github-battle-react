import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Button, Toolbar, Typography } from "@material-ui/core"

const ErrorComp = props => {
	return (
		<div>
			<Typography type="title" gutterBottom>
				{props.error}
			</Typography>
			<Button raised color="primary">
				<Link to="/battle">Reset</Link>
			</Button>
		</div>
	)
}

export default ErrorComp
