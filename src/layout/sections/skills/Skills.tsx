import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill iconId={"docker"}
                title={"Docker"}/>
                <Skill iconId={"express"}
                title={"Express JS"}/>
                <Skill iconId={"javascript"}
                title={"JAVACRIPT"}/>
                <Skill iconId={"jest"}
                title={"Jest"}/>
                <Skill iconId={"mongodb"}
                title={"mongo db"}/>
                <Skill iconId={"nestjs"}
                title={"Nest JS"}/>
                <Skill iconId={"postgrest"}
                title={"PostgreSQL"}/>
                <Skill iconId={"reactgs"}
                title={"react js"}/>
                <Skill iconId={"reactnative"}
                title={"react nactive"}/>
                <Skill iconId={"redux"}
                title={"Redux"}/>
                <Skill iconId={"styledcomp"}
                title={"Styled Components"}/>
                <Skill iconId={"typescript"}
                title={"typescript"}/>
            </FlexWrapper>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: bisque;
    min-height: 100vh;

`


