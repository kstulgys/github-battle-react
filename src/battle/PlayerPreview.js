import React from "react"
import PropTypes from "prop-types"
import { Button, Avatar, Typography } from "@material-ui/core"
import ResetButton from "./ResetButton"

const PlayerPreview = props => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center"
			}}>
			<Avatar
				alt="Adelle Charles"
				src={props.avatar}
				style={{ height: 200, width: 200 }}
			/>
			<Typography variant="headline">{props.username}</Typography>
			<ResetButton player={props.player} onHandleReset={props.onHandleReset} />
		</div>
	)
}

export default PlayerPreview
