import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <div>
            <FlexWrapper align={"center"} justify={"space-around"}>
            <div>
           <h1>DEVELOPER</h1>
            <h2>Vadim Korolenko</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.</p>
            </div>

            <Photo src={photo} alt=""/>
                </FlexWrapper>

        </div>
    );
};

const Photo = styled.img`
    width: 250px;
    height: 300px;
    object-fit: cover;
    


`