import React from 'react';
import styled from "styled-components";
import photo from './../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper  justify={"space-around"}>
                <div>
                    <MainTitle>DEVELOPER</MainTitle>
                    <Name>Vadim Korolenko</Name>
                    <MainText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.</MainText>
                    <button>Contact Me</button>
                </div>
                <Photo src={photo} alt=""/>
            </FlexWrapper>

        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #e3caca;
    border: 1px solid red;
`
const Photo = styled.img`
    width: 400px;
    height: 500px;
    object-fit: cover;
`
const MainTitle = styled.h1`

`
const MainText = styled.p`
width: 520px;
    
`
const Name = styled.h2`

`
