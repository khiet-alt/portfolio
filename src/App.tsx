import React from 'react';
import './App.scss';
// components
import Particles from './components/Particles'
import LeftBar from './components/LeftBar';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import About from './components/About';
// React router
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const portfolio = () => (
  <Portfolio />
)

function App() {
  const [ selected, setSelected ] = React.useState('home')

  return (      
    <BrowserRouter>
      <Particles />
      <div className="app">
        <LeftBar
          selected={selected} setSelected={setSelected}
          />
        <div className="sections">
          <Switch>
            <Route exact path="/intro" 
              component={() => <Intro setSelected={setSelected} />} />
            <Route exact path="/portfolio" component={portfolio} />
            <Route exact path="/skills" 
              component={() => <Skills setSelected={setSelected} />} />
            <Route exact path="/about" component={() => <About />} />
            <Redirect to="/intro" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
