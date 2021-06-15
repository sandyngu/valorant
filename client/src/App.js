import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' render={routeProps => <Header {...routeProps}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
