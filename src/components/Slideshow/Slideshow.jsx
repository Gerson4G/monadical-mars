
import React, {useState, useEffect} from 'react';
import Fade from '@material-ui/core/Fade';
import { arrayBufferToBase64 } from '../../utils';
import { FormattedMessage } from 'react-intl';
import { ComponentTitle } from '../Dashboard/components';
import { BulletPoint, BulletsContainer, SlideShowContainer, Popup } from './components';
import CircularProgress from '@material-ui/core/CircularProgress';

const names = ['mars_1', 'mars_2', 'mars_3', 'mars_4', 'mars_5', 'mars_6', 'mars_7', 'mars_8', 'mars_9'];
let timer = null;

function Slideshow() {

    const [slide, changeSlide] = useState(0);
    const [timeout,] = useState(1000);
    const [images, setImages] = useState([]);

    const getData = () => {
        Promise.all( names.map( name => fetch(`./data/images/${name}.jpg`, {mode: 'no-cors'})))        
        .then(fullResponses =>
            Promise.all(fullResponses.map( response => response.arrayBuffer()))
        )
        .then(data => 
            setImages(data.map( (img, i) => {
                let base64Flag = 'data:image/jpeg;base64,';
                let imageStr = arrayBufferToBase64(img);
                return {
                    src: base64Flag + imageStr,
                    name: `Mars photo number ${i}`,
                    description: "Random description of where and when this pic was taken. It adds info value"
                };
            }
            ))
        )
    }

    const slideTransition = () => {
        timer = setTimeout( () => {
            if(slide === names.length-1){
                changeSlide(0);
            }
            else{
                changeSlide(slide + 1)
            }
        }, timeout)
    };

    useEffect(slideTransition, [slide]);

    useEffect(() => {
        if(images.length === 0){
            getData();
            setImages(true);
        }
    }, [images])

    const selectSlide = (selectedSlide) => {
        changeSlide(selectedSlide);
        clearTimeout(timer);
    }

    const freezeSlide = () => {
        clearTimeout(timer);
    }

    const tooltipContent = ({name, description}) => (
        <div>
            <h3>{name}</h3>
            <h4>{description}</h4>
        </div>
    )

    const renderImage = () => (
        <Fade in>
            <Popup placement="bottom" title={tooltipContent(images[slide])} >
                <img onMouseOver={freezeSlide} onMouseLeave={slideTransition} alt="recieved" src={images[slide].src} />
            </Popup>
        </Fade>
    )

    return (
        <div>
			<ComponentTitle><FormattedMessage id="slideshow.title"/></ComponentTitle>
            <SlideShowContainer raised>
            {
              !images.length ?  <CircularProgress /> : renderImage()
            }
            </SlideShowContainer>
            <BulletsContainer>
                { images.length && images.map ((img, i) => <BulletPoint key={i} active={i === slide} onClick={() => selectSlide(i)}/>) }
            </BulletsContainer>
        </div>
     );
}

export default Slideshow;
