import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.tsx";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
    body {
        margin: 0;
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    
    button {
        background-color: ${theme.colors.buttonColor};
        color: #dbffff;
        cursor: pointer;
        border: none;
      
    }

    &:focus-visible {
        outline: 1px solid ;
    }
`