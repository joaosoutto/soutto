import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import About from './Pages/about/About';
import Contact from './Pages/contact/Contact';
import Home from './Pages/home/Home';
import Projects from './Pages/projects/Projects';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={Projects} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
