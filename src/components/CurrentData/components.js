import styled from 'styled-components';
import Card from '@material-ui/core/Card';

const StyledCard = styled(Card)`
    margin: 1em;
    width: 15em;
    text-align: center;
    && { background: #4b4b4b; color: white; }
    .first-row & {
        width: 14em;
    }
`;

const Container = styled(Card)`
	margin: 0 auto;
    height: 100%;
    
    > div {
        background: #292929;
    }

    > div:first-child {
        display: grid;
    	grid-template-columns: repeat(2, 1fr);
        justify-items: center;
    }

    > div:nth-child(2) {
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(1 1fr);
        ${StyledCard} > div {
            padding: 0;
            margin: 0;
        }
    }	
	
`;


export { Container, StyledCard };