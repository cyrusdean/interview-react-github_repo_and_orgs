import React from 'react'
import { FaTimes, FaArrowAltCircleRight } from 'react-icons/fa'
import logo from '@assets/github-logo.svg'
import './Header.scss'

const Header = ({ username, setUsername, fetchUserInfo }) => (
  <header className='search-header'>
    <div className='username-input-container'>
      <input
        className='username-input'
        value={username}
        onChange={({ target }) => setUsername(target.value)}
        onKeyPress={({ key }) => (key === 'Enter' ? fetchUserInfo() : null)}
        spellCheck='false'
      />

      <FaTimes
        className={'x-out-input' + (username ? ' active' : '')}
        onClick={() => setUsername('')}
      />
    </div>

    <button className='username-button' onClick={fetchUserInfo}>
      Search <FaArrowAltCircleRight className='right-arrow' />
    </button>

    <img src={logo} className='github-logo' alt='githublogo' />
  </header>
)

export default Header
