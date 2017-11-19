const axios = require('axios')


module.exports = {
  fetchPopularRepos: function (language) {
    let encodedUrl = window.encodeURI(`https://api.github.com/search/repositories?q=>1+language:${language}&sort=stars&order=desc`)
  
    return axios.get(encodedUrl)
      .then(response => {
        return response.data.items
      })
  }
}