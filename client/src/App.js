import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Clips from './components/Clips/Clips';
import Gallery from './components/Gallery/Gallery';
import HomeBanner from './assets/images/val-banner-dark.png';
import ClipsBanner from './assets/images/val-banner2.jpg';
import GalleryBanner from './assets/images/ascent.png';
import SomethingBanner from './assets/images/ascent2.jpg';
import './App.css';

class App extends React.Component {

  state = {
    banner: HomeBanner,
    clipsPage: false,
    galleryPage: false,
    somethingPage: false
  }

  changeBanner = () => {
    if (this.state.clipsPage) {
      this.setState({
        banner: ClipsBanner
      }) 
    } else if (this.state.galleryPage) {
      this.setState({
        banner: GalleryBanner
      })
    } else if (this.state.somethingPage) {
      this.setState({
        banner: SomethingBanner
      })
    } else (
      this.setState({
        banner: HomeBanner
      })
    )
  }
  
  render() {
    return (
      <div className="App">
        <Body />
        <Switch>
          <Route path='/' exact render={routeProps => <Header  {...routeProps} changeBanner={this.changeBanner}/>} />
          <Route path='/clips' exact component={Clips} />
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/' exact component={Header} />
        </Switch>
      </div>
    );
  }
}

export default App;
