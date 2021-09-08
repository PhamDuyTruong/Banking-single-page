import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    background-color: var(--accent-pink);
    padding: .7rem 2rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    &:hover{
        background-color: #ffd05e;
        color: red;
        font-weight: 400;
        transition: all 2s;
    }
`;

export default function PrimaryButton({name}) {
    return (
        <ButtonStyled>
            {name}
        </ButtonStyled>
    )
}
