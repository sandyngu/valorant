import React from 'react';
import './header.scss';
import Navigation from '../Navigation/Navigation';
import HomeBanner from '../../assets/images/val-banner-dark.jpg';
import ClipsBanner from '../../assets/images/bind.jpg';
import GalleryBanner from '../../assets/images/valmap.png';
import SomethingBanner from '../../assets/images/split.jpg';

class Header extends React.Component {
    state = {
        banner: HomeBanner,
        homePage: false,
        clipsPage: false,
        galleryPage: false,
        somethingPage: false
    };
    
      // changeBanner() {
      //   if (this.state.clipsPage) {
      //     this.setState({
      //       banner: ClipsBanner
      //     }) 
      //     console.log('clips page!');
      //   } else if (this.state.galleryPage) {
      //     this.setState({
      //       banner: GalleryBanner
      //     })
      //     console.log('gallery page!');
      //   } else if (this.state.somethingPage) {
      //     this.setState({
      //       banner: SomethingBanner
      //     })
      //     console.log('something page!');
      //   } else {
      //     this.setState({
      //       banner: HomeBanner
      //     })
      //     console.log('home page!');
      //   }
      //   console.log(this.state.banner)
      // }

      changeHomeBanner = () => {
          this.setState({
              banner: HomeBanner,
              // homePage: true,
              // clipsPage: false,
              // galleryPage: false,
              // somethingPage: false
          }, () => {console.log(this.state.homePage)})  
      }

      changeClipsBanner = () => {
          this.setState({
              banner: ClipsBanner,
              // homePage: false,
              // clipsPage: true,
              // galleryPage: false,
              // somethingPage: false
          }, () => {console.log(this.state.clipsPage)})
      }

      changeGalleryBanner = () => {
        this.setState({
              banner: GalleryBanner,
              // homePage: false,
              // clipsPage: false,
              // galleryPage: true,
              // somethingPage: false
        },  () => {console.log(this.state.galleryPage)})
    }

    changeSomethingBanner = () => {
        this.setState({
              banner: SomethingBanner,
              // homePage: false,
              // clipsPage: false,
              // galleryPage: false,
              // somethingPage: true
        },  () => {console.log(this.state.somethingPage)})
    }

      render() {
          return (
              <div className="header">
                  <img src={this.state.banner} className="header__banner" alt="Valorant Banner"/>
                  <div className="header__name-container header__name-container1">
                      <p className="header__name header__name1">Chawpsticks #NA1</p>
                  </div>
                  <div className="header__name-container header__name-container2">
                      <h1 className="header__name header__name2">Chawpsticks #NA1</h1>
                  </div>
                  <Navigation changeHomeBanner={this.changeHomeBanner} changeClipsBanner={this.changeClipsBanner} changeGalleryBanner={this.changeGalleryBanner} changeSomethingBanner={this.changeSomethingBanner}/>
              </div>
          )
      }

}

export default Header;
