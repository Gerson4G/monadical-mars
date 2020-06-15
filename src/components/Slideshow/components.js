import Card from '@material-ui/core/Card';
import styled from 'styled-components';

export const BulletPoint = styled.div`
	height: 1rem;
	width: 1rem;
	background: ${({active}) => active ? 'red' : 'blue'};
	border-radius: 2em;
	position: relative;
	top: -2.5em;
	left: 0;
	right: 0;
	margin: 0 0.3rem;
	cursor: pointer;
`;

export const BulletsContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const SlideShowContainer = styled(Card)`
	display: flex;
	justify-content: center;
	align-item: center;
	height: 100%;
	> img {
		height: 100%;
		scale: 1.5;
		margin: 1em 0;
	}
`;