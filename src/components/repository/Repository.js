import React from 'react'
import './Repository.scss'

const Repository = ({ name, description, language }) => (
  <div className='repository'>
    <div className='repository-meta'>
      <h3 className='name'>{name}</h3>
      <span className='language'>{language}</span>
    </div>
    <p className='description'>
      {description ? description : 'No description'}
    </p>
  </div>
)

export default Repository
