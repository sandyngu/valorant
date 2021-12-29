import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ClipsPage from './components/ClipsPage/ClipsPage';
import FriendsClipsPage from './components/FriendsClipsPage/FriendsClipsPage';
import AgentAnthems from './components/AgentAnthems/AgentAnthems';
import Gallery from './components/Gallery/Gallery';
import Upload from './components/Upload/Upload';
import Brim from './assets/audio/brimanthem.mp3'
import './App.css';

class App extends React.Component {
  
  render() {

    setTimeout(function() {
      var audio = document.getElementById("brimAudio");
      audio.volume = 0.05;
    }, 0);
    
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/' exact render={routeProps => <Home  {...routeProps} />} />
          <Route path='/clips' exact component={ClipsPage} />
          <Route path='/friendsclips' exact component={FriendsClipsPage} />
          <Route path='/agentanthems' exact component={AgentAnthems} />
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/upload' exact component={Upload} />
        </Switch>
        <audio /*autoPlay*/ className="audio" controls type="audio/ogg" src={Brim} id="brimAudio"/>
      </div>
    );
  }
}

export default App;
