import './App.css'
import {Header} from "./layout/hesder/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
// import {Works} from "./layout/sections/works/Works.tsx";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            {/*<Works/>*/}
        </div>
    )
}

export default App

