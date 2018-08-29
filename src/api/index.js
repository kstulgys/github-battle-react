import data from "./helpers"
import * as R from "ramda"
const log = R.tap(console.log)

export const sortAllPlayers = R.pipeP(
	data.getAllProfilesAndRepos,
	data.getAllWithScore,
	data.getAllSortedByScore
)

export const fetchPopularRepos = data.getPopularRepos
