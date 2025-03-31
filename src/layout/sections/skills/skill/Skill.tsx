import React from 'react';
import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

type SkillPropsType = {
    iconId: string
    title: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={props.iconId} />
                <SkillTitle>{props.title}</SkillTitle>
            </FlexWrapper>


        </StyledSkill>
    );
};

const StyledSkill = styled.div`


`
const SkillTitle = styled.h3`
    margin: 70px 0 15px;
   
    text-transform: uppercase;
   

`