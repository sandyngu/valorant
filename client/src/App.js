import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Clips from './components/Clips/Clips';
import Gallery from './components/Gallery/Gallery';
import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact component={Header} />
          <Route path='/clips' component={Clips} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/' component={Header} />
        </Switch>
      </div>
    );
  }
}

export default App;
