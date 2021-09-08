import React from 'react';
import { InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import avatar1 from '../img/avatar1.svg';
import avatar2 from '../img/avatar2.svg';
import avatar3 from '../img/avatar3.svg';
import avatar4 from '../img/avatar4.svg';
import avatar5 from '../img/avatar5.svg';
import messaging from '../img/conversation.svg';
import bgCircles from '../img/circleBg.svg';

const MessageStyle = styled.section`
    .message-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
    .left-items{
        position: relative;
        padding-right: 2rem;
        .m-para{
            padding: 1rem 0;
        }
        .images-con{
            display: flex;
            align-items: center;
            .image-2, .image-3, .image-4, .image-5{
                margin-left: -22px;
            }
        }
        .bgCircle{
            position: absolute;
            top: -7%;
            left: -10%;
            z-index: -1;
        }
    }
    .right-items{
        position: relative;
        img{
            padding-left: 2rem;
        }
        .bgCircle{
            position: absolute;
            bottom: -7%;
            right: 0;
            z-index: -1;
        }
    }
`;

export default function MessageSection() {
    return (
        <MessageStyle>
            <InnerLayout>
                <div className="message-con">
                    <div className="left-items">
                        <h2 className="secondary-heading">
                            We support you in 5 different languages
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, temporibus accusamus. Libero perspiciatis quia quibusdam natus ad animi commodi facere dolorem, ipsam repellat, quidem eum nam similique odio enim et?
                        </p>
                        <div className="images-con">
                            <img src={avatar1} alt="image" />
                            <img src={avatar2} alt="image" />
                            <img src={avatar3} alt="image" />
                            <img src={avatar4} alt="image" />
                            <img src={avatar5} alt="image" />
                        </div>
                    </div>
                    <div className="right-items">
                        <img src={messaging} alt="Messaging image" />
                        <img src={bgCircles} alt="bgCircle image" className="bgCircle" />
                    </div>
                </div>
            </InnerLayout>
        </MessageStyle>
    )
}
