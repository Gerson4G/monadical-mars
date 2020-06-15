
import React, {useState, useEffect} from 'react';
import { arrayBufferToBase64 } from '../../utils';
import { Container, Video, Presentation } from './components';

const VideoFeed = (props) => {

	const [playing, playVideo] = useState(false);

    return (
        <Container raised>
        	<Presentation onClick={() => playVideo(true)} playing={playing}>
        		CLICK ME TO PLAY
        	</Presentation>
            <Video playing={playing} loop playsInline mute width="100%">
              <source src="https://mars.nasa.gov/system/video_items/5761_JPL-20190502-MSLf-0001-1920.mp4" type="video/mp4" />
              <p>Your browser doesn't support HTML5 video</p>
            </Video>
        </Container>
     );
}

export default VideoFeed;
