import R from "ramda"
const log = R.tap(console.log)

const handleError = error => {
	console.warn(error)
	return null
}

const getProfile = async username => {
	const profile = await fetch(`https://api.github.com/users/${username}`)
	return profile.json()
}
const getRepos = async username => {
	const repos = await fetch(`https://api.github.com/users/${username}/repos`)
	return repos.json()
}

const getData = async player => {
	const [profile, repos] = await Promise.all([
		getProfile(player),
		getRepos(player)
	])
	return {
		profile,
		repos
	}
}

const getFolowers = R.pipe(
	R.prop("profile"),
	R.prop("followers")
)
const getStars = R.pipe(
	R.prop("repos"),
	R.map(n => n.stargazers_count),
	R.reduce(R.add, 0)
)

const calcScore = (x, y) => ({
	score: x * 3 + y
})

const getAllProfilesAndRepos = async players =>
	await Promise.all(R.map(getData, players))
const getScore = R.converge(calcScore, [x => getFolowers(x), x => getStars(x)])
const withScore = R.converge(R.merge, [x => getScore(x), x => x])
const getAllWithScore = R.map(withScore)
const getAllSortedByScore = R.sortWith([R.descend(R.prop("score"))])

export const sortAllPlayers = R.pipeP(
	getAllProfilesAndRepos,
	getAllWithScore,
	getAllSortedByScore
)

export const fetchPopularRepos = async language => {
	const url = `https://api.github.com/search/repositories?q=>1+language:${language}&sort=stars&order=desc`
	const response = await fetch(url).catch(handleError)
	const repos = await response.json()
	return repos.items
}

// const getProfile = async username => {
// 	const resp = await fetch(`https://api.github.com/users/${username}`)
// 	return resp.json()
// }

// const getRepos = async username => {
// 	const resp = await fetch(`https://api.github.com/users/${username}/repos`)
// 	return resp.json()
// }

// const getStarCount = repos => {
// 	return repos.reduce(
// 		(count, { stargazers_count }) => count + stargazers_count,
// 		0
// 	)
// }

// const calculateScore = (profile, repos) => {
// 	const followers = profile.followers
// 	const totalStars = getStarCount(repos)
// 	return followers * 3 + totalStars
// }

// const handleError = error => {
// 	console.warn(error)
// 	return null
// }

// const getUserData = async player => {
// 	const [profile, repos] = await Promise.all([
// 		getProfile(player),
// 		getRepos(player)
// 	])
// 	return {
// 		profile,
// 		score: calculateScore(profile, repos)
// 	}
// }

// const sortPlayers = players => {
// 	const byScore = R.descend(R.prop("score"))
// 	return R.sort(byScore, players)
// }

// export const battle = async players => {
// 	const playersArray = await Promise.all(players.map(getUserData)).catch(
// 		handleError
// 	)
// 	console.log(playersArray)
// 	return playersArray === null ? playersArray : sortPlayers(playersArray)
// }
// export const fetchPopularRepos = async language => {
// 	const url = `https://api.github.com/search/repositories?q=>1+language:${language}&sort=stars&order=desc`
// 	const response = await fetch(url).catch(handleError)
// 	const repos = await response.json()
// 	return repos.items
// }
