
import React, {useState, useEffect} from 'react';
import { arrayBufferToBase64 } from '../../utils';

const VideoFeed = (props) => {

    return (
        <div>
            <iframe 
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1Ll-VHYxWXU?autoplay=1&start=2"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
     );
}

export default VideoFeed;
