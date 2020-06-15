import Card from '@material-ui/core/Card';
import styled from 'styled-components';

export const Container = styled(Card)`

`;

export const Video = styled.video`
	visibility: ${(playing) => !playing ? 'visible' : 'hidden'};
`;

export const Presentation = styled.div`
	cursor: pointer;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	visibility: ${(playing) => playing ? 'visible' : 'hidden'};
`;