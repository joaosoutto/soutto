import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import Home from './Pages/home/Home';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
