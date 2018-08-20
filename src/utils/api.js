import R from 'ramda'

const getProfile = async username => {
  const response = await fetch(`https://api.github.com/users/${username}`)
  return response.json()
}

const getRepos = async username => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`)
  return response.json()
}

const getStarCount = repos => {
  console.log(repos)

  return repos.reduce(
    (count, { stargazers_count }) => count + stargazers_count,
    0
  )
}

const calculateScore = (profile, repos) => {
  const followers = profile.followers
  const totalStars = getStarCount(repos)

  return followers * 3 + totalStars
}

const handleError = error => {
  console.warn(error)
  return null
}

const getUserData = async player => {
  const [profile, repos] = await Promise.all([
    getProfile(player),
    getRepos(player)
  ])

  return {
    profile,
    score: calculateScore(profile, repos)
  }
}

const sortPlayers = players => {
  const byScore = R.descend(R.prop('score'))
  return R.sort(byScore, players)
}

export const battle = async players => {
  const playersArray = await Promise.all(players.map(getUserData)).catch(
    handleError
  )
  return playersArray === null ? playersArray : sortPlayers(playersArray)
}
export const fetchPopularRepos = async language => {
  const url = `https://api.github.com/search/repositories?q=>1+language:${language}&sort=stars&order=desc`
  const response = await fetch(url).catch(handleError)
  const repose = await response.json()
  return repose.items
}

// const gitUserData = R.pipe(
//   getProfile,
//   getRepos,
//   getStars,
//   calcScore
// )

// const user1 = gitUserData(player[0])
// const user2 = gitUserData(player[1])

// const playersData = [user1, user2]

// const winnerLooser = () =>
//   R.pipe(
//     R.descend(R.prop('score')),
//     R.sort
//   )(playersData)
