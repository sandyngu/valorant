import React from 'react';
import $ from 'jquery';
import './video.scss';

function Video(props) {
          
    $(document).ready(function() {
        
        /* Every time the window is scrolled ... */
        $(window).scroll( function(){
        
            /* Check the location of each desired element */
            $('.video__clip-container').each( function(i){
                
                var bottom_of_object = $(this).position().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                /* If the object is completely visible in the window, fade it it */
                if( bottom_of_window > bottom_of_object ){
                    
                    $(this).animate({'opacity':'1'},2000);
                        
                }   
            }); 
        })     
    });
            
    $(document).ready(function () {

        $('div.video__clip-container-agent:contains("Sage")').each(function () {
            $(this).addClass("sage");
        });
        $('div.video__clip-container-agent:contains("Reyna")').each(function () {
            $(this).addClass("reyna");
        });
        $('div.video__clip-container-agent:contains("Brimstone")').each(function () {
            $(this).addClass("brim");
        });
        $('div.video__clip-container-agent:contains("Phoenix")').each(function () {
            $(this).addClass("phoenix");
        });
        $('div.video__clip-container-agent:contains("Skye")').each(function () {
            $(this).addClass("skye");
        });
        $('div.video__clip-container-agent:contains("Astra")').each(function () {
            $(this).addClass("astra");
        });
        $('div.video__clip-container-agent:contains("Omen")').each(function () {
            $(this).addClass("omen");
        });
        $('div.video__clip-container-agent:contains("Breach")').each(function () {
            $(this).addClass("breach");
        });
        $('div.video__clip-container-agent:contains("Yoru")').each(function () {
            $(this).addClass("yoru");
        });
        $('div.video__clip-container-agent:contains("Cypher")').each(function () {
            $(this).addClass("cypher");
        });
        $('div.video__clip-container-agent:contains("Killjoy")').each(function () {
            $(this).addClass("killjoy");
        });
        $('div.video__clip-container-agent:contains("Jett")').each(function () {
            $(this).addClass("jett");
        });
        $('div.video__clip-container-agent:contains("KAY/O")').each(function () {
            $(this).addClass("kayo");
        });
        $('div.video__clip-container-agent:contains("Raze")').each(function () {
            $(this).addClass("raze");
        });
        $('div.video__clip-container-agent:contains("Viper")').each(function () {
            $(this).addClass("viper");
        });
        $('div.video__clip-container-agent:contains("Sova")').each(function () {
            $(this).addClass("sova");
        });
        $('div.video__clip-container-agent:contains("Chamber")').each(function () {
            $(this).addClass("chamber");
        });
        $('div.video__clip-container-agent:contains("Neon")').each(function () {
            $(this).addClass("neon");
        });
        $('div.video__clip-container-agent:contains("Andrew")').each(function () {
            $(this).addClass("andrew");
        });
        $('div.video__clip-container-agent:contains("Bruce")').each(function () {
            $(this).addClass("bruce");
        });
        $('div.video__clip-container-agent:contains("Ian")').each(function () {
            $(this).addClass("ian");
        });
        $('div.video__clip-container-agent:contains("Igal")').each(function () {
            $(this).addClass("igal");
        });
        $('div.video__clip-container-agent:contains("Jenny")').each(function () {
            $(this).addClass("jenny");
        });
        $('div.video__clip-container-agent:contains("Kyle")').each(function () {
            $(this).addClass("kyle");
        });
        $('div.video__clip-container-agent:contains("Raymond")').each(function () {
            $(this).addClass("raymond");
        });
        $('div.video__clip-container-agent:contains("Tim")').each(function () {
            $(this).addClass("tim");
            $(this).removeClass("cypher");
        });
        $('div.video__clip-container-agent:contains("Alex")').each(function () {
            $(this).addClass("alex");
        });
            
    });

    return (
        <div className="video">
            {props.clipsData[0].map(video =>
                <div className="video__clip-container" key={video.id}>
                <div className="video__clip-container-agent">{video.agent}
                    <video className="video__clip" controls src={video.video} type="video/mp4" preload="none" poster={video.poster} title="Clip" allowFullScreen/>
                    <div className="video__clip-text">
                        <div className="video__clip-text-container">
                            <p className="video__clip-text-date">{video.date}</p>
                            <p className="video__clip-text-agent">{video.agent}</p>
                        </div>
                        <div className="video__clip-description-container">
                            <p className="video__clip-text-description">{video.description}</p>
                        </div>
                    </div>
                </div>
                </div>
            )
            }
        </div>
    )
}

export default Video;
