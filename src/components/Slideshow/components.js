import Card from '@material-ui/core/Card';
import styled from 'styled-components';

export const BulletPoint = styled.div`
	height: 0.8rem;
	width: 0.8rem;
	background: ${({active}) => active ? 'red' : 'blue'};
	border-radius: 2em;
	position: relative;
	top: -2em;
	left: 0;
	right: 0;
	margin: 0 0.2rem;
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
	> img {
		height: 92%;
		scale: 1.6;
		margin: 1em 0;
	}
`;