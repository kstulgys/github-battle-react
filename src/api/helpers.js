import * as R from "ramda"
const log = R.tap(console.log)

const Impure = {
	getData: async username => {
		const getProfile = async username => {
			const profile = await fetch(`https://api.github.com/users/${username}`)
			return profile.json()
		}
		const getRepos = async username => {
			const repos = await fetch(
				`https://api.github.com/users/${username}/repos`
			)
			return repos.json()
		}
		const [profile, repos] = await Promise.all([
			getProfile(username),
			getRepos(username)
		])
		return {
			profile,
			repos
		}
	},
	getAllProfilesAndRepos: async players => await Promise.all(players),
	getPopularRepos: async language => {
		const url = `https://api.github.com/search/repositories?q=>1+language:${language}&sort=stars&order=desc`
		const response = await fetch(url).catch(handleError)
		const repos = await response.json()
		return repos.items
	}
}

const getFolowers = R.path(["profile", "followers"])
const getStars = R.pipe(
	R.prop("repos"),
	R.map(n => n.stargazers_count),
	R.reduce(R.add, 0)
)
const calcScore = (x, y) => ({
	score: x * 3 + y
})
const getScore = R.converge(calcScore, [getFolowers, getStars])
const withScore = R.converge(R.merge, [x => getScore(x), x => x])

const data = {
	getAllWithScore: R.pipe(
		R.map(withScore),
		R.map(R.omit(["repos"]))
	),
	getAllProfilesAndRepos: R.pipe(
		R.map(Impure.getData),
		Impure.getAllProfilesAndRepos
	),
	getPopularRepos: Impure.getPopularRepos,
	handleError: error => {
		console.warn(error)
		return null
	},
	getAllSortedByScore: R.sortWith([R.descend(R.prop("score"))])
}

export default data
