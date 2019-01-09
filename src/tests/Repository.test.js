import React from 'react'
import ReactDOM from 'react-dom'
import Repository from '@components/repository/Repository'

it('creates a repository', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Repository />, div)
  ReactDOM.unmountComponentAtNode(div)
})
