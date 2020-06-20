import styled from 'styled-components';
import Card from '@material-ui/core/Card';

const StyledCard = styled(Card)`
    margin: 1em;
    width: 10em;
    text-align: center;
    .first-row & {
        width: 14em;
    }
`;

const Container = styled(Card)`
	margin: 0 auto;
    height: 100%;
    > div:first-child {
        display: grid;
    	grid-template-columns: repeat(2, 1fr);
        justify-items: center;
    }

    > div:nth-child(2) {
        display: grid;
        justify-items: center;
    	grid-template-columns: repeat(2, 1fr);
    }	
	
`;


export { Container, StyledCard };