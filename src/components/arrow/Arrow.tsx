import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";

export const Arrow = () => {
    return (
        <StyledArrow direction={"column"} >
            <Icon iconId={"arrow"} />
        </StyledArrow>
    );
};

const StyledArrow = styled.svg`
    display: flex;
    //flex-wrap: wrap;
    //justify-content: center;
    margin: 0 auto;
    background-color: #c9e3c9;
    border: 1px solid red;
    
`