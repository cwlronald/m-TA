import React, {useState} from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Raffle from './components/Raffle'
import NavigationBar from './components/Navbar'
import { Container } from 'react-bootstrap';



function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Container>
        <Switch>
          <Route path='/' exact>
            <Raffle/>
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
