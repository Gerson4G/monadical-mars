import Card from '@material-ui/core/Card';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import styled from 'styled-components';

export const Container = styled(Card)`
`;

export const LiveText = styled.h3`
	z-index: 10;
	position: absolute;
	margin-left: 2em;
	animation: color-animation 6s infinite linear alternate;
	visibility: ${({playing}) => playing ? 'visible' : 'hidden'};

	@keyframes color-animation {
	    0% {
	       color: black;
	    }
	    50% {
	       color: red;
	    } 
	    100% {
	       color: white;
	    } 
	}
`;

export const Video = styled.video`
 	min-width: 100%;
    min-height: 100%;
    position: relative;
    z-index: 1;
`;

export const Presentation = styled.div`
 	position: absolute;
    left: 50.3%;
    z-index: 2;
    background: black;
	height: 56%;
	width: 49.3%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	visibility: ${({playing}) => !playing ? 'visible' : 'hidden'};
	opacity: 0.8;
	h2 {
		color: white;
		opacity: 1;
		top: 3em;
		position: relative;
	}
	.play-icon {
		cursor: pointer;
		color: darkgrey;
		scale: 10;
		${({playing}) => !playing && 'transition: all 0.2s ease-in'};
		visibility: ${({playing}) => !playing ? 'visible' : 'hidden'};
		&:hover {
			scale: 11;
			transition: all 0.5s ease-out;
		}
	}
`;