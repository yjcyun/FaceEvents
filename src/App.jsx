import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Route, Switch, useLocation } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import HomePage from './pages/HomePage';
import EventDetailPage from './pages/EventDetailPage';
import NavBar from './components/Navbar/NavBar';
import CreateEventPage from './pages/CreateEventPage';

function App() {
  const { key } = useLocation();
  
  return (
    <>
      <NavBar />
      <Container className='main'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path={['/events/create-event', '/manage/:id']} component={CreateEventPage} key={key} />
          <Route path='/events/:id' component={EventDetailPage} />
        </Switch>
      </Container>
    </>
  );
}

export default App;