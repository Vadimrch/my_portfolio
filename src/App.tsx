import './App.css'
import {Header} from "./layout/hesder/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Aboutme} from "./components/box/Aboutme.tsx";
import {Arrow} from "./components/arrow/Arrow.tsx";
import {Works} from "./layout/sections/works/Works.tsx";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Arrow/>
            <Aboutme/>
            <Works/>
        </div>
    )
}

export default App

