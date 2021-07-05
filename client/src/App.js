import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import ClipsPage from './components/ClipsPage/ClipsPage';
import FriendsClipsPage from './components/FriendsClipsPage/FriendsClipsPage';
import Gallery from './components/Gallery/Gallery';
import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        {/* <Body /> */}
        <Switch>
          <Route path='/' exact render={routeProps => <Header  {...routeProps} />} />
          <Route path='/clips' exact component={ClipsPage} />
          <Route path='/friendsclips' exact component={FriendsClipsPage} />
          <Route path='/gallery' exact component={Gallery} />
        </Switch>
      </div>
    );
  }
}

export default App;
