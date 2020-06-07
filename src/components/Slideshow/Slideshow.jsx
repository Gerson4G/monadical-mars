
import React, {useState, useEffect} from 'react';
import Fade from '@material-ui/core/Fade';
import { arrayBufferToBase64 } from '../../utils';
import CircularProgress from '@material-ui/core/CircularProgress';

function Slideshow() {

    const [slide, changeSlide] = useState(0);
    const [timeout,] = useState(1000);
    const [images, setImages] = useState([]);

    const getData = () => {
        const names = ['mars_1', 'mars_2', 'mars_3', 'mars_4'];
        Promise.all( names.map( name => fetch(`./data/images/${name}.jpg`, {mode: 'no-cors'})))        
        .then(fullResponses =>
            Promise.all(fullResponses.map( response => response.arrayBuffer()))
        )
        .then(data => 
            setImages(data.map( img => {
                let base64Flag = 'data:image/jpeg;base64,';
                let imageStr = arrayBufferToBase64(img);
                return base64Flag + imageStr;
            }
            ))
        )
    }

    const slideTransition = () => {
        setTimeout( () => {
            if(slide === 3){
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

    const renderImage = () => (
        <Fade in>
          <img alt="recieved" src={images[slide]} />
        </Fade>
    )
    


    return (
        <div>
            {
              !images.length ?  <CircularProgress /> : renderImage()
            }
        </div>
     );
}

export default Slideshow;
