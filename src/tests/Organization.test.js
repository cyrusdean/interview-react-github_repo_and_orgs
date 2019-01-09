import React from 'react'
import ReactDOM from 'react-dom'
import Organization from '@components/organization/Organization'

it('creates a Organization', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Organization />, div)
  ReactDOM.unmountComponentAtNode(div)
})
