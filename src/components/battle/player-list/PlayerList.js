import React, { Component } from "react"
import PlayerInput from "./PlayerInput"
import PlayerPreview from "../PlayerPreview"
import { Button, Toolbar, Typography } from "@material-ui/core"
import FightButton from "../FightButton"
import { compose, withStateHandlers, lifecycle, withProps } from "recompose"
import * as R from "ramda"
import { Link } from "react-router-dom"
import uid from "uid"
const log = R.tap(console.log)

const PlayerList = ({ players, handleSubmit, handleReset }) => {
	// console.log(userNames)
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				flexWrap: "wrap"
			}}>
			{R.addIndex(R.map)(
				({ id, submitted, image, username }, i) =>
					submitted === false ? (
						<PlayerInput
							id={id}
							label={`Player ${i + 1}`}
							onSubmit={handleSubmit}
						/>
					) : (
						<PlayerPreview
							avatar={image}
							username={username}
							onHandleReset={handleReset}
							id={id}
						/>
					)
			)(players)}
		</div>
	)
}

export default PlayerList
