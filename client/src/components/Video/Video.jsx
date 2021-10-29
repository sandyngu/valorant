import React from 'react';
import $ from 'jquery';
import './video.scss';

function Video(props) {
    console.log(props.clipsData[0])

    // $(function(){  // $(document).ready shorthand
    //     $('.video__clip-container').fadeIn('slow');
    //   });
      
    //   $(document).ready(function() {
          
    //       /* Every time the window is scrolled ... */
    //       $(window).scroll( function(){
          
    //           /* Check the location of each desired element */
    //           $('.video__clip-container').each( function(i){
                  
    //               var bottom_of_object = $(this).position().top + $(this).outerHeight();
    //               var bottom_of_window = $(window).scrollTop() + $(window).height();
                  
    //               /* If the object is completely visible in the window, fade it it */
    //               if( bottom_of_window > bottom_of_object ){
                      
    //                   $(this).animate({'opacity':'1'},2000);
                          
    //               }   
    //           }); 
    //       });
    //   });

    return (
        <div className="video">
            {props.clipsData[0].map(video =>
                <div className="video__clip-container" key={video.id}>
                    <video className="video__clip" controls src={video.video} type="video/mp4"/>
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
            )
            }
        </div>
    )
}

export default Video;
