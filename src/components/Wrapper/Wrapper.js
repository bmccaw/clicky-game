import React from 'react';
import Styled from 'styled-components';

const Wrapper = props => <WrapperDiv>{props.children}</WrapperDiv>

export default Wrapper;

const WrapperDiv = Styled.div `
    display: grid;
    grid-gap: 50px;
    grid-template-columns: repeat(4, 1fr);
    max-width: 75%;
    margin:auto;
    margin-top:50px;
    margin-bottom:50px;
    `
