import styled from "styled-components";
import arrow from "./../../assets/images/arrow.svg"
// import {Icon} from "../icon/Icon.tsx";

export const Arrow = () => {
    return (
        <StyledArrow>
            <img src={arrow} alt="arrow"/>
            {/*<Icon iconId={"arrow"} />*/}
        </StyledArrow>
    );
};

const StyledArrow = styled.div`
    position: absolute;
    //bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 16px;
    //display: flex;
    //flex-wrap: wrap;
    //justify-content: center;
    //margin: 0 auto;
    //background-color: #c9e3c9;
    //border: 1px solid red;
    
`
// const IconArrow = styled.div`
// `