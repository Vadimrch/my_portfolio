import styled from 'styled-components';
import {Menu} from "../../components/menu/Menu.tsx";
// import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>

                    {/*<Logo/>*/}
                    <Menu/>

            </Container>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
   
    background-color: #ace8d8;
    box-sizing: border-box;
    border: 1px solid red;
  //  display: flex;
  //justify-content: space-between;
    //align-items: center;


`