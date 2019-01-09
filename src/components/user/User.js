import React from 'react'
import './User.scss'

const User = ({ avatar_url, bio, name, location }) => (
  <div className='user-info'>
    <img className='avatar' src={avatar_url} alt={name} />
    <div className='user-meta'>
      <h2 className='name'>{name}</h2>
      {location && <h3 className='location'>{location}</h3>}
      {bio && <p className='bio'>{bio}</p>}
    </div>
  </div>
)

export default User
