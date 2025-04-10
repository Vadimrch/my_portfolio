import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";

export const Contact = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <Field placeholder={"Example"}/>
                <Field placeholder={"Value"}/>
                <Field placeholder={"Hi, i will ..."} as={"textarea"}/>
                <ButtonSubmit type={"submit"}>Submit</ButtonSubmit>

            </StyledForm>



        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 50vh;
    background-color: #fffbe1;
    margin-top: 142px;
`
const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`
const Field = styled.input`
    
`
const ButtonSubmit = styled.button`
    font-size: 16px;
    border-radius: 6px;
    padding: 12px 20px;
    width: 532px;
    height: 48px;
    
`

