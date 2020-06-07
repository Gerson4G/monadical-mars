
import React, {useState, useEffect} from 'react';
import Fade from '@material-ui/core/Fade';

function Slideshow() {

    const [slide, changeSlide] = useState(0);
    const [timeout, changeTimeout] = useState(1000);

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
