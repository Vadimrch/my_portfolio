import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"} >
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"70px"} width={"70px"}  iconId={"gmail"}/>
                        </SocialLink>
                    </SocialItem><SocialItem>
                    <SocialLink>
                        <Icon height={"70px"} width={"70px"}  iconId={"linkedin"}/>
                    </SocialLink>
                </SocialItem><SocialItem>
                    <SocialLink>
                        <Icon height={"70px"} width={"70px"}  iconId={"github"}/>
                    </SocialLink>
                </SocialItem>

                </SocialList>
                <a href="Projects">Projects</a>
                <a href="Contact">Contact</a>
                <Copyright>WEB DEVELOPER 2021</Copyright>

            </FlexWrapper>


        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #e8e0ce;
    min-height: 20vh;

`
const SocialList = styled.ul`
    display: flex;
    gap: 30px;

`
const SocialItem = styled.li`
    

`
const SocialLink = styled.a`

`
const Copyright = styled.small`

`