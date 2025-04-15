import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import Image from "./../../../assets/images/image1.png"


export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>Projects</SectionTitle>

                    <ul>
                        <li>
                            <img src={Image} alt=""/>
                            <h2>
                                TITLE PROJECT
                            </h2>
                            <span>Javascript</span>
                            <span>PostgreSQL</span>
                            <span>React</span>
                            <span>redux</span>
                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>

                        </li>
                        <li>
                            <img src={Image} alt=""/>
                            <h2>
                                I N S I G H T G R A M
                            </h2>
                            <span>Javascript</span>
                            <span>React Native</span>
                            <span>Redux</span>

                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>

                        </li>
                        <li>
                            <img src={Image} alt=""/>
                            <h2>
                                TITLE PROJECT
                            </h2>
                            <span>Javascript</span>
                            <span>PostgreSQL</span>
                            <span>React</span>
                            <span>redux</span>
                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </li>
                        <li>
                            <img src={Image} alt=""/>
                            <h2>
                                I N S I G H T G R A M
                            </h2>
                            <span>Javascript</span>
                            <span>React Native</span>
                            <span>Redux</span>

                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </li>
                    </ul>


            </Container>
        </StyledWorks>
    )
        ;
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: darkgrey;
    margin-top: 140px;
    gap: 26px 42px;
    border-radius: 6px;

    ul {
display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
    }

    li {
        
width: 522px;
        
    }

    p {
        font-size: 16px
    }

    h2 {
        font-size: 20px;
    }
    span {
        background-color: #5222D0;
        color: white;
        font-size: 10px;
        border-radius: 4px;
        padding: 8px 16px;
        width: 105px;
        height: 30px;

       
       
    }
`
const SectionTitle = styled.h2`


`


