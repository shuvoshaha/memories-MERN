import React from 'react'
import './App.css';
import { Container } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './conponents/Navbar/Navbar';
import Home from './conponents/Home/Home';
import Auth from './conponents/Auth/Auth';


function App() {

  return (
    <Container maxWidth="lg">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      
    </Container>
  );
}

export default App;
