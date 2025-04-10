import './App.css'
import {Header} from "./layout/header/Header.tsx";

import {Aboutme} from "./components/box/Aboutme.tsx";
import {Arrow} from "./components/arrow/Arrow.tsx";
import {Works} from "./layout/sections/works/Works.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Contact} from "./layout/sections/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {GlobalStyles} from "./styles/Global.styled.tsx";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Arrow/>
            <Aboutme/>
            <Works/>
            <Skills/>
            <Contact/>
            <Footer/>
            <GlobalStyles/>
        </div>
    )
}

export default App

