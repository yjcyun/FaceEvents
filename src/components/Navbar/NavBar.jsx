import React, { useState } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'
import { NavLink, Link, useHistory } from 'react-router-dom'
import SignedOutMenu from './SignedOutMenu'
import SignedInMenu from './SignedInMenu'

const NavBar = () => {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);

  const handleSignOut = () => {
    setAuthenticated(false);
    history.push('/');
  }
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: '1rem' }} />
          FaceEvents
        </Menu.Item>
        {authenticated
          ? <Menu.Item as={Link} to='/events/create-event'>
            <Button inverted content='Create Event' />
          </Menu.Item>
          : null
        }

        {authenticated
          ? <SignedInMenu signout={handleSignOut} />
          : <SignedOutMenu setAuthenticated={setAuthenticated} />
        }
      </Container>
    </Menu>
  )
}

export default NavBar