import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";

export const Contact = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <StyledForm>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <Field type="text" id="name" placeholder={"Example"}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" placeholder={"Value"}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <Field id="message" placeholder={"Hi, i will ..."} as={"textarea"}/>
                    </div>
                    <ButtonSubmit type={"submit"}>Submit</ButtonSubmit>

                </StyledForm>
            </Container>

        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 50vh;
    background-color: #fffbe1;
    margin-top: 142px;
`
const StyledForm = styled.form`
    max-width: 532px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 48px;
    margin: 0 auto;
    margin-top: 51px;

    textarea {
        resize: none;
        height: 165px;
    }
    label {
        display: block;
        margin-bottom: 6px;
    }
`
const Field = styled.input`
    height: 48px;
    width: 100%;
    border-radius: 6px;
    letter-spacing: 0.05em;
    border: 1px solid ${theme.colors.borderColor};
    box-sizing: border-box;
    

    font-family: "Montserrat", sans-serif;

    &::placeholder {

        text-transform: capitalize;
    }

    &:focus-visible {
        outline: 2px solid ${theme.colors.borderColor};
    }
`
const ButtonSubmit = styled.button`
    font-size: 16px;
    border-radius: 6px;
    padding: 12px 20px;
    width: 532px;
    height: 48px;
   gap: 22px
    
`

