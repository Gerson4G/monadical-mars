import styled from 'styled-components';

const Container = styled.div`
    background-size: 110%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;

    > div {
        opacity: 0.8;
    }

    > div:not(:first-child) {
        width: 45em;
        margin: auto;
    }

    > div:first-child {
        grid-column: 1 / -1 ;
        grid-row: 1;
        background: black;
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

    > div:nth-child(2), > div:nth-child(4) {
        width: 50em;
    }
`;

const Background = styled.span`
    background-image: url("data/images/wallpaper_1.jpg");
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    background-repeat: round;
    height: 140vh;
`;

export { Container, Background };
