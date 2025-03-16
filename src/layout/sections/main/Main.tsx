import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'

// import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        // <div>
        //     <FlexWrapper align={"center"} justify={"space-around"}>
        //     <div>
        //    <h1>DEVELOPER</h1>
        //     <h2>Vadim Korolenko</h2>
        //     <Text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.</Text>
        //    <Button>Contact Me</Button>
        //     </div>
        //
        //     <Photo src={photo} alt=""/>
        //         </FlexWrapper>
        //
        // </div>

        <StyledMain>
            <LeftSection>
                <div style={{ fontSize: '12px', color: '#6c757d' }}>DEVELOPER</div>
                <Title>Vadim Korolenko</Title>
                <Text>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
                </Text>
                <Button>Contact Me</Button>
            </LeftSection>
            <RightSection>
                <Photo src={photo} alt="photo"/>

                {/*<Dimensions>1131 x 399 <ArrowIcon /></Dimensions>*/}
            </RightSection>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  max-width: 1440px;
    width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  background-color: bisque;
  border: 2px solid red;
 
`;

const Photo = styled.img`
    width: 250px;
    height: 300px;
    object-fit: cover;
    padding: 40px;
    
`
const Text = styled.text`
 width: 520px; /* Ограничиваем ширину блока */
    color: #6c757d;
    font-size: 16px;
    margin-bottom: 20px;

`;


const LeftSection = styled.div`
    margin: 0 0 0 182px;
    padding: 20px;
    border: 2px solid red;
  //width: 50%;
`;

const RightSection = styled.div`
  
  padding: 20px;
  width: 50%;
  text-align: center;
  border: 2px solid red;
`;

const Button = styled.button`
    display: flex;
    background-color: #6a0dad;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin: 30px 0 0 0;

`

const Title = styled.h1`
  color: #6a0dad;
  font-size: 36px;
  margin-bottom: 10px;
`;

