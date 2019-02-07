import React from 'react';
import Styled from 'styled-components';

const Wrapper = props => <WrapperDiv>{props.children}</WrapperDiv>

export default Wrapper;

const WrapperDiv = Styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    `
