import React from 'react';
import Styled from 'styled-components';

const Wrapper = props => <WrapperDiv>{props.children}</WrapperDiv>

export default Wrapper;

const WrapperDiv = Styled.div `
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 20px;
    max-width: 75%;
    margin:auto;
    `
