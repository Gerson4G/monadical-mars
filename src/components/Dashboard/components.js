import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;

    > div:first-child {
        grid-column: 1 / -1 ;
        grid-row: 1;
    }

    > div:nth-child(2) {
        grid-column: 1;
        grid-row: 2;
    }

    > div:nth-child(3) {
        grid-column: 2;
        grid-row: 2;
    }

    > div:nth-child(4) {
        grid-column: 1 ;
        grid-row: 3;
    }

    > div:nth-child(5) {
        grid-column: 2 ;
        grid-row: 3;
    }

`;

export { Container };
