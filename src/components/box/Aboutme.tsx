import React from 'react';
import styled from "styled-components";

export const Aboutme = () => {
    return (
        <StyledAboutMe>
            <AboutMeTitle> About me</AboutMeTitle>
            <AboutMeText>The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were placed within this chamber during the Neolithic period, representing at least nine or ten individuals.</AboutMeText>

        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.div`
    margin: 356px 0 0 182px;
    box-sizing: border-box;
    border: 2px solid red;
    background-color: #f1d442;
    

`
const AboutMeTitle = styled.h2`
    margin-bottom: 20px;

`

const AboutMeText = styled.p`
    //margin: 356px 0 0 0;
    font-size: 18px;
    width: 840px; /* Ограничиваем ширину блока */
    text-align: left; /* Выравниваем текст внутри блока по левому краю */
   


`