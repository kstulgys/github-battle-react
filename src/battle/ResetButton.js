import React from "react"
import PropTypes from "prop-types"
import { Button, Avatar, Typography } from "@material-ui/core"
import { withRouter } from "react-router-dom"

const ResetButton = props => {
	const { pathname } = props.location

	return (
		<div>
			{pathname === "/battle" && (
				<Button
					color="primary"
					onClick={() => props.onHandleReset(props.player)}>
					Reset
				</Button>
			)}
		</div>
	)
}

export default withRouter(ResetButton)
