import React, { Component } from 'react'
import Alert from 'react-s-alert'

import { getRepos, getUserData } from '@utils/github-api'
import User from '@components/user/User'
import Repository from '@components/repository/Repository'
import Organization from '@components/organization/Organization'
import Header from '@components/header/Header'

import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/slide.css'
import '@styles/Vars.scss'
import '@styles/Base.scss'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      loading: false,
      repos: [],
      user: {},
      orgs: []
    }

    this.repoLimit = 5
    this.fetchUserInfo = this.fetchUserInfo.bind(this)
  }

  fetchUserInfo() {
    this.setState({ loading: true }, async () => {
      //   setTimeout(async () => {
      let repos = await getRepos(this.state.username)
      repos = repos.length ? repos.slice(0, this.repoLimit) : []

      const { user = {}, orgs = [] } = await getUserData(this.state.username)

      this.setState({ repos, user, orgs, loading: false })
      //   }, 10000)
    })
  }

  render() {
    const { user, username, repos, orgs, loading } = this.state

    return (
      <div className='app'>
        <Header
          username={username}
          setUsername={username => this.setState({ username })}
          fetchUserInfo={this.fetchUserInfo}
        />

        {Object.keys(user).length > 0 && (
          <main className='content'>
            <h1 className='heading'>User</h1>
            <User {...user} />

            <h1 className='heading'>Repositories</h1>
            {repos.length ? (
              repos.map(repo => <Repository {...repo} key={repo.id} />)
            ) : (
              <p>User doesn't have any repositories.</p>
            )}

            <h1 className='heading'>Organizations</h1>
            {orgs.length ? (
              orgs.map(org => <Organization {...org} key={org.id} />)
            ) : (
              <p>User doesn't have any organizations or they aren't public.</p>
            )}
          </main>
        )}

        {loading && (
          <div className='loading-container'>
            <span className='loading'>Loading...</span>
          </div>
        )}

        <Alert stack={{ limit: 1 }} />
      </div>
    )
  }
}

export default App
