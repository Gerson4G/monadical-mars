import styled from 'styled-components';

const Container = styled.div`
    font-family: 'Titillium Web', sans-serif;
    background-size: 110%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    max-height: 100%;
    overflow: auto;

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
        height: 100%;
    }
`;

const Background = styled.span`
    background-image: url("data/images/wallpaper_2.jpg");
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
`;

const ComponentTitle = styled.h2`
    margin-bottom: 0;
    color: white;
    background: rgb(0,0,0,0.3);
    width: max-content;
`;

const SingleContainer = styled.div`
    height: 90vh;
    width: 95vw;
    z-index: 111;
    display: block;
    position: relative;
    margin: auto;

    > .slideshow-container {
        height: 70%;
    }
`;

export { Container, Background, ComponentTitle, SingleContainer };
