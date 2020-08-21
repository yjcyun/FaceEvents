import React from 'react'
import { Menu, Button, Image, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const SignedInMenu = ({signout}) => {
  return (
    <Menu.Item position='right'>
      <Image avatar space='right' src='/assets/user.png' />
      <Dropdown pointing='top left' text='Mars'>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to='/events/create-event'
            text='Create Event'
            icon='plus'
          />
          <Dropdown.Item
            text='My Profile'
            icon='user'
          />
          <Dropdown.Item
            text='Sign Out'
            icon='power'
            onClick={signout}
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  )
}

export default SignedInMenu