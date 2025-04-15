import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"60px"} width={"47px"} viewBox={"0 0 60px 47px"} iconId={"gmail"}/>
                        </SocialLink>
                    </SocialItem><SocialItem>
                    <SocialLink>
                        <Icon height={"60px"} width={"71px"} viewBox={"0 0 60px 71px"} iconId={"linkedin"}/>
                    </SocialLink>
                </SocialItem><SocialItem>
                    <SocialLink>
                        <Icon height={"60px"} width={"56px"} viewBox={"0 0 60px 56px"} iconId={"github"}/>
                    </SocialLink>
                </SocialItem>

                </SocialList>




            </FlexWrapper>
            <Menu>
                <a href="Projects">Projects</a>
                <a href="Contact">Contact</a>
            </Menu>
            <Copyright>WEB DEVELOPER 2025</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #e8e0ce;
    min-height: 20vh;
    margin-top: 190px;
    padding: 100px 0;

`
const SocialList = styled.ul`
    display: flex;
    gap: 30px;

`
const SocialItem = styled.li`


`
const SocialLink = styled.a`
margin-top: 190px;
    cursor: pointer;
`
const Copyright = styled.small`
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 14px;
    margin-top: 49px;
 
    display: flex;
    justify-content: center;
    align-items: center;

`
const Menu = styled.nav`
    display: flex;
    justify-content: center;
    gap: 48px;
  margin-top: 48px;
`