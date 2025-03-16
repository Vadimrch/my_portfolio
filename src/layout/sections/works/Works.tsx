import React from 'react';
import styled from "styled-components";
import image1 from '../../../assets/images/image1.png'



export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>Projects</SectionTitle>
            <Image src={image1} alt="image1"/>
            <TitleProject>TITLE PROJECT</TitleProject>
            <ButtonProject>JAVASCRIPT</ButtonProject>
            <ButtonProject>POSTGESQL</ButtonProject>
            <ButtonProject>REACT</ButtonProject>
            <ButtonProject>REDUX</ButtonProject>
            <TextProject>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</TextProject>

            <Image src={image1} alt="image1"/>
            <TitleProject>INSIGTGRAM</TitleProject>
            <ButtonProject>JAVASCRIPT</ButtonProject>
            <ButtonProject>REACT NATIVE</ButtonProject>
            <ButtonProject>REDUX</ButtonProject>
            <TextProject>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</TextProject>

            <Image src={image1} alt="image1"/>
            <TitleProject>TITLE PROJECT</TitleProject>
            <ButtonProject>JAVASCRIPT</ButtonProject>
            <ButtonProject>POSTGESQL</ButtonProject>
            <ButtonProject>REACT</ButtonProject>
            <ButtonProject>REDUX</ButtonProject>
            <TextProject>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</TextProject>

            <Image src={image1} alt="image1"/>
            <TitleProject>INSIGTGRAM</TitleProject>
            <ButtonProject>JAVASCRIPT</ButtonProject>
            <ButtonProject>REACT NATIVE</ButtonProject>
            <ButtonProject>REDUX</ButtonProject>
            <TextProject>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</TextProject>
                


        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: darkgrey;
    

`
const SectionTitle = styled.h2`


`
const Image = styled.img`
    width: 520px;
    height: 390px;
`

const TitleProject = styled.h3`


`
const ButtonProject = styled.button`
    background-color: #6a0dad;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin: 30px 0 0 0;
`
const TextProject = styled.p`

`
