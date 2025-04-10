import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./work/Work.tsx";
import socialImg from './../../../assets/images/image1.png'
import {Container} from "../../../components/Container.tsx";

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper justify="space-around" wrap="wrap">
                    <Work
                title={"TITLE PROJECT"}

                src={socialImg}
                textWork={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                />

                <Work title={"I N S I G H T G R A M"}
                      src={socialImg}
                      textWork={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}/>
                <Work title={"TITLE PROJECT"}
                      src={socialImg}
                      textWork={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}/>

                <Work title={"I N S I G H T G R A M"}
                      src={socialImg}
                      textWork={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}/>

            </FlexWrapper>
            {/*<Image src={image1} alt="image1"/>*/
            }
            {/*<TitleProject>TITLE PROJECT</TitleProject>*/
            }
            {/*<ButtonProject>JAVASCRIPT</ButtonProject>*/
            }
            {/*<ButtonProject>POSTGESQL</ButtonProject>*/
            }
            {/*<ButtonProject>REACT</ButtonProject>*/
            }
            {/*<ButtonProject>REDUX</ButtonProject>*/
            }
            {/*<TextProject>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</TextProject>*/
            }


        </Container>

</StyledWorks>
)
    ;
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: darkgrey;
    margin-top: 140px;
    gap: 26px 42px;

`
const SectionTitle = styled.h2`


`
const Button = styled.button`
    border-radius: 4px;
    padding: 8px 16px;
    width: 105px;
    height: 30px;

`
const ButtonProject = styled.button`
    background-color: #6a0dad;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin: 30px 0 0 0;
`

