import React from 'react'
import './Organization.scss'

const Organization = ({ login, description }) => (
  <div className='organization'>
    <h3 className='login'>{login}</h3>
    <p className='description'>
      {description ? description : 'No description'}
    </p>
  </div>
)

export default Organization
