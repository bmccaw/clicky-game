import React from 'react';
import Styled from 'styled-components';

const Nav = props => (
    <NavBar>
        <h1>Zelda Clicky Game</h1>
        <h3>Click an image to begin!</h3>
        <h3>Score: {props.score} | Top Score: {props.topscore}</h3>
    </NavBar>
);

export default Nav;


const NavBar = Styled.div`
    width: 100%;
    position:sticky;
    top:0;
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    background-color: #2eb61f;
    margin-bottom: 0;

`