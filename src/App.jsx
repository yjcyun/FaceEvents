import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventDetailPage from './pages/EventDetailPage';
import NavBar from './components/NavBar';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <>
      <NavBar />
      <Container className='main'>
        <Route exact path='/' component={HomePage} />
        <Route path='/events/:id' component={EventDetailPage} />
      </Container>
    </>
  );
}

export default App;