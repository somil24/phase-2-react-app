import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import userinput from './components/userinput';
import detection from './components/detection';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/userinput' component={userinput} />
          <Route path='/detection' component={detection} />

        </Switch>
      </Router>
    </>
  );
}

export default App;