const axios = require('axios')

const getProfile = username => {
  return axios
    .get(`https://api.github.com/users/${username}`)
    .then(function(user) {
      return user.data
    })
}

const getRepos = username => {
  return axios.get(`https://api.github.com/users/${username}/repos`)
}

const getStarCount = repos => {
  return repos.data.reduce(function(count, repo) {
    return count + repo.stargazers_count
  }, 0)
}

const calculateScore = (profile, repos) => {
  let followers = profile.followers
  let totalStars = getStarCount(repos)

  return followers * 3 + totalStars
}

const handleError = error => {
  console.warn(error)
  return null
}

const getUserData = async player => {
  const data = await axios.all([getProfile(player), getRepos(player)])
  const profile = data[0]
  const repos = data[1]

  return {
    profile: profile,
    score: calculateScore(profile, repos)
  }
}

const sortPlayers = players => {
  return players.sort(function(a, b) {
    return b.score - a.score
  })
}

module.exports = {
  battle: async players => {
    try {
      const usersData = await axios.all(players.map(getUserData))
      const sortedPlayers = await sortPlayers(usersData)
      return sortedPlayers
    } catch (e) {
      handleError(e)
    }
  },
  fetchPopularRepos: async language => {
    try {
      const url = await `https://api.github.com/search/repositories?q=>1+language:${language}&sort=stars&order=desc`
      const response = await axios.get(url)
      return response.data.items
    } catch (e) {
      handleError(e)
    }
  }
}

// export default api

// battle: async (players) => {
//   const usersData = await axios
//     .all(players.map(getUserData))
//     .then(sortPlayers)
//     .catch(handleError)
// },
