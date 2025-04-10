import styled from 'styled-components';
import {Menu} from "../../components/menu/Menu.tsx";
// import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper align={"space-between"}>
                    {/*<Logo/>*/}
                    <Menu/>
                </FlexWrapper>
            </Container>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    align-content: space-between;
    background-color: #ace8d8;
    box-sizing: border-box;
    border: 1px solid red;


`