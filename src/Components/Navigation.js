import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.svg';
import { Fade } from 'react-reveal';
import PrimaryButton from './PrimaryButton'

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    align-items: center;
    ul{
        display: flex;
        justify-content: space-between;
        width: 40%;
        li{
            &:hover{
                color: red;
                font-weight: bold;
                cursor: pointer;
                transition: all 1s
            }
        }
    }
`;


export default function Navigation() {
    return (
        <Fade>
            <NavigationStyled>
                <div className="logo">
                    <img src={logo} alt="image logo"/>
                </div>
                <ul>
                    <li href="">Home</li>
                    <li href="">Features</li>
                    <li href="">Price</li>
                </ul>
                <PrimaryButton name={'Sign up'} />
            </NavigationStyled>
        </Fade>
    )
}
