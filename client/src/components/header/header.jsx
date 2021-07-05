import React from 'react';
import './header.scss';
import Navigation from '../Navigation/Navigation';
import HomeBanner from '../../assets/images/val-banner-dark.jpg';
import ClipsBanner from '../../assets/images/bind.jpg';
import GalleryBanner from '../../assets/images/valmap.png';
import SomethingBanner from '../../assets/images/split.jpg';

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            banner: HomeBanner,
            homePage: false,
            clipsPage: false,
            galleryPage: false,
            somethingPage: false
        };

        this.changeHomeBanner = this.changeHomeBanner.bind(this);
        this.changeClipsBanner = this.changeClipsBanner.bind(this);
        this.changeGalleryBanner = this.changeGalleryBanner.bind(this);
        this.changeSomethingBanner = this.changeSomethingBanner.bind(this)
    }

      changeHomeBanner = () => {
          this.setState({
              banner: HomeBanner,
          })  
      }

      changeClipsBanner = () => {
        document.querySelector('.nav-list__link-clips').click();
          this.setState({
              banner: ClipsBanner,
          })
      }

      changeGalleryBanner = () => {
        document.querySelector('.nav-list__link-gallery').click();
        this.setState({
              banner: GalleryBanner,
        })
    }

    changeSomethingBanner = () => {
        document.querySelector('.nav-list__link-friendsclips').click();
        this.setState({
              banner: SomethingBanner,            
        })
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
