import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import Popular from "../popular"
import AppBar from "./Appbar"
import Home from "../home"
import Battle from "../battle"
import Results from "../battle/Results"
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
			<Fragment style={{ height: "100%", width: "100%", overflowX: "hidden" }}>
				<CssBaseline />
				<Router>
					<div>
						<AppBar />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/battle" component={Battle} />
							<Route path="/battle/results" component={Results} />
							<Route path="/popular" component={Popular} />
							<Route render={() => <p>Not Found :(</p>} />
						</Switch>
					</div>
				</Router>
			</Fragment>
		)
	}
}

export default App
