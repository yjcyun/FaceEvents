import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventDetailPage from './pages/EventDetailPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/events/:id' component={EventDetailPage} />
      </Switch>
    </>
  );
}

export default App;