
import React, {useState, useEffect, createRef} from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { FormattedMessage } from 'react-intl';
import { Container, Video, Presentation, LiveText } from './components';

const VideoFeed = (props) => {

  const [playing, playVideo] = useState(false);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const containerRef = createRef(null);

  useEffect(() => {
    setHeight(containerRef.current.clientHeight);
    setWidth(containerRef.current.clientWidth);
  }, [containerRef])

    return (
        <Container raised ref={containerRef}>
        	<Presentation height={height} width={width} playing={playing}>
        		<PlayCircleFilledIcon onClick={() => playVideo(true)} className='play-icon'/>
        		<h2><FormattedMessage id="video.placeholder"/></h2>
        	</Presentation>
        	<LiveText playing={playing}>LIVE VIDEO</LiveText>
            <Video loop mute controls={playing} width="100%">
              <source src="https://mars.nasa.gov/system/video_items/5761_JPL-20190502-MSLf-0001-1920.mp4" type="video/mp4" />
              <p>Your browser doesn't support HTML5 video</p>
            </Video>
        </Container>
     );
}

export default VideoFeed;
