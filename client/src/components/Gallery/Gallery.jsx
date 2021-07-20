import React from 'react';
import Image1 from '../../assets/images/gallery/agents3.jpeg'
import Image2 from '../../assets/images/gallery/jett1.jpg'
import Image3 from '../../assets/images/gallery/omen.jpg'
import Image4 from '../../assets/images/gallery/agents.png'
import Image5 from '../../assets/images/gallery/gals.jpg'
import Image6 from '../../assets/images/gallery/val-gallery1.jpg'
import Image7 from '../../assets/images/gallery/agents2.jpg'
import Image8 from '../../assets/images/gallery/kj.png'
import './gallery.scss';

function Gallery() {
    return (
        <>
        <div className="gallery">
        <div className="clips__heading-box"></div>
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
            </div>
        </div>
        </>
    )
}

export default Gallery;
