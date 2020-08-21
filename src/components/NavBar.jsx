import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src='/assets/logo.png' alt='logo' style={{marginRight:'1rem'}}/>
          FaceEvents
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events/create-event'>
          Create Event
        </Menu.Item>
        <Menu.Item position='right'>
          Login
        </Menu.Item>
        <Menu.Item >
          Register
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default NavBar