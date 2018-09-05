import React, { Fragment } from "react"
import PropTypes from "prop-types"
import {
	compose,
	withStateHandlers,
	lifecycle,
	renderNothing,
	branch,
	renderComponent,
	withHandlers,
	mapProps,
	renameProp
} from "recompose"
import { Avatar } from "@material-ui/core"
import Loader from "../common/Loader"
import * as R from "ramda"
const log = R.tap(console.log)

const Repo = ({
	owner: { login, avatar_url },
	name,
	html_url,
	stargazers_count
}) => {
	// console.log("got here", name)
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				width: 150,
				height: 200
			}}>
			<Avatar
				alt="Adelle Charles"
				src={avatar_url}
				style={{ height: 100, width: 100 }}
			/>
			<div href={html_url}>{name}</div>
			<div>@{login}</div>
			<div>{stargazers_count} stars</div>
		</div>
	)
}

const ReposBase = ({ repos }) => (
	<div
		style={{
			width: "80%",
			display: "flex",
			flexWrap: "wrap",
			justifyContent: "space-around"
		}}>
		{repos}
	</div>
)

// Recompose...

const loaderIfNoData = branch(
	R.propSatisfies(R.isEmpty, "repos"),
	renderComponent(Loader)
)

const mapToRepos = mapProps(
	R.evolve({
		repos: R.map(Repo)
	})
)

export default compose(
	loaderIfNoData,
	mapToRepos
)(ReposBase)
