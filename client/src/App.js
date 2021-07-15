import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ClipsPage from './components/ClipsPage/ClipsPage';
import FriendsClipsPage from './components/FriendsClipsPage/FriendsClipsPage';
import Gallery from './components/Gallery/Gallery';
import Upload from './components/Upload/Upload';
import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact render={routeProps => <Home  {...routeProps} />} />
          <Route path='/clips' exact component={ClipsPage} />
          <Route path='/friendsclips' exact component={FriendsClipsPage} />
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/upload' exact component={Upload} />
        </Switch>
      </div>
    );
  }
}

export default App;
