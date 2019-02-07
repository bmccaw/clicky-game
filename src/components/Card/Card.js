import React from 'react';
import Styled from 'styled-components';


const Card = props => (
    <CardDiv className="card" onClick={() => props.clickCount(props.id)}>
        <div className="img-container">
            <img alt= {props.name} src={props.image} />
        </div>
    </CardDiv>
);

export default Card;

const CardDiv = Styled.div `
        border-radius: 25px;
        
        img{
            width:120px;
            height:120px;
        }`;