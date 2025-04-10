import styled from "styled-components";
import {Container} from "../Container.tsx";
import {FlexWrapper} from "../FlexWrapper.tsx";
import line from "./../../assets/images/line.svg"

export const Aboutme = () => {
    return (
        <StyledAboutMe>
            <Container>

                <AboutMeTitle> About me</AboutMeTitle>
                <FlexWrapper align={"center"}>
                    <AboutMeText>
                        The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of
                        a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a
                        chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains
                        were placed within this chamber during the Neolithic period, representing at least nine or ten
                        individuals.
                        <img src={line} alt=""/>
                    </AboutMeText>


                </FlexWrapper>

            </Container>

        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    width: 100%;
    //margin: 356px 0 0 182px;
    box-sizing: border-box;
    border: 1px solid red;
    background-color: #e4ddb7;
    margin-top: 219px;



`
const AboutMeTitle = styled.h2`
    margin-bottom: 20px;
    padding-left: 15px

`

const AboutMeText = styled.p`
    max-width: 865px;
    font-size: 18px;
    font-weight: 400px;
    line-height: 26px;
    letter-spacing: 0.04em;
    
    //width: 840px; /* Ограничиваем ширину блока */
    text-align: left; /* Выравниваем текст внутри блока по левому краю */

`
const StyledLine = styled.div`
    //display: flex;
`