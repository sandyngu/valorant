import React from 'react';
import './header.scss';
import Navigation from '../Navigation/Navigation';
import HomeBanner from '../../assets/images/valbanner2.jpg';
import FriendsBanner from '../../assets/images/bind.jpg';
import ClipsBanner from '../../assets/images/valmap.png';
import GalleryBanner from '../../assets/images/split.jpg';
import UploadBanner from '../../assets/images/bind.png';

class Header extends React.Component {
        state = {
            banner: HomeBanner,
        };

      changeHomeBanner = () => {
          this.setState({
              banner: HomeBanner,
          })
          if (this.state.homePage) {
              document.querySelector('.nav-list-logo').classList.add('active')  
          }
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

        changeFriendsBanner = () => {
            document.querySelector('.nav-list__link-friendsclips').click();
            this.setState({
                banner: FriendsBanner,         
            })
        }

        changeUploadBanner = () => {
            this.setState({
                banner: UploadBanner,         
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
                  <Navigation changeHomeBanner={this.changeHomeBanner} changeClipsBanner={this.changeClipsBanner} changeGalleryBanner={this.changeGalleryBanner} changeFriendsBanner={this.changeFriendsBanner} changeUploadBanner={this.changeUploadBanner}/>
              </div>
          )
      }

}

export default Header;
