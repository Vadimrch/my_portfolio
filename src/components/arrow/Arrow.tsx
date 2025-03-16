import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";

export const Arrow = () => {
    return (
        <StyledArrow>
            <Icon iconId={"arrow"}/>
        </StyledArrow>
    );
};

const StyledArrow = styled.svg`
    background-color: #c9e3c9;
    border: 2px solid red;
`