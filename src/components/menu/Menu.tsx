import styled from "styled-components";



export const Menu = () => {
    return (
        <StyledMenu>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Projects</a>
                    </li>
                    <li>
                        <Button>Contact</Button>
                    </li>
                </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
ul {
    display: flex;
    //flex-direction: row;
    justify-content: space-between;
    align-items: center;
   
    
   
    gap: 30px;
    list-style: none;
    padding: 0;
    
    //.home {
    //margin-right: auto
    //}
}
`
const Button = styled.button`
    border-radius: 6px;
    padding: 12px 20px 13px 20px;
    width: 105px;
    height: 45px;
`