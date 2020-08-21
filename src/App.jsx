import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import HomePage from './pages/HomePage';
import EventDetailPage from './pages/EventDetailPage';
import NavBar from './components/Navbar/NavBar';
import CreateEventPage from './pages/CreateEventPage';

function App() {
  return (
    <>
      <NavBar />
      <Container className='main'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/events/create-event' component={CreateEventPage} />
          <Route path='/events/:id' component={EventDetailPage} />
        </Switch>
      </Container>
    </>
  );
}

export default App;