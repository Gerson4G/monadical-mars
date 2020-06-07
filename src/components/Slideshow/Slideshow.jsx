
import React, {useState, useEffect} from 'react';
import Fade from '@material-ui/core/Fade';
import { arrayBufferToBase64 } from '../../utils';

function Slideshow() {

    const [slide, changeSlide] = useState(0);
    const [timeout, changeTimeout] = useState(1000);
    const [images, setImages] = useState(null);

    const getData = () => {
        const names = ['mars_1', 'mars_2', 'mars_3', 'mars_4'];
        Promise.all( names.map( name => fetch(`./data/images/${name}.jpg`, {mode: 'no-cors'})))        
        .then(fullResponses =>
            Promise.all(fullResponses.map( response => response.arrayBuffer()))
        )
        .then(data => data.forEach( img => {
            let base64Flag = 'data:image/jpeg;base64,';
            let imageStr = arrayBufferToBase64(img);
            const el = document.createElement('img');
            el.src = base64Flag + imageStr;
            document.body.appendChild(el);
        }))
    }

    const slideTransition = () => {
        setTimeout( () => {
            if(slide > 3){
                changeSlide(0);
            }
            else{
                changeSlide(slide + 1)
            }
        }, timeout)
    };

    useEffect(slideTransition, [slide]);

    useEffect(() => {
        if(!images){
            getData();
            setImages(true);
        }
    }, [images])

    return (
        <div>
            {
                [0,1,2,3].map(n =>  <Fade key={n} in={slide === n}>
                          <span>JEJEJE {n}</span>
                        </Fade>
                )
            }
        </div>
     );
}

export default Slideshow;
