import logo from './logo.svg';
import './App.css';

import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
    <h3 className="m-3 d-flex justify-content-center">
    Esto es una pagina web desarrollada en react(Front-end) y django(Back-end)
    </h3>

    <Navigation/>

    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/department' component={Department}/>
      <Route path='/employee' component={Employee}/>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;