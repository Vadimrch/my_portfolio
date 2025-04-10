import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.tsx";


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper >


                <Skill iconId={"javascript"}
                       title={""}/>
                <Skill iconId={"typescript"}
                       title={""}/>
                <Skill iconId={"nestjs"}
                       title={""}/>
                <Skill iconId={"reactgs"}
                       title={""}/>
                <Skill iconId={"redux"}
                       title={""}/>
                <Skill iconId={"styledcomp"}
                       title={""}/>

            </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: bisque;
    min-height: 100vh;
    margin-top: 140px;
    //gap: 5px;

`


