
import React, {useState} from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { FormattedMessage } from 'react-intl';
import { ComponentTitle } from '../Dashboard/components';
import { Container, Video, Presentation, LiveText, StyledCard } from './components';

const VideoFeed = (props) => {

  const [playing, playVideo] = useState(false);

    return (
        <Container>
			    <ComponentTitle><FormattedMessage id="video.title"/></ComponentTitle>
          <StyledCard raised>
            {!playing ? 
              <Presentation playing={playing}>
                <PlayCircleFilledIcon onClick={() => playVideo(true)} className='play-icon'/>
                <h2><FormattedMessage id="video.placeholder"/></h2>
              </Presentation>
              :
              <>
              <LiveText playing={playing}>LIVE VIDEO</LiveText>
              <Video loop mute autoPlay controls={playing} width="100%">
                <source src="https://mars.nasa.gov/system/video_items/5761_JPL-20190502-MSLf-0001-1920.mp4" type="video/mp4" />
                <p>Your browser doesn't support HTML5 video</p>
              </Video>
              </>
            }
          </StyledCard>
        </Container>
     );
}

export default VideoFeed;
