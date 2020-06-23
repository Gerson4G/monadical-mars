import Card from '@material-ui/core/Card';
import styled from 'styled-components';

export const Container = styled.div`
	height: 100%;
`;

export const LiveText = styled.h3`
	z-index: 10;
	margin-left: 2em;
	animation: color-animation 6s infinite linear alternate;
	visibility: ${({playing}) => playing ? 'visible' : 'hidden'};
	top: 1em;
	left: 1em;
	position: relative;
	margin: 0;
	padding: 0;

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
	 margin-top: -3em;
	 height: 105%;
`;

export const Presentation = styled.div`
    z-index: 2;
    background: black;
	height: 100%;
	width: 100%;
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

export const StyledCard = styled(Card)`
	height: 90%;
`;