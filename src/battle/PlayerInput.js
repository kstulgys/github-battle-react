import React, { Component } from "react"
import {
	InputLabel,
	FormControl,
	Typography,
	Input,
	Button
} from "@material-ui/core"

class PlayerInput extends Component {
	state = {
		username: "",
		submitted: false
	}

	handleChange = e => {
		// console.log('username', e.target.value)
		this.setState({ username: e.target.value })
	}

	handleSubmit = event => {
		event.preventDefault()
		this.props.onSubmit(this.props.id, this.state.username)
		this.setState({ submitted: true })
		// console.log('submitting')
	}

	render() {
		return (
			<div style={{ padding: 15 }}>
				<form onSubmit={this.handleSubmit}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "space-around",
							minHeight: 200,
							border: "1px solid red"
						}}>
						<Typography variant="title" gutterBottom>
							{this.props.label}
						</Typography>

						<FormControl>
							<InputLabel>gitHub Username</InputLabel>
							<Input
								value={this.state.username}
								type="text"
								onChange={this.handleChange}
							/>
						</FormControl>
						<Button
							variant="contained"
							color="primary"
							type="submit"
							disabled={!this.state.username}>
							Submit
						</Button>
					</div>
				</form>
			</div>
		)
	}
}

export default PlayerInput
