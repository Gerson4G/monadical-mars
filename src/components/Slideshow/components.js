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
	height: 100%;
	box-shadow: 0px 5px 5px -3px rgba(0,0,0),0px 8px 10px 1px rgba(0,0,0.12),0px 3px 14px 2px rgba(0,0,0);
	> img {
		height: 100%;
		scale: 1.5;
		margin: 1em 0;
	}
`;