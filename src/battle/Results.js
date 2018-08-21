import React, { Component } from "react"
import { sortAllPlayers } from "../utils/api"
import { Link } from "react-router-dom"
import PlayerPreview from "./PlayerPreview"
import Player from "./Player"
import Loader from "../common/Loader"
import ResultsError from "./ResultsError"
import { Button, Toolbar, Typography } from "@material-ui/core"

class Results extends Component {
	state = {
		winner: null,
		loser: null,
		error: null,
		loading: true
	}

	componentDidMount() {
		let { playerTwoName, playerOneName } = this.props.location.state
		sortAllPlayers([playerOneName, playerTwoName]).then(results => {
			results == null
				? this.setState({
						error:
							"Looks like there was an error. Make sure that both users are on Github.",
						loading: false
				  })
				: this.setState({
						error: null,
						winner: results[0],
						loser: results[1],
						loading: false
				  })
		})
	}
	render() {
		const { winner, loser, error, loading } = this.state

		if (loading === true) {
			return <Loader />
		}
		if (error) {
			return <ResultsError error={error} />
		}

		return (
			<div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-around",
						marginTop: "20vh"
					}}>
					<Player
						label="Winner"
						score={winner.score}
						profile={winner.profile}
					/>
					<Player label="Loser" score={loser.score} profile={loser.profile} />
				</div>
				<div style={{ textAlign: "center", padding: 30 }}>
					<Button onClick={() => this.props.history.push("/battle")}>
						Reset
					</Button>
				</div>
			</div>
		)
	}
}

export default Results
