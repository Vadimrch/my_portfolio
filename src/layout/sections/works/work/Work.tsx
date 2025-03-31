import React from 'react';
import styled from "styled-components";

type WorksPropsType = {
    title: string
    textWork: string
    src: string
}

export const Work = (props: WorksPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <TextWork>{props.textWork}</TextWork>
            <Button>Javascript</Button>
            <Button>PostgreSQL</Button>
            <Button>React</Button>
            <Button>redux</Button>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: #ddeddd;
    max-width: 520px;
    width: 100%;

`
const Image = styled.img`
width: 100%;
    height: 390px;
    object-fit: cover;
`
const Button = styled.button`
    
`
const Title = styled.span`

`
const TextWork = styled.p`

`