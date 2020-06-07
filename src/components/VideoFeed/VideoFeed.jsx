
import React, {useState, useEffect} from 'react';
import { arrayBufferToBase64 } from '../../utils';

const VideoFeed = (props) => {

    return (
        <div>
            <iframe 
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1Ll-VHYxWXU?modestbranding=1&autoplay=1&disablekb=1&loop=1&rel=0&showinfo=0"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
     );
}

export default VideoFeed;
