import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

const SignedOutMenu = ({ setAuthenticated }) => {
  return (
    <Menu.Item position='right'>
      <Button
        inverted
        content='Login'
        onClick={() => setAuthenticated(true)}
      />
      <Button
        inverted
        content='Register'
        style={{ marginLeft: '0.5rem' }}
      />
    </Menu.Item>
  )
}

export default SignedOutMenu
