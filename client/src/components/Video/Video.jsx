import React from 'react';
import $ from 'jquery';
import './video.scss';

class Video extends React.Component {

    render() {

        $(function(){  // $(document).ready shorthand
            $('.video__clip-container').fadeIn('slow');
          });
          
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
        
            console.log(this.props.clipsData[0])
            
            $(document).ready(function () {
                // $('.video__clip-container-agent').each(function () {
                //     if ($('div.video__clip-text-agent:contains("Sage")').length > 0) {
                //         $(this).addClass('sage');
                //         console.log('this is sage');
                //     } else if ($('div.video__clip-text-agent:contains("Reyna")').length > 0) {
                //         $(this).addClass('reyna');
                //         console.log('nope');
                //     }
                // });

                $('div.video__clip-container-agent:contains("Sage")').each(function () {
                    $(this).addClass("sage");
                });
                $('div.video__clip-container-agent:contains("Reyna")').each(function () {
                    $(this).addClass("reyna");
                });
            });
           
            
        // const videos = this.props.clipsData[0];
        // $(document).ready(function() {


        //     $('.video__clip-container-agent').each(function(index) {
        //         for (let i=0; i < videos.length-1; i++) {
        //             if (videos[i].agent === 'Sage') {
        //                 $(this).addClass('sage');
        //                 console.log('Sage!');
        //             } else if (videos[i].agent === 'Reyna') {
        //                 $(this).addClass('reyna');
        //                 console.log('Reyna!')
        //             } else {
        //                 console.log('Different Agent!')
        //             }
        //         }
        //     })
        // })
    
        return (
            <div className="video">
                {this.props.clipsData[0].map(video =>
                    <div className="video__clip-container" key={video.id}>
                    <div className="video__clip-container-agent">{video.agent}
                        <video className="video__clip" controls src={video.video} type="video/mp4" poster={video.poster}/>
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


}

export default Video;
