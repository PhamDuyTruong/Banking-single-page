import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import chart from '../img/chart.svg';
import { Bounce, Roll } from 'react-reveal';
import RubberBand from 'react-reveal/RubberBand';
import AnimatedButton from './AnimatedButton';
import ChartStats from './ChartStats';

const ChartStyled = styled.section`
    .chart-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
        }
        .chart-left{
            width: 80%;
            @media screen and (max-width: 1347px){
                width: 100%;
            }
            .stats{
                img{
                    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
                    border-radius: 62px;
                    width: 100%;
                }
                .stats-money{
                    display: flex;
                    padding-bottom: 1.3rem;
                    justify-content: space-between;
                }
            }
        }
        .chart-right{
            padding-left: 2rem;
            p{
                padding: 1.3rem 0;
            }
        }
    }
`;

export default function ChartSection() {
    return (
        <ChartStyled>
            <InnerLayout>
                <div className="chart-con">
                    <div className="chart-left">
                        <div className="stats">
                            <div className="stats-money">
                               <ChartStats name={'Balance'} ammount={250}/>
                               <ChartStats name={'Last Transaction'} ammount={1000}/> 
                            </div>
                            <img src={chart} alt="chart image"/>
                        </div>
                    </div>
                    <div className="chart-right">
                        <h2 className="secondary-heading">
                            Manage your finances like a pro in no time 
                        </h2>
                        <Roll right>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus harum quisquam vitae possimus impedit praesentium architecto a sit, minima magnam distinctio, recusandae aperiam dolores, delectus voluptatibus quasi illum! Ut, quia.
                            </p>
                        </Roll>
                        <Bounce right>
                            <AnimatedButton name={'Learn More'}/>
                        </Bounce>
                    </div>
                </div>
            </InnerLayout>
        </ChartStyled>
    )
}
