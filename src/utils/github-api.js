import axios from 'axios'
import Alert from 'react-s-alert'

// Documentation is at https://developer.github.com/v3/
const BASE_URL = 'https://api.github.com'

export { getRepos, getUserData }

const reportError = msg =>
  Alert.error(msg, {
    position: 'top-right',
    timeout: 5000
  })

function getRepos(username) {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`
  return axios
    .get(url)
    .then(({ data }) => data)
    .catch(({ response }) => {
      reportError(response.data.message)
      return {}
    })
}

function getUserData(username) {
  return axios
    .all([
      axios.get(`${BASE_URL}/users/${username}`),
      axios.get(`${BASE_URL}/users/${username}/orgs`)
    ])
    .then(([user, orgs]) => ({
      user: user.data,
      orgs: orgs.data
    }))
    .catch(({ response }) => {
      reportError(response.data.message)
      return []
    })
}
