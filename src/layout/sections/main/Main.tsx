import styled from "styled-components";
import photo from './../../../assets/images/support 1.png'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <MainInfo>
                    <FlexWrapper direction={"column"} align={"start"}>
                    <MainTitle>Developer</MainTitle>
                    <Name>Vadim Korolenko</Name>
                    <MainText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam consequat sunt.</MainText>
                    <Button>Contact Me</Button>
                    </FlexWrapper>
                </MainInfo>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
            </Container>

        </StyledMain>
    );
};

const MainInfo = styled.div`

`

const StyledMain = styled.div`
    display: flex;
    margin-top: 141px;
    background-color: #e3caca;
    border: 1px solid red;
    
`
const Photo = styled.img`
    //display: flex;
    //justify-content: end;
    width: 577px;
    height: 433px;
    object-fit: cover;
    //margin: 141px 168px 16px 77px;
`
const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.04em;
`
const MainText = styled.p`
    width: 520px;

`
const Name = styled.span`
    font-size: 62px;
    color: ${theme.colors.font};
`
const Button = styled.button`
    font-size: 16px;
    border-radius: 6px;
    padding: 12px 20px 13px 20px;
    margin: 29px auto;
    width: 134px;
    height: 45px;

`
