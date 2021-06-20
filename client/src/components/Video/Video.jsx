import React from 'react';

function Video(props) {
    return (
        <div className="video">
            <video controls>
                <source src={props.video} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Video;
