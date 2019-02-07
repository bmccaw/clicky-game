import React from 'react';
import Styled from 'styled-components';

const Hero = () => (
    <HeroDiv>
        <h1>Zelda Clicky Game</h1>
        <h3>Click on an image to earn points, but don't click on any more than once!</h3>
    </HeroDiv>
);

export default Hero;

const HeroDiv = Styled.div`
        margin-top: 0;
        background-image: url(deku-tree.jpg);
        background-attachment: fixed;
        background-position: center;
        text-align: center;
        min-height:400px;

        h1 {
            margin: 0;
        }`;