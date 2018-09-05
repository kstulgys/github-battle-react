import React, { Component } from "react"
import { sortAllPlayers } from "../../../api"
import { Link } from "react-router-dom"
import PlayerPreview from "../PlayerPreview"
import Player from "./Player"
import Loader from "../../common/Loader"
import ResultsError from "../../common/ResultsError"
import { Button, Toolbar, Typography } from "@material-ui/core"
import * as R from "ramda"

class Results extends Component {
	state = {
		error: null,
		loading: true,
		results: ""
	}

	componentDidMount() {
		let { userNames } = this.props.location.state
		sortAllPlayers(userNames).then(results => {
			results == null
				? this.setState({
						error:
							"Looks like there was an error. Make sure that both users are on Github.",
						loading: false
				  })
				: this.setState({
						error: null,
						loading: false,
						results: results
				  })
		})
	}
	render() {
		const { error, loading, results } = this.state
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
						justifyContent: "center",
						paddingTop: "10%"
					}}>
					{R.map(({ score, profile }) => (
						<Player score={score} profile={profile} />
					))(results)}
				</div>
				<div style={{ textAlign: "center", margin: 30 }}>
					<Button onClick={() => this.props.history.push("/battle")}>
						Reset
					</Button>
				</div>
			</div>
		)
	}
}

export default Results
