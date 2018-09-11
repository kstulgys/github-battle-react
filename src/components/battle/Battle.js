import React from "react"
import { Button } from "@material-ui/core"
import FightButton from "./FightButton"
import PlayerList from "./player-list/PlayerList"
import enhance from "./Battle.enhancer"

const Battle = ({
	match,
	handleAddPlayer,
	handleReset,
	handleSubmit,
	players,
	userNames
}) => {
	console.log(userNames)
	return (
		<div
			style={{
				height: "100%",
				paddingTop: "10vh"
			}}>
			<PlayerList
				players={players}
				handleSubmit={handleSubmit}
				handleReset={handleReset}
			/>

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					margin: 20
				}}>
				<Button onClick={handleAddPlayer}>Add more players</Button>
				<FightButton match={match} userNames={userNames} />
			</div>
		</div>
	)
}

export default enhance(Battle)
