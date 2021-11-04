import React from 'react';
import Image1 from '../../assets/images/gallery/agents3.jpeg'
import Image2 from '../../assets/images/gallery/jett1.jpg'
import Image3 from '../../assets/images/gallery/omen.jpg'
import Image4 from '../../assets/images/gallery/agents.png'
import Image5 from '../../assets/images/gallery/gals.jpg'
import Image6 from '../../assets/images/gallery/val-gallery1.jpg'
import Image7 from '../../assets/images/gallery/sagejett.jpg'
import Image8 from '../../assets/images/gallery/kj.png'
import Image9 from '../../assets/images/gallery/sage and viper.jpg'
import Image10 from '../../assets/images/gallery/val2.png'
import Image11 from '../../assets/images/gallery/val1.jpg'
import Image12 from '../../assets/images/gallery/anniversary.jpg'
import Image13 from '../../assets/images/gallery/sova.jpg'
import Image14 from '../../assets/images/gallery/sage.jpg'
import Image15 from '../../assets/images/gallery/kayo cypher.jpg'
import Image16 from '../../assets/images/gallery/girls night.jpg'
import Image17 from '../../assets/images/gallery/brim.png'
import Image18 from '../../assets/images/gallery/sage noodles.jpg'
import './gallery.scss';

function Gallery() {
    return (
        <>
        <div className="gallery">
        <div className="clips__heading-box"></div>
        <div className="gallery__box"></div>
            <div className="clips__heading">
                <div className="clips__heading-text">Gallery</div>
            </div>
            <div className="gallery__photo-container">
                <img src={Image1} className="gallery__photo gallery__photo1" alt="Valorant Art"/>
                <img src={Image2} className="gallery__photo gallery__photo2" alt="Valorant Art"/>
                <img src={Image3} className="gallery__photo gallery__photo3" alt="Valorant Art"/>
                <img src={Image4} className="gallery__photo gallery__photo4" alt="Valorant Art"/>
                <img src={Image5} className="gallery__photo gallery__photo5" alt="Valorant Art"/>
                <img src={Image6} className="gallery__photo gallery__photo6" alt="Valorant Art"/>
                <img src={Image7} className="gallery__photo gallery__photo7" alt="Valorant Art"/>
                <img src={Image8} className="gallery__photo gallery__photo8" alt="Valorant Art"/>
                <img src={Image9} className="gallery__photo gallery__photo9" alt="Valorant Art"/>
                <img src={Image10} className="gallery__photo gallery__photo10" alt="Valorant Art"/>
                <img src={Image11} className="gallery__photo gallery__photo11" alt="Valorant Art"/>
                <img src={Image12} className="gallery__photo gallery__photo12" alt="Valorant Art"/>
                <img src={Image13} className="gallery__photo gallery__photo13" alt="Valorant Art"/>
                <img src={Image14} className="gallery__photo gallery__photo14" alt="Valorant Art"/>
                <img src={Image15} className="gallery__photo gallery__photo15" alt="Valorant Art"/>
                <img src={Image16} className="gallery__photo gallery__photo16" alt="Valorant Art"/>
                <img src={Image17} className="gallery__photo gallery__photo17" alt="Valorant Art"/>
                <img src={Image18} className="gallery__photo gallery__photo18" alt="Valorant Art"/>
            </div>
        </div>
        </>
    )
}

export default Gallery;
