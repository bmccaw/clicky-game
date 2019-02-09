import React from 'react';
import Styled from 'styled-components';

const Footer = () => (
    <FooterDiv>
        <div className="bottom">2019 Brendan McCaughey</div>
    </FooterDiv>
);

export default Footer;

const FooterDiv = Styled.div `
        width: 100%;
        height:5vw;
        bottom:0;
        margin-bottom:0;
        margin-top: 20px;
        text-align:center;
        background-color: #2eb61f;
        color: white;
        overflow:auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        `