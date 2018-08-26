import * as R from 'ramda'
const log = R.tap(console.log)

export const handleError = error => {
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
  const [profile, repos] = await Promise.all([getProfile(player), getRepos(player)])
  return {
    profile,
    repos
  }
}

const getFolowers = R.path(['profile', 'followers'])

const getStars = R.pipe(
  R.prop('repos'),
  R.map(n => n.stargazers_count),
  R.reduce(R.add, 0)
)

const calcScore = (x, y) => ({
  score: x * 3 + y
})

export const getAllProfilesAndRepos = async players =>
  await Promise.all(R.map(getData, players))
const getScore = R.converge(calcScore, [getFolowers, getStars])
const withScore = R.converge(R.merge, [x => getScore(x), x => x])
export const getAllWithScore = R.pipe(
  R.map(withScore),
  R.map(R.omit(['repos']))
)
export const getAllSortedByScore = R.sortWith([R.descend(R.prop('score'))])
