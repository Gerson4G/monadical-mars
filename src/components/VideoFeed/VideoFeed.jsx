
import React, {useState, useEffect} from 'react';
import { arrayBufferToBase64 } from '../../utils';

const VideoFeed = (props) => {

    return (
        <div>
            <video autoPlay loop playsInline width="100%">
              <source src="https://mars.nasa.gov/system/video_items/5761_JPL-20190502-MSLf-0001-1920.mp4" type="video/mp4" />
              <p>Your browser doesn't support HTML5 video</p>
            </video>
        </div>
     );
}

export default VideoFeed;
