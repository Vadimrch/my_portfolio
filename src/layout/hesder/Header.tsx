import React from 'react';
import styled from 'styled-components';
import {Menu} from "../../components/menu/Menu.tsx";
import {Logo} from "../../components/logo/Logo.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>



        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #ace8d8;
    display: flex;
    justify-content: space-between;


`