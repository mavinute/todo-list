import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1120px){
            font-size: 93.7%;
        }
        @media(max-width: 700px){
            font-size: 87.5%;
        }
    }

    body {
        background-color: #0062be;
    }

    body, button, input {
        font-family: sans-serif;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

    [disabeld]{
        cursor: not-allowed;
        opacity: 0.7;
    }
`