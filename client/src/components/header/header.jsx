import React from 'react';
import './header.scss';
import Navigation from '../Navigation/Navigation';
import HomeBanner from '../../assets/images/val-banner-dark.jpg';
import FriendsBanner from '../../assets/images/bind.jpg';
import ClipsBanner from '../../assets/images/valmap.png';
import GalleryBanner from '../../assets/images/split.jpg';

class Header extends React.Component {
        state = {
            banner: HomeBanner,
            homePage: false,
            clipsPage: false,
            galleryPage: false,
            somethingPage: false
        };

      changeHomeBanner = () => {
          this.setState({
              banner: HomeBanner,
              homePage: true
          })
          if (this.state.homePage) {
              document.querySelector('.nav-list-logo').classList.add('active')  
          }
      }

      changeClipsBanner = () => {
        document.querySelector('.nav-list__link-clips').click();
          this.setState({
              banner: ClipsBanner,
              clipsPage: true
          })
      }

      changeGalleryBanner = () => {
        document.querySelector('.nav-list__link-gallery').click();
        this.setState({
              banner: GalleryBanner,
              galleryPage: true
        })
    }

    changeFriendsBanner = () => {
        document.querySelector('.nav-list__link-friendsclips').click();
        this.setState({
              banner: FriendsBanner,   
              friendsClipsPage: true         
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
                  <Navigation changeHomeBanner={this.changeHomeBanner} changeClipsBanner={this.changeClipsBanner} changeGalleryBanner={this.changeGalleryBanner} changeFriendsBanner={this.changeFriendsBanner}/>
              </div>
          )
      }

}

export default Header;
