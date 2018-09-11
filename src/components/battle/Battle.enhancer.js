import React, { Component } from "react"
import { Button, Toolbar, Typography } from "@material-ui/core"
import FightButton from "./FightButton"
import PlayerList from "./player-list/PlayerList"
import { compose, withStateHandlers, lifecycle, withProps } from "recompose"
import * as R from "ramda"
import { Link } from "react-router-dom"
import uid from "uid"
const log = R.tap(console.log)

const updatePlayer = (_id, _updates, _players) =>
	R.map(R.ifElse(R.propEq("id", _id), R.evolve(_updates), R.identity))(_players)

const initialState = {
	players: [
		{ id: "abcde", submitted: false, username: "", image: null },
		{ id: "fghiy", submitted: false, username: "", image: null }
	]
}

const withUserNames = withProps(props => ({
	userNames: R.pipe(
		R.filter(x => x.username),
		R.map(x => x.username)
	)(props.players)
}))

const handleState = withStateHandlers(initialState, {
	handleReset: props => id => {
		const updates = {
			username: x => "",
			image: x => null,
			submitted: x => !x
		}
		const players = updatePlayer(id, updates, props.players)
		return { players }
	},
	handleSubmit: props => (id, username) => {
		const updates = {
			username: x => username,
			image: x => `https://github.com/${username}.png?size=200`,
			submitted: x => !x
		}
		const players = updatePlayer(id, updates, props.players)
		return { players }
	},
	handleAddPlayer: props => () => {
		const newPlayer = { id: uid(), submitted: false, username: "", image: null }
		return {
			players: [...props.players, newPlayer]
		}
	}
})

export default compose(
	handleState,
	withUserNames
)
