import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import questions from '../data'
import Question from './Question';
import lines from '../img/lines.svg';

const FaqStyled = styled.section`
    .c-para{
        width: 60%;
        margin: 0 auto;
    }
    .questions-con{
        padding-top: 4rem;
    }
    .lines{
        position: absolute;
        left: 0;
        top: 300%;
        width: 100%;
        z-index: -1;
        img{
            width: 100%;
        }
    }
`;


export default function FAQSection() {
    return (
        <FaqStyled>
            <InnerLayout>
                <h3 className="small-heading">Frequently <span>asked questions</span></h3>
                <p className="c-para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Assumenda maxime ipsa nam expedita dolorem distinctio illo 
                    ad doloribus atque fuga, Nihil laboriosam beatae fugit.
                </p>
                <div className="lines">
                    <img src={lines} alt="line image" />
                </div>
                <div className="questions-con">
                    {questions.map((item)=>(
                         <Question key={item.id} {...item} />
                    ))}
                    
                </div>
            </InnerLayout>
        </FaqStyled>
    )
}
