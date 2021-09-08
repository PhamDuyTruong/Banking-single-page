import React from 'react';
import styled from 'styled-components';
import arrow from '../img/arrow.svg'

const SecondaryButtonStyled = styled.button`
    background-color: var(--dark-primary);
    padding: 1rem 2rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        padding-left: .9rem;
    };
    &:hover{
        background: linear-gradient(130deg, #e66465, #9198e5);
        transition: all 2s;
    }
`;

export default function SecondaryButton({name}) {
    return (
        <SecondaryButtonStyled>
            {name}
            <img src={arrow} alt="image"/>
        </SecondaryButtonStyled>
    )
}
