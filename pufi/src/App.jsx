import React from 'react'

import Instagram from './components/Instagram';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Footer from './components/Footer';
import Form from './components/Form'

import PufiRain from './routes/PufiRain'
import PufiPuff from './routes/PufiPuff';
import PufiCart from './routes/PufiCart';
import PufiNap from './routes/PufiNap';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div >   
          <Switch>

            <Route path="/" exact>
              <Navbar/>       
              <Main/>       
              <Shop/>
              <Instagram/>  
              <Form/>
              <Footer/>
            </Route>  

            <Route path="/PufiRain">
              <PufiRain/>
            </Route> 

            <Route path="/PufiPuff">
              <PufiPuff/>
            </Route>  

            <Route path="/PufiCart">
              <PufiCart/>
            </Route>

            <Route path="/PufiNap">
              <PufiNap/>
            </Route> 

          </Switch>      
      </div>
    </Router>
  );
}

export default App;
