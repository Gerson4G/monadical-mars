
import React, {useState, useEffect} from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { arrayBufferToBase64 } from '../../utils';
import { Container, Video, Presentation } from './components';

const VideoFeed = (props) => {

	const [playing, playVideo] = useState(false);

    return (
        <Container raised>
        	<Presentation playing={playing}>
        		<PlayCircleFilledIcon onClick={() => playVideo(true)} className='play-icon'/>
        		<h2>Here you can see live video sent from mars. Click to Play</h2>
        	</Presentation>
            <Video loop mute controls={playing} width="100%">
              <source src="https://mars.nasa.gov/system/video_items/5761_JPL-20190502-MSLf-0001-1920.mp4" type="video/mp4" />
              <p>Your browser doesn't support HTML5 video</p>
            </Video>
        </Container>
     );
}

export default VideoFeed;
