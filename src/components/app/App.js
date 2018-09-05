import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import Popular from "../popular"
import AppNavBar from "../app-navbar"
import Home from "../home"
import Battle from "../battle"
import Results from "../battle/results/Results"
import { CssBaseline } from "@material-ui/core"

import {
	BrowserRouter as Router,
	Route,
	NavLink,
	Link,
	Switch
} from "react-router-dom"

class App extends Component {
	render() {
		return (
			<div>
				<CssBaseline />
				<Router>
					<div>
						<AppNavBar />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/battle" component={Battle} />
							<Route path="/battle/results" component={Results} />
							<Route path="/popular" component={Popular} />
							<Route render={() => <p>Nothing Was Found :(</p>} />
						</Switch>
					</div>
				</Router>
			</div>
		)
	}
}

export default App
