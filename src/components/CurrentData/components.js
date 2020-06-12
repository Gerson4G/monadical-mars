import styled from 'styled-components';
import Card from '@material-ui/core/Card';

const StyledCard = styled(Card)`
	margin: 2em;
`;

const Container = styled.div`
	margin: 0 auto;

    > div:first-child {
        display: grid;
    	grid-template-columns: repeat(2, 1fr);
        justify-items: center;
    }

    > div:nth-child(2) {
        display: grid;
    	grid-template-columns: repeat(2, 1fr);
    }	
	
`;


export { Container, StyledCard };