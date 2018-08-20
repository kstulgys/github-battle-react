import React, { Component } from "react"
import PlayerInput from "./PlayerInput"
import PlayerPreview from "./PlayerPreview"
import { Button, Toolbar, Typography } from "@material-ui/core"
import FightButton from "./FightButton"
import ResetButton from "./ResetButton"

import { Link } from "react-router-dom"

class Battle extends Component {
	constructor(props) {
		super()
		this.state = {
			playerOneName: "",
			playerTwoName: "",
			playerOneImage: null,
			playerTwoImage: null
		}
	}

	handleSubmit = (id, username) => {
		console.log("submitting from Battle")
		let newState = {}
		newState[id + "Name"] = username
		newState[id + "Image"] = `https://github.com/${username}.png?size=200`
		this.setState(newState)
	}

	handleReset = id => {
		this.setState({
			[id + "Name"]: "",
			[id + "Image"]: null
		})
	}

	render() {
		const match = this.props.match
		const playerOneName = this.state.playerOneName
		const playerTwoName = this.state.playerTwoName
		const playerOneImage = this.state.playerOneImage
		const playerTwoImage = this.state.playerTwoImage

		return (
			<div
				style={{
					height: "100vh",
					// border: '1px solid blue',
					display: "flex",
					flexDirection: "column",
					justifyContent: "center"
				}}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-around",
						alignContent: "center"
					}}>
					<div>
						{!playerOneName && (
							<PlayerInput
								id="playerOne"
								label="Player One"
								onSubmit={this.handleSubmit}
							/>
						)}

						{playerOneImage && (
							<div>
								<PlayerPreview
									avatar={playerOneImage}
									username={playerOneName}
									onHandleReset={this.handleReset}
									player="playerOne"
								/>
							</div>
						)}
					</div>

					<div>
						{!playerTwoName && (
							<PlayerInput
								id="playerTwo"
								label="Player Two"
								onSubmit={this.handleSubmit}
							/>
						)}

						{playerTwoImage && (
							<div>
								<PlayerPreview
									avatar={playerTwoImage}
									username={playerTwoName}
									onHandleReset={this.handleReset}
									player="playerTwo"
								/>
							</div>
						)}
					</div>
				</div>
				<div>
					<FightButton {...this.state} match={match} />
				</div>
			</div>
		)
	}
}

export default Battle
